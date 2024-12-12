import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1bc1cfa5d5894cecad075a94331a4971",
  },
});
