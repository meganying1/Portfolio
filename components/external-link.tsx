import type { ReactNode } from "react";
import { LinkArrow } from "@/components/link-arrow";

export function ExternalLink({
  href,
  icon,
  iconOnly = false,
  children,
}: {
  href: string;
  icon?: ReactNode;
  /** Show just the icon; `children` becomes its accessible name. */
  iconOnly?: boolean;
  children: ReactNode;
}) {
  if (icon && iconOnly) {
    return (
      <a
        className="external-link external-link--icon"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
        <span className="sr-only">{children} (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <a
      className="external-link label-link"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      <span className="external-link__text">
        {icon}
        <span className="link-label">{children}</span>
        {"\u00a0"}
        <LinkArrow direction="external" />
      </span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
