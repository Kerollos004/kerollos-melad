"use client"
import "./about.css"
import { about , TitleClass , services , skills  } from "../../assets"
import personImg from "../../../public/imgs/about_image.jpg"
import Image from 'next/image'
import { motion, Variants } from "framer-motion"
//service animations
const cards: Variants = {
    hidden: {
        y: -20,
        opacity:0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            staggerChildren: .2,
            delayChildren: 2
        }
    }
}
const card: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    show: {
        opacity: 1,
        y: 0,
    },
}
//skills animations
const skillsVariants: Variants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            staggerChildren: .2,
            delayChildren: 1
        }
    }
}

const skillVariant: Variants = {
    hidden: {
        opacity:0
    },
    show: {
        opacity:1
    }
}



export default function AboutSection() {
    const aboutHtml =  about.map(p => {
        return (
            <motion.p
                key={p.id}
                className='mb-3'
            >
                {p.p}
            </motion.p>
        )
    })

    const servicesHtml = services.map(service => {
        return (
            <motion.article
                variants={card}
                className='p-5 flex flex-col items-center text-center justify-center relative bg-blue-400 rounded-2xl  gap-2.5 service-box'
                key={service.id}>
                <Image
                    src={`/${service.icon}`}
                    alt='img'
                    width={70}
                    height={70}
                    loading="lazy"
                    className=' relative z-10 '
                />
                <h3 className='text-2xl relative z-10 '> {service.name} </h3> 
                <p className=' relative z-10 ' > {service.desc} </p>
                <span className=' absolute top-5 left-5 text-8xl  opacity-30  '>0{ service.id }</span>
            </motion.article>
        )
    })

    const skillsHtml = skills.map((skill , i) => {
        return (
            <motion.article
                variants={skillVariant}
                className='flex items-center gap-3 relative p-4 border border-blue-400 rounded-2xl hover:bg-blue-200'
                key={skill.name}
            >
                <Image
                    src={`${skill.img}`}
                    alt='img'
                    width={60}
                    height={60}
                    loading="lazy"
                    
                />
                <h3 className='text-xl'>{skill.name}</h3>
                <span className='  absolute top-1/2 transform -translate-y-1/2 right-2.5 text-5xl text-blue-400 opacity-50 '>  {i+1<10?`0${i+1}`: i+1 } </span>
            </motion.article>
        )
    })
    


return (
    <section id="about">
        
        <article className='  grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-2 gap-3.5 py-7'>
            <motion.article
                initial={{  opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{duration:1}}
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1 , delay:1 }}
                    className={TitleClass}
                >
                    about me
                </motion.h1>
                {aboutHtml}
            </motion.article >

            <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{duration:1 , delay:1 }}
            >
                <Image
                    className='w-full h-85 object-cover rounded-3xl border-4 border-blue-400 '
                    src={personImg}
                    alt='img'
                />
            </motion.article>

        </article>

        <article className='py-7'>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 2 }}
                className={TitleClass}
            >
                    what i can do
            </motion.h1>

            <motion.article
                variants={cards}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
                {servicesHtml}
            </motion.article>

        </article>


        <article className='py-7'>
                <motion.h1
                    initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2 }}
                    className={TitleClass}
                >
                    my skills
                </motion.h1>
            <motion.article
                variants={skillsVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3.5'
            >
                {skillsHtml}
            </motion.article>
        </article>
    </section>
)
}
