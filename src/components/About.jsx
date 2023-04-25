import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, description, headline, image }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={image}
          alt="web-development"
          className="w-24 h-24 object-contain rounded-3xl"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {headline}
        </h3>
        <p className="text-center">{description}</p>
      </div>
    </motion.div>
  </Tilt>
);

const About = ({ data }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{data.tag_line}</p>
        <h2 className={styles.sectionHeadText}>{data.headline}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {data.description}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {data.cards.map((info, index) => (
          <ServiceCard key={info.headline} index={index} {...info} />
        ))}
      </div>

      {/* <Gallery /> */}
    </>
  );
};

export default SectionWrapper(About, "about");
