import { useEffect, useState } from 'react';
import { fetchData } from '../api/fetch';

const useFetchFilmDetails = (itemId: string) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    const fetchFilms = async (itemId: string) => {
      const url = `https://swapi.py4e.com/api/films/${itemId}`;
      console.log(url);

      setIsLoading(true);
      setErrorMessage('');

      try {
        const data = await fetchData(url);

        setData(data);
      } catch (error) {
        setErrorMessage((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms(itemId);
  }, [itemId]);

  return {
    data,
    isLoading,
    errorMessage,
  };
};

export default useFetchFilmDetails;
