"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

         

        <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
              <Image src="https://media-hosting.imagekit.io/da0afca337564599/PhotoRoom-20230810_000800-01.jpeg.jpg?Expires=1840170513&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=qsO5pEGzocPrkNE-tjjaoP7Uok0pSq-ryKFoGr8nfrIQYds4GQS~44D9-eG3EtoX~9XQKO6h5M4fyILLxAO690CQRG1Y8fL6Cw5ts4pPfp0cRe0s2HEb5hxT6CdTbqxTUuu78~NXiAKnnoLM9OyIhZK~oHYL6EvTJ7HtW8toVUHSy6fZ9IPMZQWtbR0f6fqmSUyhlBk2LOCgiKnNoNVs4jyQFfLi6hTBJd85e121p1-U96G8wGnvwMIYaCDB~KqVrLyekuxlbNVRF9q1CU9GvoOwq6JBmt39mam0znUJf~x1HG6kLeE1KBrgMdiVYuzIGC73wWQaUqIPOoN~rOtc4g__" alt="Hansraj Athole" fill className="object-cover" />

              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-primary/10"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-primary/10"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              />

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 5 }}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className="mb-4">
              I&apos;m Hansraj Athole, an aspiring Full Stack Developer with a passion for building clean, scalable, and
              user-friendly web applications.
            </p>
            <p className="mb-4">
              I have hands-on experience in React.js, Node.js, and MongoDB, and have built real-time applications like
              StackWave and an AI-powered image enhancement tool using external APIs.
            </p>
            <p className="mb-6">
              I recently completed my Bachelor of Technology in Computer Science from Tulsiramji Gaikwad-Patil College
              of Engineering & Technology, Nagpur with a CGPA of 7.40.
            </p>
            <Button className="flex items-center gap-2">
              <Download size={16} />
             
              <a href="https://drive.google.com/file/d/1QJbp01R5cl4GRkFWE7Qt5zPA3N5pMw9v/view?usp=sharing" className="">
              Download Resume
                  </a>
            </Button>
          </motion.div>

         
        </div>
      </div>
    </section>
  )
}
