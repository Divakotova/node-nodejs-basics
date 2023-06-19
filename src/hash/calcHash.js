import path from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { readFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const content = await readFile(
    path.join(__dirname, "files", "fileToCalculateHashFor.txt")
  );
  const hash = createHash("sha256").update(content).digest("hex");

  console.log(hash);
};

await calculateHash();
