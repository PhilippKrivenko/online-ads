export const getResource = async (url: string) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}${url}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url} received ${res.status}`);
  }

  return res.json();
};
