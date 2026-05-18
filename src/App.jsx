// src/App.jsx
import Navbar from "./components/Navbar";
import EducationTimeline from "./components/EducationTimeline";
import { educationData } from "./data/educationData";

export default function App() {
    return (
        <div className="min-h-dvh bg-background text-foreground antialiased selection:bg-neutral-800 selection:text-white">
            {/* Our floating blurred glass navigation element */}
            <Navbar />

            {/* Main Hero Section */}
            <section
                id="main"
                className="min-h-screen flex flex-col items-center justify-center p-8 text-center"
            >
                <div className="space-y-4 max-w-2xl">
                    <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl">
                        Siddharth Sinha
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-[600px] mx-auto font-medium">
                        Building optimized embedded software systems, hardware automation architectures, and interactive digital interfaces.
                    </p>
                </div>
            </section>

            {/* About Me Section */}
            <section
                id="about"
                className="min-h-screen flex items-center justify-center bg-muted/30 border-t border-border p-8"
            >
                <div className="max-w-3xl w-full space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Placeholder for your background overview story, electrical systems context, design mentalities, and operational interests.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section
                id="projects"
                className="min-h-screen flex items-center justify-center border-t border-border p-8"
            >
                <div className="max-w-3xl w-full space-y-4">
                    <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
                    <p className="text-muted-foreground">
                        Placeholder for showcases like TinyML hardware nodes, edge automation tools, or custom application codebases.
                    </p>
                </div>
            </section>

            {/* Education Section */}
            <section
                id="education"
                className="min-h-screen flex items-center justify-center bg-muted/30 border-t border-border p-8"
            >
                <div className="max-w-3xl w-full space-y-8">
                    <h2 className="text-3xl font-bold tracking-tight">Education</h2>
                    <EducationTimeline items={educationData} />
                </div>
            </section>

            {/* Footer Section */}
            <footer className="h-[50vh] w-full border-t border-border bg-muted/50 flex flex-col justify-between p-8 md:p-12">
                <div className="max-w-3xl w-full mx-auto flex flex-col md:flex-row md:justify-between gap-8 pt-4">
                    <div className="space-y-2">
                        <h3 className="font-bold text-lg">Siddharth Sinha</h3>
                        <p className="text-sm text-muted-foreground max-w-xs">
                            Optimized embedded software systems & hardware automation architectures.
                        </p>
                    </div>

                    <div className="flex gap-12">
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigation</span>
                            <a href="#main" className="text-sm hover:underline">Home</a>
                            <a href="#about" className="text-sm hover:underline">About</a>
                            <a href="#projects" className="text-sm hover:underline">Projects</a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</span>
                            <a href="#" className="text-sm hover:underline">GitHub</a>
                            <a href="#" className="text-sm hover:underline">LinkedIn</a>
                            <a href="#" className="text-sm hover:underline">Email</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-3xl w-full mx-auto border-t border-border/60 pt-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Siddharth Sinha. All rights reserved.</p>
                    <p>Built with React & Tailwind CSS</p>
                </div>
            </footer>
        </div>
    );
}