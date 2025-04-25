"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Certificate of training completion in web development",
    issuer: "Laksh IT Solution",
    date: "December 2024",
    link: "",
  },
  {
    title: "Getting Started with NodeJS",
    issuer: "Simplilearn (SkillUp)",
    date: "October 2023",
    link: "https://drive.google.com/file/d/1k1JGWNM9nvEBxxttWYuzFNoT6ObBIiX4/view",
  },
  
]

export default function Certifications() {  
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses I&apos;ve completed
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cert.issuer} • {cert.date}
                      </p>
                      {cert.link && (
                        <Button asChild variant="outline" size="sm" className="mt-2">
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            View Certificate
                          </a>
                        </Button>
                      )}
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
