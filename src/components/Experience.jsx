import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import Gallery from "./Gallery";

const ExperienceCard = ({ info }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #232631",
      }}
      date={info.date}
      iconStyle={{ background: "white" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={info.image}
            alt={info.headline}
            className="w-full h-full object-fill rounded-full"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{info.headline}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {info.sub_headline}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {info.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = ({ data }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{data.tag_line}</p>
        <h2 className={styles.sectionHeadText}>{data.headline}</h2>
      </motion.div>

      <div className="mt-[2rem]">
        <Gallery />
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {data.cards.map((info, index) => (
            <ExperienceCard key={index} info={info} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
