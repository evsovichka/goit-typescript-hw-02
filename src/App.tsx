import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { SearchBar } from "./components/SearchBar/SearchBar";

import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { fetchImage } from "./components/API/api";
import { ImageModal } from "./components/ImageModal/ImageModal";
import { FetchImages, Image, ModalImage } from "./components/API/api.types";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage>({
    urls: { regular: "" },
    description: "",
    likes: 0,
    user: {
      name: "",
      social: { instagram_username: "" },
    },
  });

  useEffect(() => {
    if (inputValue.trim() === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setLoader(true);
        const newImages: FetchImages = await fetchImage(inputValue, page);

        if (newImages.images.length === 0) {
          return toast.error(`No results found for "${inputValue}"`);
        }
        setImages((prevImages) => [...prevImages, ...newImages.images]);
        setTotalPages(newImages.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [page, inputValue]);

  const handleSearch = (newValue: string) => {
    setInputValue(newValue);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleClickImg = (dataModalImg: ModalImage) => {
    setModalImage({
      urls: { regular: dataModalImg.urls.regular },
      description: dataModalImg.description,
      likes: dataModalImg.likes,
      user: {
        name: dataModalImg.user.name,
        social: {
          instagram_username: dataModalImg.user.social.instagram_username,
        },
      },
    });
    handleOpenModal();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <SearchBar onSubmit={handleSearch} />
      {images.length > 0 && (
        <ImageGallery images={images} onModalImage={handleClickImg} />
      )}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {!loader && images.length > 0 && totalPages > page && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {isOpen && (
        <ImageModal modalImage={modalImage} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
