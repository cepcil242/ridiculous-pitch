import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "For $19, a professional mourner reads a eulogy for your dead houseplant over Zoom, because grieving plant parents happily pay to feel less silly about crying over a fern.";

function validateEntry(text: string): void {
  // Gate: the kit's sealed scorer accepts 1-200 characters of UTF-8 text.
  // Count Unicode code points (spread), not UTF-16 code units, so an
  // astral character counts once; the throw happens before any write,
  // so an invalid entry never reaches /output/entry.txt.
  if (typeof text !== "string") {
    throw new Error("entry must be a string");
  }
  // Gate: the entry must be a SINGLE line — a one-sentence pitch is one
  // line, so any newline or carriage return is rejected before any write.
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no newline characters)");
  }
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be whitespace-only");
  }
  // Gate: the entry must be EXACTLY one sentence — it must end with
  // exactly one terminal punctuation mark (".", "!" or "?") as its final
  // character, with no other sentence-terminating mark anywhere before
  // that final character. Rejected before any write.
  const lastChar = text[text.length - 1];
  if (lastChar !== "." && lastChar !== "!" && lastChar !== "?") {
    throw new Error("entry must be exactly one sentence");
  }
  const body = text.slice(0, -1);
  if (body.includes(".") || body.includes("!") || body.includes("?")) {
    throw new Error("entry must be exactly one sentence");
  }
}

const outPath = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";
validateEntry(ENTRY);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
