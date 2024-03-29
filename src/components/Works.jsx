import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, info }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={info.image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{info.heading}</h3>
          <p className="mt-2 text-secondary text-[14px]">{info.description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = ({ data }) => {
  console.log("section4", data);
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{data.tag_line}</p>
        <h2 className={styles.sectionHeadText}>{data.headline}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {data.description}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {data.cards.map((info, index) => (
          <ProjectCard key={`project-${index}`} index={index} info={info} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
