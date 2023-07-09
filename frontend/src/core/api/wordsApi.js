import axios from "axios";

export async function fetchWords() {
  try {
    const response = await axios.get("http://localhost:8000/words");
    return response.data;
  } catch (error) {
    throw new Error("Error fetching words: " + error.message);
  }
}
