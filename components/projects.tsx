"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "ThinkHub",
    description: "Real-Time Dev Q&A + Code Collaboration Platform",
    image: "https://ik.imagekit.io/l0qjdxgtk/portfolio-image/Screenshot%202025-05-26%20172834.png?updatedAt=1748260734612",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "Gemini AI API"],
    github: "https://github.com/hansrajathole/ThinkHub.git",
    demo: "https://stackwave-frontend.onrender.com",
    features: [
      "Built StackOverflow-style Q&A with real-time code collaboration",
      "Implemented live code editor + chat via Socket.io",
      "AI integration for code suggestion (OpenAI API)",
      "Leaderboard, gamification, and admin moderation features",
    ],
  },
  {
    title: "AITripRideIn",
    description: "AI Travel Planner with Real-Time Support & Smart Itineraries",
    image: "https://ik.imagekit.io/l0qjdxgtk/portfolio-image/Screenshot%202025-05-26%20173155.png?updatedAt=1748261166012",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "Gemini AI API"],
    github: "https://github.com/hansrajathole/AI_Trip_RideIn.git",
    demo: "https://ai-trip-ridein-frontend.onrender.com/",
    features: [  
      "AITripRideIn that creates travel itineraries based on interests, budget, and travel history.", 
      "Integrated real-time updates for weather, traffic, and events to dynamically adjust travel plans" , 
      "live AI chat support by Gemini for instant assistance and collaborative trip planning" , 
      "Highlights: Microservices, Caching, Rate Limiting, Load Balancers, Horizontal Scaling"
    ],
  },
  {
    title: "Social Media App",
    description: "Full-stack Instagram clone using MERN Stack",
    image: "https://ik.imagekit.io/l0qjdxgtk/portfolio-image/Screenshot%202025-05-14%20215116.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/hansrajathole/Instagram.git",
    demo: "https://instagram-frontend-rnox.onrender.com/",
    features: [
      "Built a full-stack Instagram clone using MERN Stack",
      "Implemented features like user authentication, post creation, liking/disliking posts, and story functionality",
      "Used JWT for secure authentication and Axios for API communication",
      "Frontend styled with Tailwind CSS and backend API developed with Node.js and Express",
    ],
  },
  {
    title: "NeuralRetouchAI",
    description: "Web tool that leverages AI technology to enhance images",
    image:
      "https://ik.imagekit.io/l0qjdxgtk/portfolio-image/Screenshot%202025-04-24%20181649.png?updatedAt=1748260522506",
    tags: ["React.js", "PicWish AI API", "Tailwind CSS", "Node.js"],
    github: "https://github.com/hansrajathole/NeuralRetouchAI.git",
    demo: "https://react-ai-image-enhancer.onrender.com/",
    features: [
      "Developed a sleek and intuitive web tool that leverages AI technology to automatically enhance and transform images",
      "Integrated PicWish AI API for real-time image enhancement",
      "Implemented responsive UI with instant image preview and drag-and-drop upload",
    ],
  },
]

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Check out some of my recent work</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="list-disc list-inside space-y-1 mb-4">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="flex-1">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
