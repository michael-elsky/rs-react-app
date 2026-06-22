const BASE_URL = 'https://swapi.py4e.com/api/';

export const getFilms = async (searchValue: string) => {
  const url = searchValue 
    ? `${BASE_URL}films/?search=${searchValue}` 
    : `${BASE_URL}films/`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error('Failed to fetch films');
  }

  return res.json();
};

export const getFilm = async (id: string) => {
  const res = await fetch(`${BASE_URL}films/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch film details');
  }

  return res.json();
};