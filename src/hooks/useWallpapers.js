import { useState, useEffect } from 'react';
import axios from 'axios';

// Load API key from environment variables
// const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const API_KEY = 'RAFg8xF6DoXDby8GD0lgqn9sy4q0beNEjLOwqCXwvaxuIkhwiw4IJNvA';
const API_URL = 'https://api.pexels.com/v1';

export const useWallpapers = () => {
  const [wallpapers, setWallpapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWallpapers = async (query = '', category = '') => {
    try {
      setLoading(true);
      setError(null);

      let url = `${API_URL}/curated?per_page=40`;
      if (query) {
        url = `${API_URL}/search?query=${query}&per_page=40`;
      } else if (category) {
        url = `${API_URL}/search?query=${category}&per_page=40`;
      }

      const response = await axios.get(url, {
        headers: {
          Authorization: API_KEY
        }
      });

      setWallpapers(response.data.photos);
    } catch (err) {
      setError('Failed to fetch wallpapers. Please try again later.');
      console.error('Error fetching wallpapers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallpapers();
  }, []);

  return { wallpapers, loading, error, fetchWallpapers };
};
