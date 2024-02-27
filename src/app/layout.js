import NavBar from "@/components/NavBar";
import "@/styles/globals.css";

export const metadata = {
    title: "Boumedine Mohamed Touati",
    description:
        "Protfolio of Boumedine Mohamed Touati 'aka' PLMohamed - Full Stack Developer",
    keywords: [
        "Boumedine Mohamed Touati",
        "PLMohamed",
        "Full Stack Developer",
        "Developer",
        "Devops",
        "JavaScript",
        "JS",
        "React",
        "Node.js",
        "Next.js",
        "TailwindCSS",
        "Express",
        "HTML",
        "CSS",
        "MYSQL",
        "Docker",
    ],
};

export default function RootLayout({ children, about, works, contact }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="space-y-28 scroll-smooth bg-slate-100 text-zinc-900 dark:bg-zinc-800 dark:text-white">
                <NavBar />
                <main className="flex flex-col  px-5 md:px-16">
                    {about}
                    {/* {works} */}
                    {/* {contact} */}
                    {/* {children} */}
                </main>
            </body>
        </html>
    );
}
