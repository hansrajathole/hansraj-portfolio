"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "StackWave",
    description: "Real-Time Dev Q&A + Code Collaboration Platform",
    image: "https://media-hosting.imagekit.io/d1f916ce3f8d400c/Screenshot%202025-04-25%20022641.png?Expires=1840136218&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ji2cSfDFQqIS3azahZMDB6d-P~cdalCptdIQMcyTNbChzMYuWsmJs4VHaRFeq4XBpdNcf-fSKB8UJ6w9cCnoO~6YOcN3Y68~0g8yKL2J~C2PQpyF5S~ssuZ8CNd7ab2u3mBUfYMBv4ZEFCtlw-WAX-q-5UT7fI-tuGvArR9pC-uM7yD5hWorJzaM0cMkr7dgo6xKNGHSVRvVV7Bu7M2OTfFfhrd2EaMGXN-~cluQkyiALO58J0SdpQBLLDIfZi~K04k5j-DrH1c2sfO4keOF9e-xtG6g7uzNfPwxAKHVovSfRVq8baTpqGnqrVTe3DX2KLnyvLWb4GgfvuChqmLoAg__",
    tags: ["React.js", "Node.js", "Socket.io", "MongoDB", "OpenAI API"],
    github: "https://github.com/hansrajathole/StackWave.git",
    demo: "https://stackwave-frontend.onrender.com",
    features: [
      "Built StackOverflow-style Q&A with real-time code collaboration",
      "Implemented live code editor + chat via Socket.io",
      "AI integration for code suggestion (OpenAI API)",
      "Leaderboard, gamification, and admin moderation features",
    ],
  },
  {
    title: "Social Media App",
    description: "Full-stack Instagram clone using MERN Stack",
    image: "https://media-hosting.imagekit.io/d85238058f3e4230/Screenshot%202025-05-14%20215116.png?Expires=1841847719&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=QpJuMsENKM0RjaAJUfkhReO-3SQPeqpe3xUJhof6eb-ZZ4GRYrtAyQMWLN1xf~SCd7v8r72MwRtz99dBuG77hRC3UeL3bqxuiVcSaVGHFZfzC6lLrWwF~AbFLEvYUTfIszaeaPlUe~CfSbNsi~j5BHXsUJXanhOxqTnIdyPgfbwitPy5OkKnbBNt73BqYQONZokMDaLqs~VJF2UYe9T0TOYcqTJvDMFCPsyBdYo9U2IcJYlVtaLePt7moPClS8PupNQzGKodfyz4cAElYShZ4o-AOdw-s8pCLlkP~hsWNjuMrxphLcd6IfBMrlAcdTrMKv~054NdGorJHSJ86BLpUA__",
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
    title: "AI-powered Image Enhancer",
    description: "Web tool that leverages AI technology to enhance images",
    image:
      "https://media-hosting.imagekit.io/f8362a21c24a4967/Screenshot 2025-04-24 181649.png?Expires=1840106926&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=bmbF8LQNRsN33iUeurWTdzZN9NVDXGbQy97Av5FnzW-mtdXP8sRgds-LuHmEEJiXeWIaQRPOqYQDfD2kbEN0tG0GQ-vi92pc4pSYgeVGj5GlgFn~zoXeB0TG5ABZt2I1y-M9Ub1fNaQHQEs~42gW-W~~XXSW2CjC-moPVCeBONFhnd9iZepK7fH8IUXOFDdJb3QHLaUBptC5~fB35Gl13j5qkWIQrBLBVVO9DenRVCeJQLEMqmS3m42lKRMAa8W1LyllVQYYyRKg1yjTCQ9siSFjaelFr8Z7puFbjSnNb-MK751R8vf~Np~GP4ONED1BSVcVg8m-rruzrRgIWhhFwA__",
    tags: ["React.js", "PicWish AI API", "Tailwind CSS", "Node.js"],
    github: "https://github.com/hansrajathole/react-ai-image-enhancer.git",
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
