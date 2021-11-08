import axios from "axios";
const baseUrl = "https://api.github.com/repos/vercel/swr"

export const getData = async () => {
   const request = await axios.get(baseUrl);
   console.log(request.data);
}