import path from "path";
import paths from "./paths";
import getFolderContent from "./getFolderContent";

export default async function(projectId) {
    const projectImagesFolderPath = paths.getProjectImagesPathById(projectId);

    const subfolders = await getFolderContent(projectImagesFolderPath);
    const randomSubfolderIndex = Math.floor(Math.random() * subfolders.length);
    const randomSubfolderName = subfolders[randomSubfolderIndex].name;
    const randomSubfolderPath = path.join(projectImagesFolderPath, randomSubfolderName);
    
    const images = await getFolderContent(randomSubfolderPath);
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImageName = images[randomImageIndex].name;
    const randomImagePath = path.join(randomSubfolderPath, randomImageName);

    return randomImagePath;
}