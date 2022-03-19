import React from "react";

import UseTeachers from "../Hooks/UseTeachers";
import AboutTeachers from "./AboutTeachers/AboutTeachers";
const About = () => {
  const [teachers] = UseTeachers();

  return (
    <div className="w-4/6 m-auto py-16">
      <h1 className="text-2xl font-bold mb-5">Our Instructor Members</h1>
      <div className="grid grid-cols-4 gap-10">
        {teachers.map((teacher) => (
          <AboutTeachers teacher={teacher} key={teacher.id}></AboutTeachers>
        ))}
      </div>
    </div>
  );
};

export default About;
