import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
       
        <div className="text-center mb-8">
          <h2 className="text-lg font-semibold text-gray-700">Enter Your Mail</h2>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter Your Mail"
              className="p-3 w-80 text-sm text-gray-700 border rounded-l-lg focus:outline-none"
            />
            <button className="bg-purple-500 text-white p-3 text-sm rounded-r-lg hover:bg-purple-600">
              Get Newsletter
            </button>
          </div>
        </div>
     
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
    
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Libex is a premier learning platform dedicated to equipping students with
              future-ready skills through expertly designed training programs.
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <span>📍</span> 123 Knowledge Street, Educationland
              </li>
              <li>
                <span>📧</span> support@libex.com
              </li>
              <li>
                <span>📞</span> +1 800 LIBEX 24
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm">
              <li>» About</li>
              <li>» Our Courses</li>
              <li>» Instructors</li>
              <li>» Contact Us</li>
            </ul>
          </div>
     
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>» Web Development</li>
              <li>» Artificial Intelligence</li>
              <li>» Machine Learning</li>
              <li>» UI/UX Design</li>
              <li>» Data Science</li>
            </ul>
          </div>
    
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Gallery</h3>
            <div className="grid grid-cols-3 gap-2">
              <img src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="Gallery 1" className="rounded-md h-16 w-16" />
              <img src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="Gallery 1" className="rounded-md h-16 w-16" />
              <img src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="Gallery 1" className="rounded-md h-16 w-16" />
              <img src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="Gallery 1" className="rounded-md h-16 w-16" />
              <img src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="Gallery 1" className="rounded-md h-16 w-16" />
              <img src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="Gallery 1" className="rounded-md h-16 w-16" />
            </div>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-10 text-center text-sm text-gray-600">
          &copy; Copyright 2024 by GBJ buzz
        </div>
      </div>
    </footer>
  );
};

export default Footer ;
