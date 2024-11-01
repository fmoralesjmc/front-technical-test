import axios from 'axios';

export const searchGithubUsers = async (query: string, sort: string = 'desc', perPage: number = 3, page: number = 1) => {
  try {
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: {
        q: query,
        sort,
        per_page: perPage,
        page,
      },
    });
    return response.data; 
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error; 
  }
};