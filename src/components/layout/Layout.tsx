import { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Silk } from '../ui/Silk';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white selection:bg-accent/20 relative">
            {/* Background Silk Effect */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <Silk
                    speed={5}
                    scale={1}
                    color="#7B7481"
                    noiseIntensity={1.5}
                    rotation={0}
                />
            </div>

            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};
