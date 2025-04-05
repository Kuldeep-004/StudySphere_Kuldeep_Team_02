import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaChartLine, FaMobile, FaServer } from 'react-icons/fa'

const LearningPath = () => {
  const paths = [
    {
      title: 'Frontend Developer',
      icon: <FaCode className="text-2xl" />,
      steps: ['HTML/CSS', 'JavaScript', 'React', 'Advanced Concepts']
    },
    {
      title: 'Backend Developer',
      icon: <FaServer className="text-2xl" />,
      steps: ['Node.js', 'Databases', 'APIs', 'DevOps']
    },
    {
      title: 'Mobile Developer',
      icon: <FaMobile className="text-2xl" />,
      steps: ['React Native', 'UI/UX', 'App Deployment', 'Advanced Features']
    },
    {
      title: 'Data Analyst',
      icon: <FaChartLine className="text-2xl" />,
      steps: ['Python', 'SQL', 'Visualization', 'Machine Learning']
    }
  ]

  return (
    <div className="w-full py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Choose Your Learning Path</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {paths.map((path, index) => (
          <motion.div 
            key={index}
            className="bg-black p-6 rounded-lg border border-gray-800"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {path.icon}
              <h3 className="text-xl font-bold text-white">{path.title}</h3>
            </div>
            <ul className="space-y-2">
              {path.steps.map((step, i) => (
                <li key={i} className="text-gray-300 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {step}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default LearningPath
