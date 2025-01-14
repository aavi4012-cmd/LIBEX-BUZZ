import React from 'react';
import CourseCard from './CourseCard';

// Course Data
const courses = [
  {
    weeks: 7,
    CName: 'WordPress For Everyone: Unlock Your Creativity',
    lessons: 70,
    students: 1000,
    src: '/Images/12.png',
  },
  {
    weeks: 6,
    CName: 'The Data Science Revolution: Upgrading Your Skills',
    lessons: 60,
    students: 900,
    src: '/Images/13.png',
  },
  {
    weeks: 5,
    CName: 'From Zero to Website: A Web Development Adventure',
    lessons: 50,
    students: 800,
    src: '/Images/14.png',
  },
  {
    weeks: 4,
    CName: 'Mastering UI/UX: Design Fundamentals Course',
    lessons: 40,
    students: 700,
    src: '/Images/15.png',
  },
];

function CourseCards() {
  return (
    <div className="relative flex justify-center pt-16">
      {/* Glow Ball Decorations */}
      <img
        src="/Images/Background/Overlay+Blur.png"
        alt="Glow Ball Left"
        className="absolute left-10 top-10 w-40 h-40 opacity-30 z-0"
      />
      <img
        src="/Images/Background/Overlay+Blur-Orange.png"
        alt="Glow Ball Right"
        className="absolute right-10 top-10 w-40 h-40 opacity-30 z-0"
      />

      {/* Course Cards */}
      <div className="flex flex-wrap w-3/4 gap-16 justify-center z-10">
        {courses.map((course, index) => (
          <CourseCard
            key={index} // Adding a key for React list rendering
            weeks={course.weeks}
            CName={course.CName}
            lessons={course.lessons}
            students={course.students}
            src={course.src}
          />
        ))}
      </div>
    </div>
  );
}

export default CourseCards;
