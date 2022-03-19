import React from "react";

import DesignCourse from "../Design/DesignCourse/DesignCourse.js";
import UseCourses from "../Hooks/UseCourses";
const Design = () => {
  const [courses] = UseCourses();

  const webCourses = courses.filter(
    (course) => course.courseMain === "graphics"
  );

  return (
    <>
      <div className="w-4/6 m-auto py-16">
        <div className="grid grid-cols-4 gap-10">
          {webCourses.map((course) => (
            <DesignCourse course={course} key={course.code}></DesignCourse>
          ))}
        </div>
      </div>
    </>
  );
};

export default Design;
