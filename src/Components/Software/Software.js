import SoftwareCourse from "../Software/SoftwareCourse/SoftwareCourse.js";
import UseCourses from "../Hooks/UseCourses";
const Software = () => {
  const [courses] = UseCourses();

  const webCourses = courses.filter(
    (course) => course.courseMain === "software"
  );
  return (
    <div className="w-4/6 m-auto py-16">
      <div className="grid grid-cols-4 gap-10">
        {webCourses.map((course) => (
          <SoftwareCourse course={course} key={course.code}></SoftwareCourse>
        ))}
      </div>
    </div>
  );
};

export default Software;
