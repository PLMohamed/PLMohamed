import Image from "next/image";
import Main from "./components/main";
import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    style: "normal",
    display: "swap",
    subsets: ["latin"],
});

export default function About() {
    return (
        <Main classNameNotInView="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-44">
            <section className="space-y-6">
                <h1
                    className={` text-4xl font-bold uppercase tracking-wider 
                    ${poppins.className}
                `}
                >
                    Hello, This is{" "}
                    <span className="text-stroke">
                        Boumedine Mohamed Touati
                    </span>
                </h1>
                <p>
                    also known as <strong>PLMohamed</strong>, I'm a full-stack
                    web developer, I have a passion for web development and love
                    to create web applications using modern technologies.
                </p>
                <p>
                    I have a strong foundation in web development and I'm on a
                    journey to evolve into a DevOps , I'm a fast learner and I'm
                    always looking to learn new technologies and improve my
                    skills.
                </p>
            </section>
            <section className="space-y-4">
                <h2 className="text-lg font-medium">Stacks</h2>
                <div className="relative max-w-full overflow-hidden">
                    <div
                        className="flex gap-5 transition-all ease-in-out 
                        [&>img]:box-border [&>img]:h-12 [&>img]:w-12 [&>img]:rounded-md [&>img]:bg-neutral-200 [&>img]:p-1 [&>img]:dark:bg-zinc-700 "
                    >
                        <Image
                            src="js.svg"
                            width={48}
                            height={48}
                            alt="javascript"
                        />
                        <Image
                            src="html.svg"
                            width={48}
                            height={48}
                            alt="html"
                        />
                        <Image src="css.svg" width={48} height={48} alt="css" />
                        <Image
                            src="nodejs.svg"
                            width={48}
                            height={48}
                            alt="node js"
                        />
                        <Image
                            src="tailwindcss.svg"
                            width={48}
                            height={48}
                            alt="tailwind css"
                        />
                        <Image
                            src="react.svg"
                            width={48}
                            height={48}
                            alt="react js"
                        />
                        <Image
                            src="electron.svg"
                            width={48}
                            height={48}
                            alt="electron js"
                        />
                        <Image
                            src="nextjs.svg"
                            width={48}
                            height={48}
                            alt="next js"
                        />
                        <Image
                            src="mysql.svg"
                            width={48}
                            height={48}
                            alt="mysql"
                        />
                        <Image
                            src="python.svg"
                            width={48}
                            height={48}
                            alt="python"
                        />
                    </div>
                </div>
            </section>
        </Main>
    );
}
