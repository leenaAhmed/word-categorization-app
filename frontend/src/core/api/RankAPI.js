import axios from "axios";

export async function fetchRankData(score) {
  try {
    const response = await axios.post("http://localhost:8000/words/rank", {
      score
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching rank data: " + error.message);
  }
}
