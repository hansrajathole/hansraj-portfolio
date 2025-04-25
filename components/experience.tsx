"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Laksh IT Solution",
    location: "Amravati",
    period: "Jun 2024 - Dec 2024",
    description: [
      "Collaborated with senior developers to build and maintain responsive websites using HTML, CSS, JavaScript, and Bootstrap, enhancing user experience across various devices.",
      "Developed dynamic, user-friendly web pages utilizing React.js, improving overall site performance and interactivity.",
    ],
  },
  {
    title: "Kodr Bootcamp (Full Stack)",
    company: "Sheryians Coding School",
    location: "Bhopal",
    period: "Nov 2024 - May 2025",
    description: [
      "Participated in an intensive full-stack development bootcamp focusing on modern web technologies.",
      "Built multiple projects using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Collaborated with peers on team projects to develop real-world applications.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and work experience</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 relative"
            >
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-muted-foreground/20"></div>
              )}

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <p className="text-muted-foreground">
                            {exp.company} | {exp.location}
                          </p>
                        </div>
                        <span className="text-sm bg-muted px-3 py-1 rounded-full">{exp.period}</span>
                      </div>
                      <ul className="list-disc list-inside space-y-2 mt-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
