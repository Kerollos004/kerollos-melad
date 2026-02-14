"use client"
import React, { useState , useEffect } from 'react'
import "./sideMenu.css"
import { useMenuContext } from "../../contexts"
import {  sideMenuLinks } from "../../assets"
import Image from 'next/image'
import personImage from "../../../public/imgs/kero.jpeg"
import { Facebook, Linkedin, TwitterX, Whatsapp, XCircleFill } from 'react-bootstrap-icons'
import { motion } from 'framer-motion'

export default function SideMenu() {
    const {menu , setOpenMenu} = useMenuContext()
    const [activeClass, setActiveClass] = useState<string >("intro")
    const sideMenuHtml = sideMenuLinks.map(link => {
    return (
        <li key={link.id} >
            <a
                onClick={() => {
                    setActiveClass(link.id)
                    setOpenMenu(false)
                }}
                className={`text-4xl relative text-white capitalize   hover:text-blue-600 ${activeClass === link.id ? "active":""}`}
                href={`#${link.id}`}>{link.link}
            </a>
        </li>
    )
    })

    useEffect(() => {
    const sections = document.querySelectorAll("section[id]")
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveClass(entry.target.id)
            }
                
        })
        },
        {
            threshold: 0.5 , 
        }
        
    )
    
    sections.forEach(section => observer.observe(section))
    
    return () => observer.disconnect()
    }, [])

return (
    <motion.aside
        initial={{ opacity: 0 , x:-100 }}
        animate={{ opacity: 1 , x:0 }}
        transition={{ duration: 1, ease: "anticipate" }}
        className={`w-full md:w-80 h-screen flex flex-col text-center md:text-left lg:text-left items-center 
        md:items-start lg:items-start fixed top-0  lg:left-0 z-20 bg-blue-400 p-7
        ${menu?"left-0 md:left-0":"-left-full md:-left-full"}
        `}
    >
        <Image
            src={personImage}
            alt='image'
            className='mb-6 rounded-full object-cover border-8 border-white'
            width={200}
            height={200}
        />

        <ul className='list-none flex mb-20 flex-col  gap-2.5 '  >
            {sideMenuHtml}
        </ul>

        <div className="gap-4 w-full flex items-center justify-center">
            <a title='whatsapp' href="https://wa.me/+201270354240">< Whatsapp className=" text-3xl m-0 p-0 text-white  hover:text-blue-600 "/></a>
            <a href="https://x.com/MeladKerollos" title='TwitterX'>< TwitterX className=" text-3xl m-0 p-0 text-white  hover:text-blue-600 "/></a>
            <a title='linkedin' href="https://www.linkedin.com/in/kerollos-melad-6624a9265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">< Linkedin className=" text-3xl m-0 p-0 text-white  hover:text-blue-600 "/></a>
            <a title='facebook' href="https://www.facebook.com/kerollos.melad.2025?mibextid=ZbWKwL">< Facebook className=" text-3xl m-0 p-0 text-white hover:text-blue-600 "/></a>
        </div>

        < XCircleFill onClick={() => {
            setOpenMenu(false)
        }} className=" absolute text-2xl top-3 right-3 text-white  lg:hidden hover:text-red-600"/>
    </motion.aside>
)
}
