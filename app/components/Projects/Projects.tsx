"use client"
import { TitleClass , projects } from "../../assets";
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules';
import { Github , EyeFill } from "react-bootstrap-icons";
import 'swiper/css';
import "./projects.css"
import { motion , Variants } from "framer-motion"; 

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
        y:-50,
        opacity:0
    },
    show: {
        y: 0,
        opacity:1,
    }
}
export default function Projects() {
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:string) {
            return '<span class="' + className +  ' cursor-pointer">' + (index + 1) + '</span>';
        },
    };
    const projectsHtml = projects.map(project => {
        return (
            <SwiperSlide key={project.name}>
                <motion.article  className=' project relative h-80 rounded-2xl overflow-hidden   ' variants={projectVariant} >
                    <Image
                        src={project.img}
                        alt='img'
                        className='h-full w-full '
                        width={100}
                        loading="lazy"
                        height={100}
                    />
                    <h3 className="text-3xl text-white absolute   capitalize left-3.5 bottom-3.5">{project.name }</h3>
                    <div className=" absolute w-full h-full top-0 -left-full z-10 p-6  text-white layer flex flex-col justify-center  ">
                        <div className="mb-2.5">
                            <h3 className="text-xl mb-1.5 "> description :  </h3>
                            <p> {project.desc} </p>
                        </div>
                        <div className="mb-2.5">
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
                            <a href={project.repo} className="p-2 border rounded-2xl flex items-center gap-2 border-blue-400 hover:bg-blue-400" > <Github/> github repo</a>
                            <a href={project.demo} className="p-2 border rounded-2xl flex items-center gap-2 border-blue-400 hover:bg-blue-400" >  <EyeFill/> live demo</a>
                        </div>
                    </div>
                </motion.article>
            </SwiperSlide>
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
        >
            <Swiper
                // Configure modules
                pagination={pagination}
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 8000,
                }}
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 480px
                    480: {
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                        slidesPerView:2 ,
                        spaceBetween: 10
                    }
                }}
            >
                <article>
                    {projectsHtml}
                </article>
            </Swiper>
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
