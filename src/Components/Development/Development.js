import DevelopmentCourse from "../DevelopmentCourse/DevelopmentCourse";
import UseCourses from "../Hooks/UseCourses";
const Development = () => {
  const [courses] = UseCourses();

  const webCourses = courses.filter((course) => course.courseMain === "web");

  return (
    <div className="w-4/6 m-auto py-16">
      <div className="grid grid-cols-4 gap-10">
        {webCourses.map((course) => (
          <DevelopmentCourse
            course={course}
            key={course.code}
          ></DevelopmentCourse>
        ))}
      </div>
    </div>
  );
};

export default Development;
