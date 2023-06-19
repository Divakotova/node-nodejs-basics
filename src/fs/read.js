import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  try {
    const file = path.join(__dirname, "files", "fileToRead.txt");
    const readStream = await readFile(file, "utf-8");
    console.log(readStream);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
