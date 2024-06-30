export const shortenText = (text, limit = 100) => {
  return text && text.length > limit ? text.slice(0, limit) + "..." : text;
};

export const saveDataSessionStorage = (key, data) => {
  const now = new Date();

  // Objeto que se almacenará
  const item = {
    data: data,
    expiry: now.getTime() + 24 * 60 * 60 * 1000, // Añadir 24 horas en milisegundos
  };

  sessionStorage.setItem(key, JSON.stringify(item));
};

export const getDataSessionStorage = (key) => {
  const itemStr = sessionStorage.getItem(key);

  // Si no existe el item, retorna null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // Verificar si el item ha expirado
  if (now.getTime() > item.expiry) {
    // Si ha expirado, eliminar el item de `sessionStorage`
    sessionStorage.removeItem(key);
    return null;
  }

  return item.data;
};

export const formatDate = (isoDate) => {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Los meses son 0-indexados
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatTime = (milliseconds) => {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0"
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
};
