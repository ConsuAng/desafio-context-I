import Card from "../components/Card";
import { useContext } from "react";
import Context from "../context/Context";
import Container from "../layout/Container";

export default function Home() {
  const {photos} = useContext(Context);

  return (
    <Container>
      <h1 className="text-center text-[#43a047] text-4xl mt-5 font-semibold">Natural Pic</h1>
      <div className="flex flex-wrap gap-5 justify-center pt-5"> 
        {photos.map((photo, i) => (
            <Card key={i} photo={photo}/>
        ))}
      </div>
    </Container>
   
  )
}