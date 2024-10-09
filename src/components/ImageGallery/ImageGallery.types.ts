import { Image, ModalImage } from "../API/api.types";

export type ImageGalleryProps = {
  images: Image[];
  onModalImage: (dataModalImg: ModalImage) => void;
};
