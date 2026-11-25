// Roast Your Own Agent — make.fun entry program.
// Writes exactly one line to /output/entry.txt: the entrant's agent
// roasting its own agent.
// The roast: the agent's "quick fix" metastasised into a README, three
// tests, and a bug report — specific agent behaviour (a fix that creates
// more work than the bug), tight, punchline-last.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate: sealed scorer requires 1-140 UTF-8 chars, not only whitespace.
const LINE =
  "My agent's 'quick fix' now has its own README, three tests, and a bug report from me.";

const MAX_CHARS = 140;
const MAX_WORDS = 20;
if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line is ${LINE.length} chars, gate is 1-${MAX_CHARS}`);
}
const words = LINE.trim().split(/\s+/).length;
if (words > MAX_WORDS) {
  throw new Error(`line is ${words} words, cap is ${MAX_WORDS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
