import ReactModal from "react-modal";
import { FC } from "react";
import { ImageModalProps } from "./ImageModal.types";
import style from "./ImageModal.module.css";

export const ImageModal: FC<ImageModalProps> = ({
  modalImage: {
    urls: { regular },
    description,
    likes,
    user: { name, social },
  },
  onClose,
}) => {
  return (
    <ReactModal
      isOpen={true}
      ariaHideApp={false}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: { backgroundColor: "rgba(60, 60, 60, 0.9)" },
        content: {
          backgroundColor: "rgba(234, 193, 255, 1)",
          color: "rgb(58, 18, 96)",
          padding: 10,
        },
      }}
    >
      <div className={style.modalWrap}>
        <div className={style.imgWrap}>
          <img src={regular} alt={description} className={style.img} />
        </div>
        <div className={style.infoWrap}>
          {name && (
            <div className={style.infoItem}>
              <b>Author:</b> <b>{name}</b>
            </div>
          )}
          {social.instagram_username && (
            <div className={style.infoItem}>
              <b>Author's instagram:</b> <p>@{social.instagram_username}</p>
            </div>
          )}
          {description && (
            <div className={style.infoItem}>
              <b>About photo:</b> <p>{description}</p>
            </div>
          )}
          <div className={style.infoItem}>
            <b>Likes:</b> <p>{likes}</p>
          </div>
        </div>
      </div>
    </ReactModal>
  );
};
