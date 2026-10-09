"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";

export function Disclosure({
  title,
  count,
  id,
  variant,
  children,
}: {
  title: string;
  count?: number;
  id?: string;
  variant: "projects" | "skills";
  children: ReactNode;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<boolean | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const settle = () => {
      const details = detailsRef.current;
      const content = contentRef.current;
      if (targetRef.current === null || !details || !content) return;
      details.dataset.motion = "instant";
      details.open = targetRef.current;
      content.style.removeProperty("height");
      targetRef.current = null;
      cleanupRef.current?.();
    };
    const preference = () => {
      if (media.matches) settle();
    };
    document.addEventListener("keydown", settle, true);
    media.addEventListener("change", preference);
    return () => {
      document.removeEventListener("keydown", settle, true);
      media.removeEventListener("change", preference);
      cleanupRef.current?.();
    };
  }, []);

  function toggle(event: MouseEvent<HTMLElement>) {
    const details = detailsRef.current;
    const content = contentRef.current;
    if (!details || !content) return;
    event.preventDefault();

    const next = !(targetRef.current ?? details.open);
    const fromHeight = details.open
      ? content.getBoundingClientRect().height
      : 0;
    cleanupRef.current?.();

    const instant =
      event.detail === 0 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (instant) {
      details.dataset.motion = "instant";
      details.open = next;
      content.style.removeProperty("height");
      targetRef.current = null;
      return;
    }

    details.dataset.motion = "pointer";
    content.style.height = `${fromHeight}px`;
    details.open = true;
    targetRef.current = next;

    // Commit the measured starting height before changing the transition target.
    void content.offsetHeight;
    content.style.height = `${next ? content.scrollHeight : 0}px`;

    function finish() {
      details!.dataset.motion = "idle";
      details!.open = next;
      content!.style.removeProperty("height");
      targetRef.current = null;
      cleanupRef.current?.();
    }
    function onEnd(event: TransitionEvent) {
      if (event.target === content && event.propertyName === "height") finish();
    }
    const styles = getComputedStyle(document.documentElement);
    const duration = Number.parseFloat(
      styles.getPropertyValue("--duration-disclosure"),
    );
    // Fallback for interrupted transitions or a panel with no height change.
    const timer = window.setTimeout(finish, duration * 2);
    content.addEventListener("transitionend", onEnd);
    cleanupRef.current = () => {
      window.clearTimeout(timer);
      content.removeEventListener("transitionend", onEnd);
      cleanupRef.current = null;
    };
  }

  return (
    <details
      ref={detailsRef}
      className={`disclosure disclosure--${variant}`}
      id={id}
    >
      <summary onClick={toggle}>
        <span className="link-label">{title}</span>
        <span className="disclosure__meta">
          {count !== undefined && (
            <span className="disclosure__count">{count} projects</span>
          )}
          <span className="disclosure__indicator" aria-hidden="true" />
        </span>
      </summary>
      <div className="disclosure__content" ref={contentRef}>
        {children}
      </div>
    </details>
  );
}
