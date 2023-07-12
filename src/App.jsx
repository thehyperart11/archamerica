import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import uploadData from "./firebase/uploadData";

const App = () => {
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    // uploadData()
    //   .then(() => console.log("Data uploaded"))
    //   .catch((error) => console.log(error));
    const docRef = doc(db, "real-estate-clients", "archamerica");
    getDoc(docRef)
      .then((data) => setContentData(data.data()))
      .catch(() => setContentData(null));
  }, []);

  return (
    <BrowserRouter>
      {contentData ? (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar logoUrl={contentData.logo} />
            <Hero data={contentData.section1} />
          </div>
          <About data={contentData.section2} />
          <Experience data={contentData.section3} />
          <Tech />
          <Works data={contentData.section4} />
          <Feedbacks data={contentData.section5} />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      ) : (
        <></>
      )}
    </BrowserRouter>
  );
};

export default App;
