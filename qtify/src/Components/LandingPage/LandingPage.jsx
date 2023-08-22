import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums } from "../api/api";
import { useEffect, useState } from "react";
import TopSection from "../Section/TopSection";
import NewSection from "../Section/NewSection";
import styles from "../../App.module.css";

const LandingPage = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      console.log(data);
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      console.log(data);
      setNewAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <TopSection type="album" title="Top Albums" data={topAlbumData} />
      </div>
      <div className={styles.sectionWrapper}>
        <NewSection type="album" title="New Albums" data={newAlbumData} />
      </div>
    </>
  );
};

export default LandingPage;
