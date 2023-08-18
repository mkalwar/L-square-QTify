import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import { fetchTopAlbums } from "./api/api";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";

function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log("before func call");
    generateTopAlbumData();
    console.log("after func call");
  }, []);
  console.log(topAlbumData);
  return (
    <>
      <NavBar />
      <HeroSection />
      {topAlbumData.map((ele) => (
        <Card data={ele} type="album" />
      ))}
    </>
  );
}

export default App;
