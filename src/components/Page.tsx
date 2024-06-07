import { useState, useEffect, ReactNode } from "react";

export const Page = ({ children }: { children: ReactNode }) => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY / (document.documentElement.scrollHeight - innerHeight) * 100;
        setScrollProgress(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="page">
            {document.documentElement.scrollHeight > innerHeight &&
                <>
                    <div className="scroll-value" style={{ width: `${scrollProgress}%` }} />
                    <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                            <path d="M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
                        </svg>
                    </button>
                </>
            }
            {children}
        </div>
    );
}