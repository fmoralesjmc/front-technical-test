import { useState, useEffect } from 'react';
import { searchGithubUsers } from '../services/githubApi';

const useGithubUsers = (query: string, sort: string = 'desc', perPage: number = 30, page: number = 1) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!query) return; 

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await searchGithubUsers(query, sort, perPage, page);
       
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
};

export default useGithubUsers;