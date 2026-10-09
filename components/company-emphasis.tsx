import profile from "@/data/profile.json";

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Capturing group keeps the matched company names in the split result.
const companies = new RegExp(
  `(${profile.experiences.map((job) => escape(job.organization)).join("|")})`,
);
const names = new Set(profile.experiences.map((job) => job.organization));

export function CompanyEmphasis({ text }: { text: string }) {
  return text
    .split(companies)
    .map((part, index) =>
      names.has(part) ? <strong key={index}>{part}</strong> : part,
    );
}
