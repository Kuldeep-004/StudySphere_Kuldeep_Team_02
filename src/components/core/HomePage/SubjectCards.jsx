import React from 'react'
import { motion } from 'framer-motion'
import codingImg from '../../../assets/Images/coding.png'
import physicsImg from '../../../assets/Images/Plan_your_lessons.png'
import mathImg from '../../../assets/Images/Know_your_progress.png'
import chemistryImg from '../../../assets/Images/Compare_with_others.png'

const SubjectCards = () => {
  const subjects = [
    {
      title: 'Coding',
      img: codingImg,
      description: 'Master programming languages and build real-world projects'
    },
    {
      title: 'Physics',
      img: physicsImg,
      description: 'Explore the fundamental laws of the universe'
    },
    {
      title: 'Mathematics',
      img: mathImg,
      description: 'Develop problem-solving skills with advanced concepts'
    },
    {
      title: 'Chemistry',
      img: chemistryImg,
      description: 'Understand matter and its transformations'
    }
  ]

  return (
    <div className="w-full py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Explore Subjects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {subjects.map((subject, index) => (
          <motion.div 
            key={index}
            className="bg-black p-6 rounded-lg border border-gray-800 overflow-hidden"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="h-48 mb-4 overflow-hidden rounded-lg">
              <img 
                src={subject.img} 
                alt={subject.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{subject.title}</h3>
            <p className="text-gray-300">{subject.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SubjectCards
