import react from 'react';
import {navLinks} from "../../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top'
            }
        });
        navTween.fromTo('nav',{backgroundColor:'transparent'},{backgroundColor:'#00000050'
            ,duration:1,
            ease:'power1.inOut'});
    })
    return (
        <nav className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center max-w-[1200px] mx-auto">
                <a href='#home' className='flex items-center gap-2'>
                    <img src='/images/logo.png' alt='logo' />
                    <p>Velvet Pour</p>
                </a>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                        ))}
                </ul>
            </div>
        </nav>

    )
}
export default Navbar;