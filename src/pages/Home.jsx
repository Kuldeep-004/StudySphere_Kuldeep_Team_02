// Icons Import
import { FaArrowRight, FaUsers, FaGraduationCap, FaCertificate, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import Tilt from 'react-parallax-tilt'

// Image and Video Import
import Banner from "../assets/Images/banner.mp4"
// Component Imports
import Footer from "../components/common/Footer"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"
import img from "../assets/Images/WhyUs.png"
import img2 from "../assets/Images/Teacher.png"
import joinnow from "../assets/Images/joinnow.jpg"
import ReviewSlider from "../components/common/ReviewSlider"
import img1 from "../assets/Images/coding.png"

function Home() {
  return (
    <div className="bg-black">
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-2 text-white">
        {/* Heading */}
        <div className="mt-2 text-[#686868] text-es">Edtech Platform</div>
        <div className="text-center text-5xl font-bold leading-tight mt-0 flex flex-col">
          When Knowledge
          <span><HighlightText text={"meets Opportunity"}/></span>
        </div>

        {/* Sub Heading */}
        <div className="w-[90%] text-center text-lg text-grey">
          Unlock your potential with expert-led courses
        </div>

        {/* Video */}
        <div className="mx-3 my-7 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <video
            className="w-full"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>


        {/* Quick Compiler Section */}
        <Tilt
          className="w-full"
          tiltMaxAngleX={3}
          tiltMaxAngleY={3}
          scale={1.02}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10 px-8 rounded-2xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,70,229,0.15),0_0_20px_rgba(255,107,0,0.1)] bg-gradient-to-r from-black to-[#0C0C0C] group">
            {/* Left Content */}
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/10 to-[#FF6B00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10">
                <div className="text-[#FF6B00] font-semibold text-lg">Quick Compiler</div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-2 mb-4">
                  Code On-the-Go with
                  <br />
                  Quick Compiler
                </h2>
                <p className="text-[#686868] text-base lg:text-lg mb-8 max-w-[90%]">
                  Whether you're fine-tuning your code or exploring
                  new languages, Quick Compiler simplifies the coding
                  process, making it faster and more accessible for
                  every developer.
                </p>
                <button className="bg-[#4F46E5] text-white px-8 py-3 rounded-full font-medium hover:bg-[#4338CA] transition-colors">
                  Try it Yourself
                </button>
              </div>
            </div>

            {/* Right Content - Code Editor */}
            <div className="lg:w-1/2">
              <div className="bg-[#1C1C1C] rounded-lg p-4 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/5 to-[#FF6B00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="font-mono text-sm">
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">1</span>
                      <span className="text-[#FF6B00]">&lt;!DOCTYPE html&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">2</span>
                      <span className="text-[#FF6B00]">&lt;html&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">3</span>
                      <span className="text-[#FF6B00]">&lt;head&gt;&lt;title&gt;Example&lt;/title&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">4</span>
                      <span className="text-[#FF6B00]">&lt;link</span>
                      <span className="text-[#FF6B00]"> rel="stylesheet" href="styles.css"&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">5</span>
                      <span className="text-[#FF6B00]">&lt;/head&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">6</span>
                      <span className="text-[#FF6B00]">&lt;body&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">7</span>
                      <span className="text-[#FF6B00]">&lt;h1&gt;&lt;a href="/"&gt;Header&lt;/a&gt;&lt;/h1&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">8</span>
                      <span className="text-[#FF6B00]">&lt;h1&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">9</span>
                      <span className="text-[#FF6B00]">&lt;nav&gt;&lt;a href="one/"&gt;One&lt;/a&gt;&lt;a href="two/"&gt;Two&lt;/a&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">10</span>
                      <span className="text-[#FF6B00]">&lt;a href="three/"&gt;Three&lt;/a&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">11</span>
                      <span className="text-[#FF6B00]">&lt;/nav&gt;</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-8 inline-block text-[#686868]">12</span>
                      <span className="w-1 h-5 bg-[#FF6B00] animate-blink"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tilt>

        {/* Code Section 1  */}
        <div className="lg:flex lg:flex-row items-center gap-8 mt-10">
          <div className="lg:w-1/2 transform hover:scale-105 transition-transform duration-300 flex items-center">
            <img src={img} alt="Learning" className="w-full h-[400px] object-cover rounded-lg shadow-xl" />
          </div>
          <div className="lg:w-1/2">
            <div className="text-4xl font-semibold">
              <HighlightText text={"Why US?"} />
            </div>
            <p className="text-grey text-base mt-2">
              Unlock your potential with industry expert-led courses, real-world projects, and AI-powered personalized learning. Our platform goes beyond theory, ensuring you gain practical skills to succeed in your career. Join us today and take the next step toward a brighter future!
            </p>
            <div className="flex flex-row gap-7 mt-3">
              <CTAButton linkto={"/signup"} active={true}>Try it Yourself</CTAButton>
              <CTAButton linkto={"/login"} active={false}>Learn More</CTAButton>
            </div>
          </div>
        </div>

        {/* Code Section 2 */}
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
          <TimelineSection />
        </div>

        {/* Featured Courses Section */}
        <div className="w-full py-12">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-black rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Course Title {course}</h3>
                  <p className="text-gray-300 mb-4">Brief course description goes here...</p>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">$99.99</span>
                    <CTAButton linkto={`/course/${course}`} active={true}>Enroll Now</CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:flex lg:flex-row items-center gap-8 mt-10">
          <div className="lg:w-1/2 transform hover:scale-105 transition-transform duration-300">
            <img src={img2} alt="Learning" className="w-full h-auto rounded-lg shadow-xl" />
          </div>

          <div className="lg:w-1/2">
            <div className="text-4xl font-semibold">
              <HighlightText text={"Become Instructor"} />
            </div>
            <p className="text-grey text-base mt-2">
              Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </p>
            <div className="flex flex-row gap-7 mt-3">
              <CTAButton linkto={"/signup"} active={true}>Start Teaching Today</CTAButton>
            </div>
          </div>
        </div>  

      

        <div className="lg:flex lg:flex-row items-stretch mt-10 w-11/12 max-w-maxContent mx-auto">
          {/* Left Section - Smaller Width & Left Aligned */}
          <div className="bg-nblue w-2/5 h-[450px] flex flex-col justify-center items-start text-white p-8 pl-10 rounded-l-lg">
            <h2 className="text-3xl font-bold mb-4">Get Started!</h2>
            <p className="text-lg mb-6">
              "Join Us Today & Build a Brighter, Smarter, and More Successful Future!"
            </p>
            <button className="bg-black  text-nblue px-6 py-2 font-semibold rounded-md  transition-colors">
              Learn More
            </button>
          </div>

          {/* Right Section - Larger Width for Bigger Image */}
          <div className="w-3/5 h-[450px] flex rounded-r-lg overflow-hidden">
            <img src={joinnow} alt="Join Now" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="items-center justify-center flex flex-col w-full py-12">
          <h1 className="text-center text-4xl text-textc mb-8">Rating & Reviews</h1>
          
        </div>

        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Home;