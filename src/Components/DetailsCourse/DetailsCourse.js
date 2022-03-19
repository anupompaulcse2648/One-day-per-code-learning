import React from "react";
import UseCourses from "../Hooks/UseCourses";
import Details from "./Details/Details";
const DetailsCourse = () => {
  const [courses] = UseCourses();

  return (
    <div className="w-4/6 m-auto py-16">
      {courses.map((details) => (
        <Details details={details} key={details.code}></Details>
      ))}
    </div>
  );
};

export default DetailsCourse;
