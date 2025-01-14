import React from "react";

function CourseCard({ src, weeks, CName, lessons, students }) {
  return (
    <div className="flex border bg-white rounded-xl w-3/5">
      {/* Image Section */}
      <div className="h-full w-1/3 overflow-hidden rounded-3xl">
        <img className="h-full w-full object-cover" src={src} alt="Course" />
      </div>

      {/* Content Section */}
      <div className="px-10 py-4 w-2/3">
        {/* Tags */}
        <div className="flex mb-4">
          <div className="bg-cyan-100 text-cyan-400 py-2 px-3 rounded-xl m-2">
            Experts
          </div>
          <div className="py-2 px-3 bg-violet-200 text-violet-400 rounded-xl m-2">
            {weeks} Weeks
          </div>
        </div>

        {/* Course Name */}
        <div className="font-bold text-lg mb-4">{CName}</div>

        {/* Lessons and Students */}
        <div className="flex mb-4">
          <div className="flex items-center gap-2 p-5">
            <span role="img" aria-label="books">📚</span> {lessons} lessons
          </div>
          <div className="flex items-center gap-2 p-5">
            <span role="img" aria-label="students">👩‍💻</span> {students} students
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span>⭐⭐⭐⭐⭐</span>
          <div>5 Star</div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
