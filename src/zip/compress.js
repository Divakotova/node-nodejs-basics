import fs from "fs";
import path from "path";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const file = path.join(__dirname, "files", "fileToCompress.txt");
  const archiveFile = path.join(__dirname, "files", "archive.gz");
  const readableStream = fs.createReadStream(file);
  const writableStream = fs.createWriteStream(archiveFile);
  readableStream.pipe(zlib.createGzip()).pipe(writableStream);
};

await compress();
