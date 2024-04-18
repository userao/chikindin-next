import getBackendRoute from "./getBackendRoute";

async function getProject(id) {
  const backendRoute = getBackendRoute();
  const res = await fetch(`${backendRoute}/api/projects/${id}`);
  return res.json();
}

export default getProject;
