import { useEffect, useState } from "react";

const UseTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("./education.json")
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data.teachers);
      });
  }, []);
  //Return necessary things
  return [teachers];
};

export default UseTeachers;
