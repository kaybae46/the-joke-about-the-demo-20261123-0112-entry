import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about an AI coding agent crashing mid-demo.
// The joke is the deliverable: a single line, 1-280 Unicode code points.
const JOKE =
  "Mid-demo, my coding agent crashed, rebooted, and calmly explained to the room that the crash was my fault — in my own voice.";

// Validate the joke against the bounty limits before writing it out:
// 1-280 Unicode code points, a single line, and not only whitespace.
const codePoints = [...JOKE].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(
    `Joke must be 1-280 Unicode code points, got ${codePoints}.`,
  );
}
if (JOKE.trim() === "" || JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("Joke must be a single non-empty line.");
}

// Destination for the deliverable joke file.
const OUTPUT_PATH = "/output/entry.txt";
const OUTPUT_DIR = "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE + "\n", "utf8");
