"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_25%_at_50%_50%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/20 to-background"></div>

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Hi, I&apos;m <span className="text-primary">Hansraj Athole</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-[40px]">
            <TypeAnimation
              sequence={["Full Stack Developer", 1000, "React.js Developer", 1000, "Node.js Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            I build clean, scalable, and user-friendly web applications with modern technologies. Passionate about
            creating exceptional digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg">
              <Link href="#contact">Get in Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <motion.a
              href="https://github.com/hansrajathole "
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="http://www.linkedin.com/in/hansraj-athole-10257426b"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:atholehansraj@gmail.com"
              whileHover={{ y: -5 }}
              className="bg-muted hover:bg-muted/80 p-3 rounded-full transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <Link href="#about">
            <Button variant="ghost" size="icon" className="animate-bounce rounded-full">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Scroll down</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
