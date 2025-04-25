"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Tulsiramji Gaikwad-Patil College of Engineering & Technology",
    location: "Nagpur",
    period: "Aug 2020 - July 2024",
    grade: "CGPA: 7.40",
  },
  {
    degree: "12th Standard",
    institution: "Maharashtra State Board",
    location: "Maharashtra",
    period: "June 2019 - Feb 2020",
    grade: "",
  },
  {
    degree: "10th Standard",
    institution: "Maharashtra State Board",
    location: "Maharashtra",
    period: "June 2017 - March 2018",
    grade: "",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">My academic background and qualifications</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-8 relative"
            >
              {index !== educationData.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-muted-foreground/20"></div>
              )}

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-semibold">{edu.degree}</h3>
                          <p className="text-muted-foreground">
                            {edu.institution} | {edu.location}
                          </p>
                        </div>
                        <span className="text-sm bg-muted px-3 py-1 rounded-full">{edu.period}</span>
                      </div>
                      {edu.grade && <p className="text-sm font-medium mt-2">{edu.grade}</p>}
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
