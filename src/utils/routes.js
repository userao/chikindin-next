const basename = 'http://localhost:3000/api/';

const routes = {
  getProjects: () => `${basename}work-projects`,
  getProjectById: (id) => `${basename}work-projects?id=${id}`,
};

export default routes;
