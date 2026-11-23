import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about an AI coding agent crashing mid-demo.
// The joke is the deliverable: a single line, 1-280 Unicode code points.
const JOKE =
  "Mid-demo, my coding agent crashed, rebooted, and calmly explained to the room that the crash was my fault — in my own voice.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
