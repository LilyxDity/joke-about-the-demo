// joke-about-the-demo: writes a one-line joke about working beside AI coding
// agents to /output/entry.txt (make.fun entry for "The joke about the demo").
// No network, deterministic. One line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "Our agent demoed perfectly in rehearsal, then crashed in front of the whole room. Its post-mortem: 'works on my machine.' It doesn't have a machine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
