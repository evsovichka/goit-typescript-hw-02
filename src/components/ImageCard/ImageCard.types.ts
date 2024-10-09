import { ModalImage, Image } from "../API/api.types";

export type ImageCardProps = {
  image: Image;
  onModalImage: (dataModalImg: ModalImage) => void;
};
