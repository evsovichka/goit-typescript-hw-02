import axios from "axios";
import { ResponseData, FetchImages } from "./api.types";

export const fetchImage = async (
  inputValue: string,
  page: number
): Promise<FetchImages> => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=i2b3U8AMlj2uC8-LaSyMO19wsgjoJG22U9ZFROc1lKU",
    {
      params: {
        query: inputValue,
        page: page,
        per_page: 24,
      },
    }
  );

  const responseData: ResponseData = response.data;

  return {
    images: responseData.results,
    totalPages: responseData.total_pages,
  };
};
