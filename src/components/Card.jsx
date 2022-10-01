import Heart from "./Heart";
import { useContext } from "react";
import Context from "../context/Context";

export default function Card({ photo }) {
  const { photos, setPhotos } = useContext(Context);

  const liked = (id) => {
    const index = photos.findIndex((x) => x.id === id);
    const newObject = [{
      alt: photos[index].alt,
      src: photos[index].src,
      id: photos[index].id,
      like: true
    }];
    const newArray = photos.map(obj => newObject.find(x => x.id === obj.id) || obj);
    setPhotos(newArray);
  }

  return (
    <div className="relative bg-cover bg-center w-56 h-[200px]" style={{ backgroundImage: `url(${photo.src.tiny})` }}>
      <div onClick={() => liked(photo.id)}>
        {photo.like ? <Heart filled={true} /> : <Heart />
        }
      </div>
      <p className="text-white absolute left-2 bottom-3">{photo.alt}</p>
    </div>
  )
}
