"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Server, Layout, PenToolIcon as Tool, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="h-6 w-6 text-primary" />,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Backend",
    icon: <Server className="h-6 w-6 text-primary" />,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Socket.io", "WebSocket", "Redis","kafka", "Docker"],
  },
  {
    title: "Database",
    icon: <Database className="h-6 w-6 text-primary" />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    icon: <Tool className="h-6 w-6 text-primary" />,
    skills: ["Git", "GitHub", "VS Code", "Postman", "Render", "Cloudinary", "imagekit", "Vercel"],
  },
  {
    title: "Other",
    icon: <Layers className="h-6 w-6 text-primary" />,
    skills: ["Responsive Design", "UI/UX", "API Integration", "Problem Solving"],
  },
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">Here are the technologies and tools I work with</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-muted rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
