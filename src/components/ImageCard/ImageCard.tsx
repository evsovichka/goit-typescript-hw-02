import { FC } from "react";
import { ImageCardProps } from "./ImageCard.types";
import style from "./ImageCard.module.css";

export const ImageCard: FC<ImageCardProps> = ({ image, onModalImage }) => {
  return (
    <div>
      <img
        className={style.cardImage}
        src={image.urls.small}
        alt={image.alt_description}
        width="90"
        onClick={() =>
          onModalImage({
            urls: { regular: image.urls.regular },
            description: image.description,
            likes: image.likes,
            user: image.user,
          })
        }
      />
    </div>
  );
};
