import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="portfolio intro">
      <h1>Page not found</h1>
      <p className="intro__copy">
        This page doesn’t exist.{" "}
        <Link href="/">Return to Megan’s portfolio</Link>.
      </p>
    </main>
  );
}
