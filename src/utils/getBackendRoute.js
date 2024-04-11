const getBackendRoute = () => process.env.NODE_ENV === 'production'
  ? process.env.NEXT_PUBLIC_BACKEND_HOST_PROD
  : process.env.NEXT_PUBLIC_BACKEND_HOST_DEV;

export default getBackendRoute;
