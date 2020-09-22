import React, { useEffect, useState } from "react";
import "./App.css";

// Import dependencies
import axios from "axios";

// Import componenets
import PhotoFrame from "./components/PhotoFrame";

function App() {
  // Get the state that will save the data
  const [photoData, setPhotoData] = useState("");

  // Get the data once the app renders only once
  // useEffect(() => {
  //   const APIUrl = "https://api.nasa.gov/planetary/apod?api_key=zhQ2aecf3ic59s13oQ4NzidxBzcpxvTXKQiNP2RC";
  //   const getData = axios.get(APIUrl);

  //   getData.then((res) => {
  //     console.log(res.data);
  //     setPhotoData(res.data);
  //   });
  // }, []);

  const tempData = {
    copyright: "Luca Vanzella",
    date: "2020-09-22",
    explanation:
      "Does the Sun set in the same direction every day? No, the direction of sunset depends on the time of the year. Although the Sun always sets approximately toward the west, on an equinox like today the Sun sets directly toward the west. After today's September equinox, the Sun will set increasingly toward the southwest, reaching its maximum displacement at the December solstice.  Before today's September equinox, the Sun had set toward the northwest, reaching its maximum displacement at the June solstice. The featured time-lapse image shows seven bands of the Sun setting one day each month from 2019 December through 2020 June.  These image sequences were taken from Alberta, Canada -- well north of the Earth's equator -- and feature the city of Edmonton in the foreground.  The middle band shows the Sun setting during the last equinox -- in March.  From this location, the Sun will set along this same equinox band again today.",
    hdurl: "https://apod.nasa.gov/apod/image/2009/SunsetMonths_Vanzella_2400.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Equinox in the Sky",
    url: "https://apod.nasa.gov/apod/image/2009/SunsetMonths_Vanzella_1080_annotated.jpg",
  };

  useEffect(() => {
    setPhotoData(tempData);
  }, []);

  console.log(photoData);

  return (
    <div className="App">
      <PhotoFrame photoData={photoData} />
    </div>
  );
}

export default App;
