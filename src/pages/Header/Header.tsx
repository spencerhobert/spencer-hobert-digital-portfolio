import { useState, useEffect } from "react";
import forestImg from "./images/forest-trees.png";

export default function Header() {

    const jobTitles: string[] = [
        "Software Engineer",
        "Computer Science Graduate",
        "Full Stack Engineer",
        "Web Developer",
        "Backend Engineer",
        "Software Developer",
        "Frontend Engineer",
        "Computer Science Graduate",
        "Video Game Enthusiast",
        "Husband",
        "Dog Dad"
    ];

    const [shownJobTitleIndex, setShownJobTitleIndex] = useState(0);
    useEffect(() => { // Flip between job titles
        const interval = setInterval(() => {
            setShownJobTitleIndex(idx => (idx + 1) % jobTitles.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [jobTitles.length]);

    return (
        <div className="h-full flex text-center items-center justify-center text-white text-shadow-black text-shadow-sm font-bold shadow-2xl object-cover"
                style={{ backgroundImage: `url(${forestImg})`, objectFit: "cover" }}
        >
            Hello, I'm Spencer Hobert
            <br />
            {jobTitles[shownJobTitleIndex]}
        </div>
    );
}