import React from "react";
import NavBar from "../NavBar/NavBar";
import HeroSection from "../HeroSection/HeroSection";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "../api/api";
import { useEffect, useState } from "react";
import TopSection from "../Section/TopSection";
import NewSection from "../Section/NewSection";
import SongsSection from "../Section/SongsSection";
import styles from "../../App.module.css";
import FAQSection from "../Section/FAQSection";

const LandingPage = () => {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [newSongs, setNewSongs] = useState([]);
  const [value, setValue] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [filteredDataValues, setFilteredDataValues] = useState(newSongs);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    } catch (err) {
      console.error(err);
    }
  };
  const generateAllSongsData = async () => {
    try {
      const data = await fetchSongs();
      setNewSongs(data);
      setFilteredDataValues(data);
    } catch (err) {
      console.error(err);
    }
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(newSongs);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else {
      key = "blues";
    }
    const res = newSongs.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateAllSongsData();
  }, []);

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className={styles.sectionWrapper}>
        <TopSection type="album" title="Top Albums" data={topAlbumData} />
        <NewSection type="album" title="New Albums" data={newAlbumData} />
        <hr />
        <SongsSection
          type="song"
          title="Songs"
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
      <hr />
      <FAQSection />
    </>
  );
};

export default LandingPage;
