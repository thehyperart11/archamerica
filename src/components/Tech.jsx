import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { archamerica_services, technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>{data.tag_line}</p> */}
        <h2 className={`${styles.sectionHeadText} mb-9 text-center`}>
          Our Design Expertise
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {archamerica_services.map((technology, index) => (
          <div className="w-28 h-28" key={index}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
