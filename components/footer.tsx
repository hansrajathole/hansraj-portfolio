"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Hansraj Athole. All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 md:mt-0"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
