import React from 'react'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import "../styles/fontStyle.css";

export default function TopNavbar() {
    const location = useLocation();
    const { pathname } = location;
    const [clickMe, setClickMe] = useState(false);
    const handleClick = () => {
        setClickMe(!clickMe);
    }
    const iconStyle = "material-symbols-light:circle";
    return (
        <div className='w-100 bg-primary_dark navbarFont'>
            <nav className='sm:h-16 h-16 flex justify-between items-center'>
                {clickMe && <nav className='w-[100vw] h-[100vh] .nav fixed top-0 left-0 bg-medium_dark z-10 flex flex-col pl-16 pr-16 pt-14 md:hidden gap-y-6'>
                    <div className='flex justify-between'>
                        <div>
                            <h1 className='mr-4 md:mr-14' onClick={handleClick}><button className={`${pathname === "/contact" ? "text-opacity-50" : ""} px-3 py-2 bg-green-500 rounded-sm text-white text-opacity-100`}>
                                <Link to='/contact'>contact us!</Link>
                            </button></h1>
                        </div>
                        <div>
                            <Icon icon="charm:cross" height={27} className='bg-green-500 rounded-xl border-none inline' onClick={handleClick} />
                        </div>
                    </div>
                    <ul>
                        <li className='mb-6' onClick={handleClick}><Link to="/" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="mdi-light:home" className='inline mr-1' height={24} />Home</Link></li>
                        <li className='mb-6' onClick={handleClick}><Link to="/skills" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="skill-icons:actix-dark" className='inline mr-1' height={24} />Skills</Link></li>
                        <li className='mb-6' onClick={handleClick}><Link to="/more-projects" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="arcticons:zoho-projects" className='inline mr-1' height={24} />More-projects</Link></li>
                        <li className='mb-6' onClick={handleClick}><Link to="/experiences" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="ph:code" className='inline mr-1' height={24} />Experiences</Link></li>
                        <li className='' onClick={handleClick}><Link to="/blogs" className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="gridicons:trending" className='inline mr-1' height={24} />Blogs</Link></li>
                    </ul>
                    <hr />
                    <ul>
                        <h2 className='font-bold mb-4 text-2xl'>Socials</h2>
                        <li className='mb-6'><Link to="https://github.com/sujanchaudhary281-max" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="mingcute:github-line" className='inline mr-1 text-emerald-500' height={24} />Github</Link></li>
                        <li className='mb-6'><Link to="https://www.linkedin.com/in/sujan-chaudhary-a8a549208/" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="uit:linkedin-alt" className='inline mr-1 text-indigo-500' height={24} />Linkedin</Link></li>
                        <li className=''><Link to="" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="entypo-social:twitter" height={24} className='inline mr-1 text-blue-600' />Twitter</Link></li>
                    </ul>
                    <hr className='text-white text-opacity-60 mr-14' />
                    <ul>
                        <h2 className='font-semibold mb-4 text-xl text-green-500'>Platforms</h2>
                        <li className='mb-6'><Link to="https://www.hackerrank.com/profile/mrsujan321" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="cib:hackerrank" className='inline mr-1 text-emerald-500' height={24} />Hackerrank</Link></li>
                        <li className='mb-6'><Link to="https://www.linkedin.com/in/sujan-chaudhary-a8a549208/" target='_blank' className='transition-all ease-in-out duration-150 hover:pl-2 h-6 flex items-center'><Icon icon="cib:leetcode" className='inline mr-1 text-indigo-500' height={24} />Leetcode</Link></li>
                    </ul>
                </nav>}
                <div className='sm:ml-14 ml-11'>
                    <ul>
                        {/* <li className='hidden md:block'><Link to="/"><Icon icon="material-symbols-light:circle" height={24} className='bg-green-500 rounded-xl border-none' /></Link></li> */}
                        <Link to='/'><li className='text-xl font-semibold headerFont'>Sujan.Dev</li></Link>
                    </ul>
                </div>
                <h1 className='mr-4 md:mr-14 md:block hidden'><button className={`${pathname === "/contact" ? "text-opacity-50" : ""} px-3 py-2 bg-green-500 rounded-sm text-white text-opacity-100`}>
                    <Link to='/contact'>contact us!</Link>
                </button></h1>
                <h1 className='mr-14 block md:hidden'>
                    <ul>
                        <li className=''><Icon icon="material-symbols-light:menu" height={27} onClick={handleClick} /></li>
                    </ul>
                </h1>
            </nav>
        </div>
    )
}