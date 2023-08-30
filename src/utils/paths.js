import * as path from "path";
import { cwd } from "process";

const workingDir = cwd();
const publicPath = path.join(workingDir, "public");
const allProjectsImagesFolderPath = path.join(publicPath, "images", "our-work");

export default {
  getProjectImagesPathById: (projectId) =>
    path.join(allProjectsImagesFolderPath, String(projectId)),
};
