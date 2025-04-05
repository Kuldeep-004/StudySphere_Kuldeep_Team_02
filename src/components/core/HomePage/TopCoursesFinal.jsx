import React from 'react'
import { motion } from 'framer-motion'
import whyUsImg from '../../assets/Images/WhyUs.png'
import physicsImg from '../../assets/Images/Plan_your_lessons.png'
import mathImg from '../../assets/Images/Know_your_progress.png'

const TopCoursesFinal = () => {
  const courses = [
    {
      title: 'Web Development',
      img: whyUsImg,
      description: 'Master HTML, CSS, JavaScript and build modern websites',
      imgClass: 'h-64' // Larger height for Why Us image
    },
    {
      title: 'Physics Fundamentals',
      img: physicsImg,
      description: 'Learn core physics concepts from Newton to Einstein',
      imgClass: 'h-48'
    },
    {
      title: 'Advanced Mathematics',
      img: mathImg,
      description: 'Master calculus, algebra and mathematical thinking',
      imgClass: 'h-48'
    }
  ]

  return (
    <div className="w-full py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Top Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div 
            key={index}
            className="bg-black p-6 rounded-lg border border-gray-800 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`mb-4 overflow-hidden rounded-lg ${course.imgClass}`}>
              <img 
                src={course.img} 
                alt={course.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
            <p className="text-gray-300">{course.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TopCoursesFinal
