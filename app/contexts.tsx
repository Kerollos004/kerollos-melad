"use client"
import { createContext, ReactNode, useState, useContext, Dispatch, SetStateAction } from "react"
interface Menu {
    menu: boolean;
    setOpenMenu: Dispatch<SetStateAction<boolean>>;
}

const MenuContext = createContext<Menu | null>(null);

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error("useMenuContext must be used within a MenuProvider");
    }
    return context;
}

export const MenuProvider = ({ children }: { children: ReactNode }) => {
    const [menu, setOpenMenu] = useState(false);

    const menuValue: Menu = { menu, setOpenMenu };

    return  <MenuContext.Provider value={menuValue}>{children}</MenuContext.Provider>;
}

interface Theme {
    theme: string,
    setTheme : Dispatch<SetStateAction<string>>
}

const ThemeContext = createContext<Theme | null>(null)

export const useThemeContext = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useThemeContext must be used within a themeProvider");
    }
    return context;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light")
    const ThemeValue: Theme = { theme, setTheme }
    return <ThemeContext.Provider value={ThemeValue}>{ children}</ThemeContext.Provider>
}