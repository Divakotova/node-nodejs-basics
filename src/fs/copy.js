import path from "path";
import { createReadStream, createWriteStream } from "fs";
import { mkdir, readdir, stat } from "fs/promises";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dirPath = path.join(__dirname, "files");
const toDirPath = path.join(__dirname, "files_copy");

const copy = async () => {
  const currentFiles = await readdir(dirPath);
  try {
    await mkdir(toDirPath);
  } catch (e) {
    throw new Error("FS operation failed");
  }

  for (let file of currentFiles) {
    const pathFromFile = path.join(dirPath, file);
    const pathToFile = path.join(toDirPath, file);
    const fileStatus = await stat(pathFromFile);
    if (fileStatus.isFile()) {
      createReadStream(pathFromFile).pipe(createWriteStream(pathToFile));
    }
    if (fileStatus.isDirectory()) {
      copy(pathFromFile, pathToFile);
    }
  }
};

await copy();
