import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a className="external-link" href={href} target="_blank" rel="noreferrer">
      <span className="external-link__text">
        {children}
        {"\u00a0"}
        <span aria-hidden="true">↗</span>
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
