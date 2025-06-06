import { useState, useEffect } from "react";

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
        "Golden Doodle Father"
    ];

    const [shownJobTitleIndex, setShownJobTitleIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setShownJobTitleIndex(idx => (idx + 1) % jobTitles.length);
        }, 2500);

        return () => clearInterval(interval);
    }, [jobTitles.length]);

    return (
        <div className="bg-red-400 h-full flex items-center justify-center">
            Hello, I'm Spencer Hobert a {jobTitles[shownJobTitleIndex]}
        </div>
    );
}