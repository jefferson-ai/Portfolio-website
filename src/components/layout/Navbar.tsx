import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', to: 'projects' },
        { name: 'Skills', to: 'skills' },
        { name: 'About', to: 'about' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 shadow-sm" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                    <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="text-sm font-medium text-gray-600 hover:text-accent cursor-pointer transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant="default" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Hire Me
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-600 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 md:hidden flex flex-col items-center py-6 shadow-lg animate-in fade-in slide-in-from-top-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className="py-3 text-lg font-medium text-gray-600 hover:text-accent cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex gap-4 mt-6">
                        <a href="https://github.com/jefferson-ai" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/jeffersonadda" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:hello@example.com" className="text-gray-500 hover:text-accent transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
