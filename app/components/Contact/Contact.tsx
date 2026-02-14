"use client"
import React, { useState, useRef  } from 'react'
import { inputs, contacts, user, TitleClass } from "../../assets"
import emailjs from '@emailjs/browser';
import { useThemeContext } from "../../contexts"
import {  motion } from 'framer-motion';


export default function Contact() {
    const {theme} = useThemeContext()
    const [User, setUser] = useState<user>({ name: "", message: "", email: "" })
    const formRef = useRef<HTMLFormElement | null >(null)
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formRef.current) {
        try {
            emailjs
            .sendForm('service_9wh4z79', 'template_ged5qu8', formRef.current, {
                publicKey: 'FNOKCmc_vD4QP74to',
            })
        }
        catch (err) {
            console.error(err)
        }
        finally {
            setUser({ name: "", message: "", email: "" })
        }
        }
    }


    const inputsHtml = inputs.map(input  => {
        return (
        <div key={input.id} className='flex flex-col w-full mb-2.5 '>
            <label className={theme === "dark" ? " text-white":"text-black"} htmlFor={input.id}>{input.id}</label>
                <input
                    name={input.state}
                    value={User[input.state]}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUser({ ...User, [input.state]: e.target.value })}
                    type={input.type}
                    placeholder={input.placeholder}
                    id={input.placeholder}
                    className={`p-2  rounded-2xl border outline-0 ${theme === "dark" ? "border-white text-white":"border-black text-black"}`}
            />
        </div>
        )
    })
    const contactsHtml = contacts.map(contact => {
        return (
            <div key={contact.tool} className='flex gap-1.5  text-xl text-black items-center w-full mb-2.5 '>
                <contact.icon className={theme === "dark" ? "text-white" :"text-black" } />
                <span className={theme === "dark" ? "text-white" :"text-black" }>:</span>
                <a className={`overflow-hidden text-ellipsis whitespace-nowrap ${theme==="dark"?"text-white":"text-black"}`} href={contact.href}>{ contact.tool}</a>
            </div>
        )
    })
return (
    <section className='py-7 ' id="contact">
        <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{duration:2}}
            className={TitleClass}
        >
            contact me
        </motion.h1>
        <article className='grid grid-cols-1 md:grid-cols-3 gap-2.5 lg:grid-cols-3 items-start overflow-hidden'>
            <motion.article
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{duration:1 }}
                className='p-3.5 bg-blue-400 rounded-3xl '
            >
                {contactsHtml}
            </motion.article>
            <motion.form
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{duration:1}}
                ref={formRef}
                onSubmit={handleSubmit} action=""
                className='p-3.5 bg-blue-400 rounded-3xl col-span-1 md:col-span-2 lg:col-span-2'
            >
                {inputsHtml}
                <button className=' p-2 text-black rounded-2xl inline-block text-center w-full bg-gray-200 hover:bg-blue-300 '
                >
                    send message
                </button>
            </motion.form>
        </article>
    </section>
)
}
