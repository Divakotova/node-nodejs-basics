import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const file = path.join(__dirname, "files", "fileToCompress.txt");
  const archiveFile = path.join(__dirname, "files", "archive.gz");
  const readableStream = fs.createReadStream(archiveFile);
  const writableStream = fs.createWriteStream(file);

  readableStream.pipe(zlib.createGunzip()).pipe(writableStream);
};

await decompress();
