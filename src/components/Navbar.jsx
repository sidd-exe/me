import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
    const [theme, setTheme] = useState(
        () => localStorage.getItem("theme") || "dark"
    );

    // Sync theme with document class list and localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const navItems = [
        { label: "Main", id: "main" },
        { label: "About Me", id: "about" },
        { label: "Projects", id: "projects" },
        { label: "Education", id: "education" },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        // Fixed positioning handles the floating element over scrolling sections
        <header className="sticky top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/60 backdrop-blur-md shadow-lg max-w-fit">

                {/* Navigation Links */}
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="px-4 py-1.5 text-xs font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 cursor-pointer"
                    >
                        {item.label}
                    </button>
                ))}

                <div className="h-4 w-[1px] bg-border mx-1" />

                {/* Theme Switcher Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="h-8 w-8 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground cursor-pointer"
                >
                    {theme === "dark" ? (
                        <Sun className="h-[1.1rem] w-[1.1rem] transition-all" />
                    ) : (
                        <Moon className="h-[1.1rem] w-[1.1rem] transition-all" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </nav>
        </header>
    );
}