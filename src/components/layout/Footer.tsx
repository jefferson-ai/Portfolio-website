export const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
            <div className="container mx-auto px-6 text-center text-gray-500">
                <p className="mb-4">&copy; {new Date().getFullYear()} Jefferson. All rights reserved.</p>
                <p className="text-sm">Built with React, Tailwind CSS, and Framer Motion.</p>
            </div>
        </footer>
    );
};
