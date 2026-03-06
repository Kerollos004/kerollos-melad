"use client"
import { TitleClass , projects } from "../../assets";
import Image from "next/image"
import { Github , EyeFill } from "react-bootstrap-icons";
import "./projects.css"
import { motion , Variants } from "framer-motion"; 
import { useThemeContext } from "../../contexts";

const projectVartians: Variants = {
    hidden: {
        y:-50,
        opacity:0
    },
    show: {
        y: 0,
        opacity:1,
        transition: {
            type: "spring",
            stiffness: 300,
            staggerChildren: .2,
            delayChildren:1
        }
    }
}

const projectVariant: Variants = {
    hidden: {
        opacity:0
    },
    show: {
        opacity:1,
    }
}
export default function Projects() {
    const {theme} = useThemeContext()

    const projectsHtml = projects.map(project => {
        return (
                <motion.article  key={project.name} variants={projectVariant} className=' project   rounded-2xl overflow-x-hidden bg-blue-400   '  >
                    {/* <Image
                        src={project.img}
                        alt='img'
                        className=' w-full h-80 pro-img object-cover '
                        width={100}
                        loading="lazy"
                        height={100}
                    /> */}
                    <div className="desc mt-4 p-4">
                        <h3 className={`text-3xl   mb-3  capitalize  ${theme === "dark" ? "text-white":"text-black"}`}>{project.name}</h3>
                        <p className="my-3"> {project.desc} </p>
                        <div className="my-2.5">
                            <p className="text-xl mb-2"> skills : </p>
                            <div className="flex gap-3 items-center">
                                {project.techs.map((tech , i) => {
                                    return (
                                            <Image key={i} loading="lazy"   className="rounded-full"  src={tech} alt="img" width={40} height={40}/>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex mt-2.5  gap-2.5 text-white" >
                            <a href={project.repo} className="p-2 border rounded-2xl flex items-center gap-2 border-white hover:bg-blue-900 hover:border-transparent" > <Github/> github repo</a>
                            <a href={project.demo} className="p-2 border rounded-2xl flex items-center gap-2 border-white hover:bg-blue-900 hover:border-transparent" >  <EyeFill/> live demo</a>
                        </div>
                    </div>
                </motion.article>
        )
    })
return (
    <section id="projects" className=" py-7 ">
        <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2 }}
            className={TitleClass}
        >
            my projects
        </motion.h1>

        <motion.article
            variants={projectVartians}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 gap-3 md:grid-cols-1 lg:grid-cols-2 "
        >
            {projectsHtml}
        </motion.article>

        <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration:1 , delay:2}}
            className="flex flex-col md:flex-row lg:flex-row  mt-3 items-start md:items-center  lg:items-center  gap-2"
        >
            <span className="text-4xl text-blue-400">note:</span>
            <p className="text-xl ">
                
                you can see all my projects and my deployments on my 
                <a href="#" className="text-blue-400  underline">  github account <i className="bi bi-box-arrow-up-right"></i> </a> and
                <a href="#" className="text-blue-400  underline">  vercel account <i className="bi bi-box-arrow-up-right"></i> </a>
            </p>
        </motion.div>
            
    </section>
)
}
