import React from 'react';
import Header from './Component/Pages/Header';
interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="w-100">
            <Header />
            <main className='w-100'>
                {/* Ana içerik burada yer alacak */}
                {children}
            </main>

        </div>
    );
};

export default Layout;
