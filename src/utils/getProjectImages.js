export default function getProjectImages(projectId, imagesList) {
  const projectImages = imagesList.filter((image) => {
    const id = Number(image.path.split('/')[4]);
    return id === projectId;
  })

  return projectImages;
}