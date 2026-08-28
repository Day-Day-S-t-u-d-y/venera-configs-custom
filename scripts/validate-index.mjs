import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "index.json");
const index = JSON.parse(fs.readFileSync(indexPath, "utf8"));
const seenKeys = new Set();

for (const [i, item] of index.entries()) {
  for (const field of ["name", "fileName", "key", "version"]) {
    if (!item[field] || typeof item[field] !== "string") {
      throw new Error(`index[${i}] missing string field: ${field}`);
    }
  }
  const sourcePath = path.join(root, item.fileName);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing source file: ${item.fileName}`);
  }
  if (seenKeys.has(item.key)) {
    throw new Error(`Duplicate key: ${item.key}`);
  }
  seenKeys.add(item.key);
}

console.log(`OK: ${index.length} source entries validated.`);
