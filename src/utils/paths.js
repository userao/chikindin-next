const paths = {
  getProjectImagesPathById: (projectId) =>
    path.join(allProjectsImagesFolderPath, String(projectId)),
  getProjectsImagesPath: () => '/Chikindin-design/images/our-work/',
};

export default paths;
