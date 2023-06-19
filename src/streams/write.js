import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const file = path.join(__dirname, "files", "fileToWrite.txt");
  const writableStream = createWriteStream(file, { flags: "a" });
  process.stdin.pipe(writableStream);
};

await write();
