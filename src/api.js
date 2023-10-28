import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Z2ea798G6Z7xoLu9cvMtp_XxAW4vyIQkgmQCLwV34fY",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
