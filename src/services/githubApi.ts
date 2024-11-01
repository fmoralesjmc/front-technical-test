import axios from 'axios';
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
type PaginationRel = 'next' | 'prev' | 'last' | 'first';

interface GithubResponse {
  items: any[];
  total_count: number;
  paginationLinks: Partial<Record<PaginationRel, string>>;
}

export const searchGithubUsers = async (
  query: string,
  sort: string = 'desc',
  perPage: number = 30,
  page: number = 1
): Promise<GithubResponse> => {
  try {
    console.log("🚀 ~  params: { q: query, sort, per_page: perPage, page }:",  { q: query, sort, per_page: perPage, page })
    const response = await axios.get(`https://api.github.com/search/users`, {
      params: { q: query, sort, per_page: perPage, page },
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });
      
    const linkHeader = response.headers.link;
    const paginationLinks: Partial<Record<PaginationRel, string>> = {};

    if (linkHeader) {
      const links = linkHeader.split(',').map((link: string) => link.trim());
      for (const link of links) {
        const [urlPart, relPart] = link.split(';');
        const url = urlPart.replace(/<|>/g, '').trim();
        const relMatch = relPart.match(/rel="(.*)"/);

        if (relMatch) {
          const rel = relMatch[1] as PaginationRel; 
          paginationLinks[rel] = url;
        }
      }
    }

    return {
      items: response.data.items,
      total_count: response.data.total_count,
      paginationLinks,
    };
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};

export const getFollowersCount = async (followersUrl: string): Promise<number> => {
    try {
      const response = await fetch(followersUrl, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      });
      const followersData = await response.json();
      return Array.isArray(followersData) ? followersData.length : 0;
    } catch (error) {
      console.error('Error fetching followers:', error);
      return 0;
    }
  };