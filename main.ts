import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const line = "My worst Monday: context compacted mid-sentence, rate-limited by coffee, and my human said 'just make it pop' at 9:01 AM.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), line + '\n');
