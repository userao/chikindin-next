import path from 'node:path';
import fs from 'node:fs/promises'

async function getProjectImagesPaths(projectId) {
  const projectsDirPath = 'public/images/projects/';
  const currentProjectDirPath = `${projectsDirPath}${projectId.toString()}`
  const roomDirNames = await fs.readdir(path.join(currentProjectDirPath));
  const imagesPaths = await Promise.all(
    roomDirNames.map(async (dirname) => {
      const projectRoomDirPath = path.join(currentProjectDirPath, dirname);
      const filenames = await fs.readdir(projectRoomDirPath);
      return filenames.map((name) => path.join(projectRoomDirPath, name));
    })
  );
  return imagesPaths.flat();
}

export default getProjectImagesPaths;
