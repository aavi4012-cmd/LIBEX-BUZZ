import React from "react";
import Photos from "../components/Photos";
import Cards from "../components/Cards";
import Counts from "../components/Counts";
import Courses from "../components/Courses";
import Weare from "../components/Weare";
import Testimonials from "../components/Testimonials";
import ExpertTeam from "../components/ExpertTeam";
import Blog from "../components/Blog";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNav = () => {
    navigate("/about");
  };

  return (
    <div className="p-10 text-center">
      {/* Header Section */}
      <div className="font-bold text-6xl mt-36">
        Internship Paths To Your Dream <span className="text-cyan-400">Career</span>
      </div>

      {/* Button and Image Section */}
      <div className="flex justify-center items-center space-x-6 mt-16">
        <button className="bg-violet-500 py-4 px-5 rounded-3xl text-white text-lg">
          Find Course
        </button>
        <img src="/public/Images/Group 1.png" alt="Group" className="object-contain" />
      </div>

      {/* About Us Section */}
      <div className="flex justify-center mt-28">
        <div className="bg-violet-100 flex p-20 rounded-3xl h-2/3 w-10/12">
          <div className="overflow-hidden rounded-xl">
            <img className="w-full" src="/public/Images/16.png" alt="About Us" />
          </div>
          <div className="mx-16 w-1/2 text-left ml-36">
            <h2 className="text-orange-500 text-3xl">About us</h2>
            <h3 className="text-4xl font-extrabold mt-8">
              <span className="text-cyan-400">Training</span> Tailored For Your Success with{" "}
              <span className="text-cyan-400">Libex</span>
            </h3>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos reiciendis eos consectetur iusto
              veniam nulla quam laboriosam repellendus.
            </p>
            <div className="flex py-10 gap-5">
              <div>
                <h4 className="font-bold">Flexible Timings</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam dicta ipsa laudantium.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Expert Instructor</h4>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae nulla officiis porro fuga.
                </p>
              </div>
            </div>
            <div className="flex">
              <button
                className="flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
                onClick={handleNav}
              >
                <span>About Us</span>
                <span className="flex items-center justify-center w-6 h-6 bg-white rounded-lg ms-2 text-black">
                  &#8250;
                </span>
              </button>
              <div className="flex mx-10 items-center">
                <img className="h-8 w-10" src="/public/Images/1-removebg-preview.png" alt="Call Us" />
                <div className="ml-3">
                  <div>Call us Now</div>
                  <div>987654321</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <Photos />
      <Cards />
      <Counts />
      <Courses />
      <Weare />
      <Testimonials />
      <ExpertTeam />
      <Blog />
    </div>
  );
};

export default Home;
