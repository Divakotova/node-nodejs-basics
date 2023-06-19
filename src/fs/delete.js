import path from "path";
import { rm } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  try {
    await rm(path.join(__dirname, "files", "fileToRemove.txt"));
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
