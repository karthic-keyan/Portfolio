/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from 'react-icons/fa';
import { projectsData } from '../data/projects';

const Home = () => {
  const featuredProjects = projectsData.filter(project => project.featured);
  
  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Git', level: 85 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center min-h-[90vh] py-20 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
            Hi, I'm <span className="text-primary">Alex Johnson</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-secondary mb-6 font-medium">
            Frontend Developer & UI Designer
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            I create beautiful, functional websites and applications with a focus on
            user experience and clean code.
          </p>
          <div className="flex gap-4 mb-8">
            <a 
              href="#projects" 
              className="bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              View My Work
            </a>
            <a 
              href="/contact" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-5 text-2xl text-gray-700">
            <a href="https://github.com/yourusername" aria-label="GitHub" className="hover:text-primary transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourusername" aria-label="Twitter" className="hover:text-primary transition">
              <FaTwitter />
            </a>
          </div>
        </motion.div>
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src="/images/hero-image.png" 
            alt="Developer illustration" 
            className="max-w-full h-auto rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 py-24">
        <div className="lg:w-1/2">
          <img 
            src="/images/profile.jpg" 
            alt="Alex Johnson" 
            className="w-full rounded-xl shadow-xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            I'm a passionate frontend developer with 3 years of experience creating
            modern web applications. I specialize in React.js and love turning
            complex problems into simple, beautiful solutions.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            When I'm not coding, you can find me hiking, reading sci-fi novels, or
            experimenting with new cooking recipes.
          </p>
          <div className="flex gap-4">
            <a 
              href="/about" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              More About Me
            </a>
            <a 
              href="/resume.pdf" 
              download 
              className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
            >
              <FaFileDownload /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <a 
            href="/projects" 
            className="inline-block bg-primary hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded transition duration-300"
          >
            View All Projects
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-2.5 rounded-full bg-primary"
                ></motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;