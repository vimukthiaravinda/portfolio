import 'react';
import './navbar.css';
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link.js";
import menu_open from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import {useRef} from "react";

const Navbar = () => {
    const menuRef = useRef();
    const openMenu = () =>{
        menuRef.current.style.right = "0";
    }
    const closeMenu = () =>{
        menuRef.current.style.right = "-350px";
    }
    return (
        <nav className="navbar">
            <div className="navbar-head">Vim.Dev</div>
            <img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open'/>
            <ul ref={menuRef} className="navbar-nav">
                <img src={close} onClick={closeMenu} alt='' className='nav-mob-close'/>
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink>
                </li>
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50} href='#about'>About
                    Me</AnchorLink></li>
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50}
                                                     href='#skills'>Skills</AnchorLink></li>
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50}
                                                     href='#projects'>Projects</AnchorLink></li>
                <li className="nav-item"><AnchorLink className='anchor-link' offset={50}
                                                     href='#contact'>Contact</AnchorLink></li>
            </ul>
            <AnchorLink className='anchor-link2' offset={50} href='#contact'>
                <button className="nav-connect">Connect</button>
            </AnchorLink>
        </nav>
    );
};

export default Navbar;