import * as path from "path";
import { cwd } from "process";

const workingDir = cwd();
const publicPath = path.join(workingDir, "public");
const allProjectsImagesFolderPath = path.join(publicPath, "images", "our-work");

const paths = {
  getProjectImagesPathById: (projectId) =>
    path.join(allProjectsImagesFolderPath, String(projectId)),
};

export default paths;
