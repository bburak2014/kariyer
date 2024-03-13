import React, { useState } from 'react';
import Navlink from './Navlink';
import AuthButton from './AuthButton';
import { Link } from 'react-router-dom';
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import "./Header.css"
import { links,linksMobile,authLinks } from '../../../utils/helper';


const Header: React.FC = () => {
    const [showMenu, SetShowMenu] = useState(false)

    return (
        <div className='header'>
            <div className='logo-box'>
                {/*Mobile*/}
                {/* Açılır menu Butonu */}
                <button onClick={() => SetShowMenu(!showMenu)} className={`menu-button lg:hidden ${showMenu ? "close" : "open"}`}>
                    <MdOutlineMenu color='black' fontSize={24} />
                </button>
                {/* Açılır menu */}
                <div className={`menu-overlay ${showMenu && "open"}`}>
                    <button onClick={() => SetShowMenu(!showMenu)} className={`menu-button ${showMenu ? "close" : "open"}`}>
                        {showMenu && <IoClose color='black' fontSize={24} />}
                    </button>

                    <div className="overlay-links">
                        {
                            linksMobile.map(item => <Navlink key={item.name} item={item} />)

                        }

                    </div>
                </div>
                {/* Logo*/}
                <Link className='p-4' to="/"><img src='logo.svg' alt='logo' /></Link>

            </div>
            {/* Desktop */}
            <div className='navbar'>
                <div className='flex justify-center items-center'>
                    {/* Soldaki linklerin bulunduğu bölüm */}
                    {
                        links.map(item => <Navlink key={item.name} item={item} />)
                    }

                </div>
                {/* Sağdaki butonların olduğu bölüm */}
                <div className='flex gap-4 items-center'>
                    {
                        authLinks.map(item => <AuthButton key={item.name} item={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;