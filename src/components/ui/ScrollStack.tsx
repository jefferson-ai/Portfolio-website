import type { ReactNode } from 'react';

interface ScrollStackProps {
    children: ReactNode;
    className?: string; // Allow custom classes
}

interface ScrollStackItemProps {
    children: ReactNode;
    className?: string;
}

export const ScrollStack = ({ children, className = "" }: ScrollStackProps) => {
    return (
        <div className={`relative w-full ${className}`}>
            {children}
        </div>
    );
};

export const ScrollStackItem = ({ children, className = "" }: ScrollStackItemProps) => {
    // Sticky positioning is key here.
    // top-20 gives it some space from the top of the viewport so it doesn't hit the very edge,
    // adjusting based on the navbar height (pt-16 in Hero implies ~4rem/64px navbar).
    // I'll stick with top-24 (6rem / 96px) to be safe and have some breathing room.
    return (
        <div className={`sticky top-24 w-full ${className}`}>
            {children}
        </div>
    );
};

export default ScrollStack;
