'use client'

import Image from "next/image";
import { JetBrains_Mono } from "next/font/google";
import {motion} from "framer-motion";

const jbmono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex">
        <motion.img
          className="hobbes_snowfort"
          src="hobbes_snowfort.png"
          initial = {{x:-500, y:-95}}
          whileInView={{x:-210, y:-95}}
          transition={{
            duration: 1.2,        
            damping: 25,
            stiffness: 100,
          }}
          >

        </motion.img>
        <motion.img
          className="calvin_snowfort"
          src="calvin_snowfort.png"
          initial = {{x:500, y:-95}}
          whileInView={{x:210, y:-95}}
          transition={{
            duration: 1.2,        
            damping: 25,
            stiffness: 100,
          }}
          >

        </motion.img>
      </div>
      <div>
        <text className="text-8xl bottom-56">
          BIG PLACEHOLDER
        </text>
      </div>
      <div>
        <text className="text-8xl bottom-56">
          BIG PLACEHOLDER
        </text>
      </div>
      <div>
        <text className="text-8xl bottom-56">
          BIG PLACEHOLDER
        </text>
      </div>
      <div>
        <text className="text-8xl bottom-56">
          BIG PLACEHOLDER
        </text>
      </div>
      <div>
        <text className="text-8xl bottom-56">
          BIG PLACEHOLDER
        </text>
      </div>
      <motion.div
        className="sledding"
        initial = {{x:-500, y:-300}}
        whileInView={{x:500,y:100}}
        transition={{
          duration: 1.2,        
          damping: 25,
          stiffness: 100,
        }}
      >
        <img className="" id="icon" src="sledding.png" alt="sledpic" />
      </motion.div>
    </main>
  );
}
