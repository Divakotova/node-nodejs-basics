import path from "path";
import { fileURLToPath } from "url";
import { rename as renameFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fromFile = path.join(__dirname, "files", "wrongFilename.txt");
const toFile = path.join(__dirname, "files", "properFilename.md");

const checkFileExists = async (file) => {
  try {
    await readFile(file);
    return true;
  } catch (e) {
    return false;
  }
};

const rename = async () => {
  if (await checkFileExists(toFile)) {
    throw new Error("FS operation failed");
  } else {
    await renameFile(fromFile, toFile);
  }
};

await rename();
