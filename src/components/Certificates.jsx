import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    title: 'Full Stack Web Development Certificate',
    provider: 'Udemy',
    date: 'Issued 2023',
  },
  {
    title: 'Front-End Development Certificate',
    provider: 'Udemy',
    date: 'Issued 2023',
  },
  {
    title: 'DevOps Engineer Certificate',
    provider: 'Udemy',
    date: 'Issued 2024',
  },
  {
    title: 'WHMIS (Workplace Hazardous Materials Information System)',
    provider: 'Canada Safety Council',
    date: 'Issued 2024',
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    x: -200,
    rotateY: 90,
    scale: 0.8,
    transformOrigin: "left center"
  },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 20,
      mass: 1.5,
      duration: 1
    }
  },
  hover: {
    scale: 1.03,
    y: -5,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const glowAnimation = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

function Certificates() {
  return (
    <div className="min-h-screen bg-black">
     
      
      {/* Hero Section with Netflix-style background */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[50vh] bg-gradient-to-b from-red-900 via-black to-black overflow-hidden"
      >
        <motion.div 
          className="absolute inset-0 bg-black opacity-60"
          animate={glowAnimation}
        />
        <motion.div 
          className="absolute inset-0 bg-[url('/netflix-bg.jpg')] bg-cover bg-center mix-blend-overlay"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl font-bold text-white mb-4"
              animate={floatingAnimation}
            >
              My Certifications
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300"
            >
              Professional achievements and continuous learning journey
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Certificates Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 py-16"
        style={{ perspective: "2000px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group relative bg-gradient-to-br from-red-900/90 to-black rounded-xl overflow-hidden shadow-2xl border border-red-900/30"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  transformOrigin: "left center"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                  animate={glowAnimation}
                />
                <div className="p-8 relative z-10">
                  <motion.div
                    className="space-y-4"
                  >
                    <motion.h3 
                      className="text-2xl font-bold text-red-500 group-hover:text-red-400 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      animate={floatingAnimation}
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.div 
                      className="h-px bg-gradient-to-r from-red-600 to-transparent"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                    />
                    <div className="space-y-2">
                      <motion.p 
                        className="text-gray-300 text-lg flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.span 
                          className="text-red-500 mr-2"
                          animate={glowAnimation}
                        >
                          Provider:
                        </motion.span> {cert.provider}
                      </motion.p>
                      <motion.p 
                        className="text-gray-400 flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.span 
                          className="text-red-500 mr-2"
                          animate={glowAnimation}
                        >
                          Date:
                        </motion.span> {cert.date}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Footer Note */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
  className="text-center py-12 bg-gradient-to-t from-black to-transparent"
>
  <div className="flex justify-center items-center h-12 overflow-hidden">
    <motion.p 
      className="text-gray-500 text-lg inline-block origin-center"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400 }}
      animate={floatingAnimation}
    >
      Continuously learning and expanding my skill set
    </motion.p>
  </div>
  
  <motion.div 
    className="mt-4 h-px w-[8rem] mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent"
    initial={{ width: 0 }}
    animate={{ 
      width: "8rem",
      opacity: [0.5, 1, 0.5]
    }}
    transition={{ 
      delay: 2, 
      duration: 1,  
      opacity: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
  />
</motion.div>

    </div>
  );
}

export default Certificates;