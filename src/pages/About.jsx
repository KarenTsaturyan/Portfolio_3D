import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { experiences, skills } from "../constants/main";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          Karen
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Enthusiastic and driven, I have a deep passion for software
          development and problem solving. I can easily adapt to new things and
          always ready to take on a challenge. I am able to work well both in a
          team as well as using own initiative.
        </p>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Experience & Education.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a full stack developer, I have enhanced my technical skills
            through hands-on roles and comprehensive training programs. Over the
            past year, I've collaborated with talented teams to deliver robust
            software solutions, honing my abilities in both front-end and
            back-end technologies.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline lineColor="#84cc16">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.date}
                date={experience.date}
                dateClassName={'text-red-600'}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default About;
