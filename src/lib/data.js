// Central utility to fetch data from db.json
// In production you'd replace this with API calls

export async function getData() {
  const res = await fetch("/db.json", { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load db.json");
  return res.json();
}

// Server-side data fetching (for SSR / App Router)
export async function getServerData() {
  const { readFileSync } = await import("fs");
  const { join } = await import("path");
  const filePath = join(process.cwd(), "public", "db.json");
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}
