export const fetchListPodcasts = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  if (!response.ok) {
    throw new Error(
      "Error al obtener el listado de podcasts desde la llamada a la API"
    );
  }
  return response.json();
};
export const fetchDetailPodcast = async () => {
  const response = await fetch(
    "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
  );
  if (!response.ok) {
    throw new Error(
      "Error al obtener el podcast seleccionado desde la llamada a la API"
    );
  }
  return response.json();
};
