"use client";
import Image from "next/image";
import { menu } from '../helpers/menu';

const Header = () => {

    return (
        <header className=" bg-black">
            <div className="container mx-auto py-4 text-white  flex justify-between items-center">
                <Image src="/logo.png" alt="Truck Jaune" width={500} height={500} className="h-32 w-auto" />
                <nav>
                    <ul className="flex justify-center space-x-4">
                        {menu.map(({ title, link }) => (
                            <li key={title}>
                                <a href={link} className="hover:underline uppercase">{title} </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;