export const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`Error ${response.status}: Not Found`);
    }

    throw new Error(`Error ${response.status}: ${response.statusText}`);
  }

  return response.json();
};
