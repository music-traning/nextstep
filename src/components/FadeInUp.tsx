"use client";

import React, { useEffect, useRef, useState } from "react";

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * 軽量なIntersectionObserver + CSSトランジションによるフェードインアップ。
 * - SSR/初期HTMLでは opacity:1 のまま出力し、LCP遅延やSEO・アクセシビリティ低下を防止
 * - ビューポート外の要素のみスクロール時に滑らかにフェードインアップ
 * - 強制リフロー（offsetWidth等の同期レイアウト読み取り）を一切行わない実装
 */
export function FadeInUp({ children, delay = 0, className = "" }: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"initial" | "hidden" | "visible">("initial");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setState("visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        } else {
          // 初回コールバック時点で画面外にある要素のみアニメーション待機状態にする
          setState((prev) => (prev === "initial" ? "hidden" : prev));
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const transitionStyle: React.CSSProperties =
    state === "hidden"
      ? {
          opacity: 0,
          transform: "translate3d(0, 20px, 0)",
        }
      : {
          opacity: 1,
          transform: "translate3d(0, 0, 0)",
          transitionProperty: "opacity, transform",
          transitionDuration: "600ms",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          transitionDelay: delay ? `${Math.round(delay * 1000)}ms` : "0ms",
        };

  return (
    <div ref={ref} className={className} style={transitionStyle}>
      {children}
    </div>
  );
}
