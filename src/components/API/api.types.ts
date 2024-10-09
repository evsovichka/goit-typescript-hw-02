export type ResponseData = {
  results: Image[];
  total_pages: number;
};
export type Image = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  alt_description: string;
  likes: number;
  user: {
    name: string;
    social: { instagram_username: string };
  };
};

export type FetchImages = {
  images: Image[];
  totalPages: number;
};

export type ModalImage = Omit<Image, "id" | "alt_description" | "urls"> & {
  urls: Omit<Image["urls"], "small">;
};
