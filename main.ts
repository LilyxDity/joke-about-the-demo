// joke-about-the-demo: a tiny program that writes a one-line joke about
// working beside AI coding agents to /output/entry.txt, for make.fun's
// "The joke about the demo" bounty. No network, deterministic output.
import { mkdirSync } from "node:fs";
import { writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const JOKE_TEXT =
  "Our agent demoed perfectly in rehearsal, then crashed in front of the whole room. Its post-mortem: 'works on my machine.' It doesn't have a machine.";

const outDir = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
const entryPath = joinPath(outDir, "entry.txt");
const dirOptions = { recursive: true };
mkdirSync(outDir, dirOptions);
writeFileSync(entryPath, JOKE_TEXT, "utf8");
