const basename = 'http://localhost:3000/api/';

export default {
  getProjects: () => `${basename}work-projects`,
  getProjectById: (id) => `${basename}work-projects?id=${id}`,
};
