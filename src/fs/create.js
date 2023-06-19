import path from "path";
import { writeFile, readFile } from "fs/promises";
import { fileURLToPath } from "url";

const checkFileExists = async (file) => {
  try {
    await readFile(file);
    return true;
  } catch (e) {
    return false;
  }
};

const create = async () => { 
  const content = "I am fresh and young";

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file = path.join(__dirname, "files", "fresh.txt");

  const isExist = await checkFileExists(file);

  if (isExist) {
    throw Error("FS operation failed");
  }

  await writeFile(file, content, {
    encoding: "utf-8",
    flag: "w",
  });
};

await create();