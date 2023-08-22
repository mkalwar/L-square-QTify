import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";
export const fetchTopAlbums = async () => {
  console.log("Inside fecth top album");
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (err) {
    console.log("error in fetching");
    console.err(err);
  }
};

export const fetchNewAlbums = async () => {
  console.log("Inside fecth top album");
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (err) {
    console.log("error in fetching");
    console.err(err);
  }
};
