"use client"
import { motion } from 'framer-motion'
export default function Footer() {
return (
    <motion.footer
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{once:true , amount:.1}}
        transition={{duration:1}}
        className='relative w-full left-0 md:w-full lg:w-[calc(100%-20rem)] lg:left-80 p-3.5 bg-blue-400 text-2xl text-white text-center'
    >
        <h3 className='p-0 m-0'>copyrights@2026</h3>
    </motion.footer>
)
}
