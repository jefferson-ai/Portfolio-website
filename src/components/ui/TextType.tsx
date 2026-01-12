import { useState, useEffect } from 'react';

interface TextTypeProps {
    text: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    showCursor?: boolean;
    cursorCharacter?: string;
    className?: string; // Allow passing styles
}

const TextType = ({
    text,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    showCursor = true,
    cursorCharacter = "|",
    className = "",
}: TextTypeProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        // Handle empty text array
        if (!text || text.length === 0) return;

        const fullText = text[currentTextIndex];

        const handleTyping = () => {
            if (isDeleting) {
                setCurrentText((prev) => prev.slice(0, -1));
            } else {
                setCurrentText((prev) => fullText.slice(0, prev.length + 1));
            }
        };

        let timer: any;

        if (!isDeleting && currentText === fullText) {
            if (text.length > 1) {
                timer = setTimeout(() => setIsDeleting(true), pauseDuration);
            }
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % text.length);
        } else {
            timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentTextIndex, text, typingSpeed, deletingSpeed, pauseDuration]);

    return (
        <span className={className}>
            {currentText}
            {showCursor && <span className="animate-pulse ml-1">{cursorCharacter}</span>}
        </span>
    );
};

export default TextType;
