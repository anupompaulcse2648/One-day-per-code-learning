import { useEffect, useState } from "react";

const UseProducts = () => {
  const [courses, SetCourses] = useState([]);
  useEffect(() => {
    fetch("./education.json")
      .then((res) => res.json())
      .then((data) => {
        SetCourses(data.courseDetails);
      });
  }, []);
  //Return necessary things
  return [courses];
};

export default UseProducts;
