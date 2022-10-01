import { useContext } from "react";
import Context from "../context/Context";
import Container from "../layout/Container";

export default function Favorites() {
  const { photos, setPhotos } = useContext(Context);

  const dislike = (id) => {
    const index = photos.findIndex((x) => x.id === id);
    const newOject = [{
      alt: photos[index].alt,
      src: photos[index].src,
      id: photos[index].id,
      like: false
    }];

    const newArray = photos.map(obj => newOject.find(x => x.id === obj.id) || obj);
    setPhotos(newArray);
  }

  return (
    <Container>
      <h1 className="text-center text-[#43a047] text-4xl mt-5 font-semibold">Fotos favoritas</h1>
      <div className="flex flex-wrap gap-5 justify-center pt-5">
        {photos.map((photo, i) => (
          photo.like &&
          <div key={i}
            className="bg-cover bg-center w-64 h-[200px]"
            style={{ backgroundImage: `url(${photo.src.tiny})` }}
            onClick={() => dislike(photo.id)}
          ></div>
        ))}
      </div>
    </Container>
  )
}