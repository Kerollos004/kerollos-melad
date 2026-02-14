import { TelephoneFill , Envelope , GeoAltFill , Icon } from "react-bootstrap-icons"
// side menu data
interface link {
    id: string,
    link:string
}
export const sideMenuLinks: link[] = [
    { id: "intro", link: "intro" },
    { id: 'about', link: 'about me ' },
    { id: "projects", link: "projects" },
    { id: "contact", link: "contact me" }
]

//about me
interface paragraph {
    id: number,
    p:string
}
export const about:paragraph [] = [
    {
        id: 1,
        p: "My journey with programming started as a self-taught path driven by curiosity and the desire to build real things, not just follow tutorials. Coming from a non-technical academic background, I had to rely heavily on discipline, consistency, and problem-solving to move forward. Programming gradually shifted from being something I was learning into something I genuinely enjoy doing and thinking about.",
    },
    {
        id: 2, 
        p:"During my frontend journey, I focused on building solid foundations using modern tools and practices. I worked with technologies like JavaScript, React, Next.js, and Framer Motion, paying close attention to clean UI, performance, and user experience. Through real projects, I learned how to structure applications, think in components, and translate ideas into functional, responsive interfaces rather than just visually appealing pages."
    },
    {
        id: 3, 
        p:"Currently, I’m transitioning into the backend world by starting the Node.js track, with the goal of becoming a well-rounded full-stack developer. My focus is on understanding how systems work behind the scenes, building scalable APIs, handling data, and connecting frontend applications to real backend logic. I see this step as a natural continuation of my journey, and I’m committed to growing steadily through real projects and continuous learning."
    }
]
export const TitleClass: string = "title text-3xl capitalize mb-5  text-blue-400 relative "
interface service {
    id: number,
    icon:string ,
    name: string,
    desc:string
}

export const services: service[] = [
{
    id: 1,
    icon: "imgs/html-5.png",
    name: "Frontend Development",
    desc: "Building modern, responsive web applications using React.js and Next.js with a focus on performance, clean code, and reusable components."
},
{
    id: 2,
    icon: "imgs/database-file.png",
    name: "Backend Development",
    desc: "Building and learning backend systems using  Firebase, focusing on authentication, databases, and i am working on learning Node.js "
},
{
    id: 3,
    icon: "imgs/ux.png",
    name: "UI / UX",
    desc: "Creating responsive and user-friendly interfaces using Bootstrap and Tailwind CSS, with attention to layout, usability, and consistency."
}

]

interface skill {
    name: string ,
    img: string,
}

export const skills: skill[] = [
    {  name: "html5", img: "/imgs/html-5.png" },
    {  name: "css3", img: "/imgs/CSS3.png" },
    {  name: "javascript", img: "/imgs/js.png" },
    {  name: "bootstrap", img: "/imgs/Bootstrap.png" },
    {  name: "tailwind css", img: "/imgs/Tailwind CSS.png" },
    {  name: "react js", img: "/imgs/react.png" },
    {  name: "next js", img: "/imgs/Next.js.png" },
    {  name: "redux toolkit", img: "/imgs/redux.png" },
    { name: "firebase", img: "/imgs/firebase.png"},
    { name: "git", img: "/imgs/Git.png" },
    { name: "github", img: "/imgs/GitHub.png" },
]

interface projects {
    name:string ,
    img: string,
    desc: string,
    demo: string
    repo: string,
    techs: string[];
}

export const projects: projects[] = [
{
    name: "Mr Ecommerce",
    img: "/imgs/project.jpg",
    desc: "A fully responsive e-commerce website with a complete shopping cart and checkout system built using HTML, CSS, Bootstrap, and GSAP.",
    demo: "https://crud-system-bay-six.vercel.app/",
    repo: "https://github.com/Kerollos004/mr",
    techs: [
        "/imgs/html-5.png",
        "/imgs/css-3.png",
        "/imgs/js.png",
        "/imgs/bootstrap.png"
    ]
},
{
    name: "Admin Panel",
    img: "/imgs/project.jpg",
    desc: "A fully responsive admin panel featuring a dashboard, products page, users management, and authentication system built with React and Firebase.",
    demo: "https://admin-pannel-9o57.vercel.app/",
    repo: "https://github.com/Kerollos004/admin-pannel",
    techs: [
        "/imgs/react.png",
        "/imgs/css-3.png",
        "/imgs/firebase.png"
    ]
},
{
    name: "Food App",
    img: "/imgs/project.jpg",
    desc: "A simple food application built with React and React Router.",
    demo: "https://food-app-pied-two.vercel.app/",
    repo: "https://github.com/Kerollos004/food-app",
    techs: [
        "/imgs/react.png",
        "/imgs/css-3.png"
    ]
},
{
    name: "Movie App",
    img: "/imgs/project.jpg",
    desc: "A fully responsive movie application built with React and React Router.",
    demo: "https://movies-app-six-swart.vercel.app/",
    repo: "https://github.com/Kerollos004/movies-app",
    techs: [
        "/imgs/react.png",
        "/imgs/css-3.png"
    ]
},
{
    name: "Shopping Cart",
    img: "/imgs/project.jpg",
    desc: "A fully responsive shopping cart application with checkout functionality built using React, Redux Toolkit, and Tailwind CSS.",
    demo: "https://shopping-cart-redux.vercel.app/",
    repo: "https://github.com/Kerollos004/shopping-cart-redux",
    techs: [
        "/imgs/react.png",
        "/imgs/redux.png",
        "/imgs/Tailwind CSS.png"
    ]
},
{
    name: "Mahmoud Khalil Museum",
    img: "/imgs/project.jpg",
    desc: "A fully responsive graduation project website designed for an archaeology faculty student.",
    demo: "https://mahmoud-khalil-museum.vercel.app/",
    repo: "https://github.com/Kerollos004/mahmoud-khalil-museum",
    techs: [
        "/imgs/html-5.png",
        "/imgs/css-3.png",
        "/imgs/js.png",
        "/imgs/bootstrap.png"
    ]
}
]


// contact

export interface user{
    name: string,
    email: string,
    message: string
}



interface input {
    state: keyof user;
    id: string,
    type: string ,
    placeholder:string
}


export const inputs: input[] = [
    {
        state:"name",
        id: "username",
        type: "text",
        placeholder:"name..."
    },
    {
        state:"email",
        id: "email address",
        type: "email",
        placeholder:"email..."
    },
    {
        state:"message",
        id: "your message",
        type: "text",
        placeholder:"message..."
    }
]


interface contact {
    icon: Icon,
    tool: string,
    href:string
}

export const contacts: contact[] = [
    {
        icon: Envelope,
        tool: "meladkerollos0@gmail.com",
        href:"mailto:meladkerollos0@gmail.com"
    },
    {
        icon: TelephoneFill ,
        tool: "01270354240",
        href:"tel:+201270354240"
    },
    {
        icon: GeoAltFill ,
        tool: "alexandria",
        href:"https://maps.app.goo.gl/1be5jK6jCeBjZCss8"
    }
]





// dark mode

