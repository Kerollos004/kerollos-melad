"use client"
import { useThemeContext } from '../../contexts';
import { TypeAnimation } from 'react-type-animation';

const ExampleComponent = () => {
const {theme} = useThemeContext()
return (
    <TypeAnimation
        sequence={[
            "frontend developer", 
            1000, // Waits 1s
            'backend developer', 
            1000,
            'ui ux designer',
            1000
        ]}
        wrapper="h3" 
        speed={50}
        style={{  display: 'inline-block' }}
        repeat={Infinity} 
        className={theme === "dark" ? "text-white text-3xl md:text-5xl lg:text-7xl " : "text-black text-3xl md:text-5xl lg:text-7xl "}
    />
);
};

export default ExampleComponent;
