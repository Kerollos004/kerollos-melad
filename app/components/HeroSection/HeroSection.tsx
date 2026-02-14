"use client"
import Image from 'next/image'
import personImage from "../../../public/imgs/kero.jpeg"
import { ArrowDownCircleFill } from 'react-bootstrap-icons'
import ExampleComponent from "../AnimatedText/AnimatedText"
import {motion , Variants} from "framer-motion"
import { useThemeContext } from '../../contexts'
    const sectionVariants:Variants = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type:"spring",
            stiffness: 300,
            staggerChildren: 0.2,
            delayChildren: 1
        },
    },
    };
    
    const itemVariants:Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
    },
    };
export default function HeroSection() {
    const { theme } = useThemeContext()
return (
    <motion.section initial="hidden" animate="show"  variants={sectionVariants} className='w-full h-screen flex items-center text-center flex-col gap-3.5 justify-center' id='intro'>
        <motion.h3 variants={itemVariants}  className='text-3xl'>hi there , this is <span className='text-blue-400'>kerollos melad</span></motion.h3>
        <motion.div variants={itemVariants} >
            <Image
                className='rounded-full border-4 border-blue-400'
                src={personImage}
                alt='image'
                width={250}
                height={250}
                priority={true}     
            />
        </motion.div>
        <motion.div variants={itemVariants}><ExampleComponent/></motion.div>
        <motion.div variants={itemVariants} className="flex gap-2">
            <a className={`py-2 px-4  rounded-2xl border flex gap-1.5 items-center  border-blue-400  hover:bg-blue-400 
                ${theme === "dark" ? "text-white" : "text-black"} `}
                href="#contact">
                hire me
            </a>
            <a className={`py-2 px-4  rounded-2xl border flex gap-1.5 items-center border-blue-400  hover:bg-blue-400 
                ${theme === "dark" ? "text-white" : "text-black"} `}
                href="#">
                download cv
                <ArrowDownCircleFill/>
            </a>
        </motion.div>
    </motion.section>
)
}
