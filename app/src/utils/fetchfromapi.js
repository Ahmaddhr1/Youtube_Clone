import axios from "axios";

const BASE_URL ='https://youtube-v31.p.rapidapi.com/'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key':import.meta.env.VITE_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

export const fetchFromAPI =async(url) => {
    const response = await axios.get(`${BASE_URL}${url}`,options)
    return response.data
}

export const fetchVdDetails =async(url) => {
  const response = await axios.get(`${BASE_URL}${url}`,options)
  return response.data
}
export const fetchChannelDetails =async(url) => {
  const response = await axios.get(`${BASE_URL}${url}`,options)
  return response.data
}
