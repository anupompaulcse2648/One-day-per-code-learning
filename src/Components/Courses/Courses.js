import React, { useState } from "react";
import DetailsCourse from "../DetailsCourse/DetailsCourse";
import UseCourses from "../Hooks/UseCourses";
import ItemCourse from "../ItemCourse/ItemCourse";
const Courses = () => {
  const [courses] = UseCourses();

  return (
    <div className="w-4/6 m-auto py-16">
      <div className="grid grid-cols-4 gap-10">
        {courses.map((course) => (
          <ItemCourse course={course} key={course.code}></ItemCourse>
        ))}
      </div>
    </div>
  );
};

export default Courses;
