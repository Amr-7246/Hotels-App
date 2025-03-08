'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GlobalNavBar: React.FC = () => {
    const pathname = usePathname();

    const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Hotels', href: '/Hotels' },
    { label: 'HotelDetails', href: '/Hotels/HotelDetailes' },
    ];

return (
    <nav className="fixed bottom-0 left-0 right-0 bg-stone-800 border-t border-stone-600 shadow-md shadow-stone-500 z-50">
        <div className="flex justify-around font-yujiMai items-center p-3">
        {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
            <Link key={item.href} href={item.href}>
                <span className={`text-stone-500  hover:text-stone-200  px-3 py-2 rounded transition-colors duration-200 cursor-pointer ${ isActive ? 'text-stone-200' : 'hover:text-stone-600' }`}
                >
                {item.label}
                </span>
            </Link>
            );
        })}
        </div>
    </nav>
    );
};

export default GlobalNavBar;
