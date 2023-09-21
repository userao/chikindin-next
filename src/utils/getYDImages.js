import routes from "./routes";

export default async function getYDImages() {
  const route = `${routes.getAPIRoute()}/files?media_type=image&fields=items.path,items.name,items.file&limit=1000`;

  return fetch(route, {
    headers: { Authorization: `OAuth ${process.env.YANDEX_AUTH_TOKEN}` },
  })
    .then((res) => res.json())
    .then((data) => data.items);
}
