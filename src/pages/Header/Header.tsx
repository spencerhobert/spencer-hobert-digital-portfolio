import { useState, useEffect } from 'react'
import forestImg from './images/forest-trees.png'

export default function Header() {
    const jobTitles: string[] = [
        'Software Engineer',
        'Computer Science Graduate',
        'Full Stack Engineer',
        'Web Developer',
        'Backend Engineer',
        'Software Developer',
        'Frontend Engineer',
        'Computer Science Graduate',
        'Video Game Enthusiast',
        'Husband',
        'Dog Dad',
    ]

    const [shownJobTitleIndex, setShownJobTitleIndex] = useState(0)
    useEffect(() => {
        // Flip between job titles
        const interval = setInterval(() => {
            setShownJobTitleIndex((prev) => (prev + 1) % jobTitles.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [jobTitles.length])

    return (
        <div
            className="flex h-full items-center justify-center object-cover text-center font-bold text-white shadow-2xl text-shadow-black text-shadow-sm"
            style={{ backgroundImage: `url(${forestImg})`, objectFit: 'cover' }}
        >
            Hello, I'm Spencer Hobert
            <br />
            {jobTitles[shownJobTitleIndex]}
        </div>
    )
}
