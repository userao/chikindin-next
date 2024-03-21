import * as fs from 'node:fs/promises';
import * as path from 'node:path';

async function getFilepaths(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const filepaths = files.map((f) => path.join(dirPath, f));
    return filepaths;
  } catch (err) {
    console.error(err);
  } 
}

export default getFilepaths;
