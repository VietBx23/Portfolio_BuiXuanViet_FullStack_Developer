import React from 'react';
import { motion } from 'framer-motion';
import { Database, Layout, Server, Smartphone, Wrench, Code2 } from 'lucide-react';

const skills = [
  { 
    name: 'Languages', 
    icon: Code2, 
    color: 'text-yellow-400', 
    bg: 'bg-yellow-500/10', 
    border: 'border-yellow-500/20',
    items: ['Java', 'C#', 'JavaScript', 'TypeScript', 'C'] 
  },
  { 
    name: 'Frameworks', 
    icon: Server, 
    color: 'text-green-400', 
    bg: 'bg-green-500/10', 
    border: 'border-green-500/20',
    items: ['Spring Boot', 'Spring MVC', '.NET Core', 'ASP.NET', 'Node.js', 'Express', 'Hibernate'] 
  },
  { 
    name: 'Frontend & Mobile', 
    icon: Smartphone, 
    color: 'text-cyan-400', 
    bg: 'bg-cyan-500/10', 
    border: 'border-cyan-500/20',
    items: ['ReactJS', 'React Native', 'AngularJS', 'Bootstrap', 'Redux', 'Thymeleaf'] 
  },
  { 
    name: 'Databases', 
    icon: Database, 
    color: 'text-blue-400', 
    bg: 'bg-blue-500/10', 
    border: 'border-blue-500/20',
    items: ['SQL Server', 'MySQL', 'Firebase'] 
  },
  { 
    name: 'Tools & DevOps', 
    icon: Wrench, 
    color: 'text-purple-400', 
    bg: 'bg-purple-500/10', 
    border: 'border-purple-500/20',
    items: ['Git/GitHub', 'Postman', 'Swagger', 'Android Studio', 'Xcode', 'VPS', 'WordPress'] 
  },
  { 
    name: 'Testing', 
    icon: Layout, 
    color: 'text-pink-400', 
    bg: 'bg-pink-500/10', 
    border: 'border-pink-500/20',
    items: ['JUnit', 'TestNG', 'Selenium'] 
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm border-b-2 border-cyan-500 pb-1">Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-4">Skills & Technologies</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
             Proficient in powerful Backend technologies like Java/Spring and C#/.NET, combined with modern Mobile/Frontend development capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              style={{ perspective: 1000 }}
              className={`group relative glass-card ${skill.border} p-6 rounded-2xl hover:bg-[#1f2937]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] border-opacity-30`}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl ${skill.bg} ${skill.color} mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <skill.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{skill.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 font-medium group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;