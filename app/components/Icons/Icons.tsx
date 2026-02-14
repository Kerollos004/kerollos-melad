"use client"

// menu context
import { useMenuContext , useThemeContext } from "../../contexts"
import {  useEffect  } from 'react'

import { MoonFill , BrightnessHighFill , List } from 'react-bootstrap-icons'

export default function Icons() {
    const { setOpenMenu } = useMenuContext()
    const { setTheme, theme } = useThemeContext()

    const ThemeIcon = theme === "dark" ? BrightnessHighFill : MoonFill

    const handleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
            document.body.classList.remove("light")
            document.body.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }
        else {
            setTheme("light")
            document.body.classList.remove("dark")
            document.body.classList.add("light")
            localStorage.setItem("theme", "light")
        }
    }

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme") 
        
        if (currentTheme === "dark") {
            setTheme("dark")
            document.body.classList.add("dark")
        }
        else {
            setTheme("light")
            document.body.classList.add("light")
        }
    },[setTheme])
    


return (
    <div className='flex gap-3.5 p-3 bg-blue-400 fixed z-10 top-4 right-5 rounded-2xl '>
        <List onClick={() => {
            setOpenMenu(true)
        }}
            className=" text-white text-2xl cursor-pointer  block md:block lg:hidden"
        />

        < ThemeIcon
            onClick={handleTheme}
            className=" text-white text-2xl cursor-pointer"
        />

    </div>
)
}


