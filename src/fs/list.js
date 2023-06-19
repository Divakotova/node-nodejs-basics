import path from "path";
import { fileURLToPath } from "url";
import { readdir } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const dirPath = path.join(__dirname, "files");
    const currentFiles = await readdir(dirPath);
    for (let file of currentFiles) {
      console.log(file);
    }
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
