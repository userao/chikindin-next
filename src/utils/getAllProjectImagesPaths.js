import getFolderContent from "./getFolderContent";
import paths from "./paths";
import * as path from "path";

export default async function (projectId) {
  const projectImagesFolderPath = paths.getProjectImagesPathById(projectId);

  const subfolders = await getFolderContent(projectImagesFolderPath);

  const imagesPaths = subfolders.reduce(async (acc, subfolder) => {
    const subfolderPath = path.join(projectImagesFolderPath, subfolder.name);
    const imagesInSubfolder = await getFolderContent(subfolderPath);

    const imagesInSubfolderSrcPath = imagesInSubfolder.map((image) => {
      const absoluteImagePath = path.join(subfolderPath, image.name);
      const sliceFrom = absoluteImagePath.indexOf('images');
      return absoluteImagePath.slice(sliceFrom);
    });

    const currentAcc = await acc;

    return [...currentAcc, ...imagesInSubfolderSrcPath];
  }, []);
  
  return imagesPaths;
}
