import getBackendRoute from "./getBackendRoute";

async function getProjects() {
  const backendRoute = getBackendRoute();
  const res = await fetch(`${backendRoute}/api/projects`);
  return res.json();
}

export default getProjects;