import React from "react";

const AboutTeachers = (props) => {
  const { name, designation, teamsMemberImage } = props.teacher;
  console.log(props.teacher);
  return (
    <div className="rounded-md shadow-md flex justify-center text-center p-5">
      <div>
        <div className="image flex justify-center">
          <img
            className="w-40"
            style={{ borderRadius: "50%" }}
            src={teamsMemberImage}
            alt=""
          />
        </div>
        <div className="details pt-4">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTeachers;
