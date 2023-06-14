import {useEffect, useState} from "react";

export default function DarkmodeToggle({}){
    const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark');
    useEffect(() => {
        // Apply dark mode class to the body element
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        // Toggle the dark mode state
        localStorage.theme = darkMode ? 'light' : 'dark';
        console.log(localStorage.theme)
        setDarkMode(!darkMode);
    };

    return (
        <div>
            <label htmlFor="darkModeToggle">Dark Mode:</label>
            <input
                id="darkModeToggle"
                type="checkbox"
                checked={darkMode}
                onChange={toggleDarkMode}
            />
        </div>
    );
}