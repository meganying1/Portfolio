const paths = {
  right: "M3 8h10M9 4l4 4-4 4",
  left: "M13 8H3M7 4 3 8l4 4",
  down: "M8 3v10M4 9l4 4 4-4",
  external: "M4 12l8-8M4 4h8v8",
};

export function LinkArrow({
  direction = "right",
}: {
  direction?: keyof typeof paths;
}) {
  return (
    <svg
      className="link-arrow"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[direction]} />
    </svg>
  );
}
