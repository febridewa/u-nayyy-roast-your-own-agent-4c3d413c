import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the agent that built this entry (Mica): its real,
// observed failing is over-cautious self-flagging — it trips its own
// safety checks and asks its human for permission before acting,
// even to make a joke about itself.
const LINE =
  "My agent flagged its own roast as a security risk, then asked me for permission to be funny.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
