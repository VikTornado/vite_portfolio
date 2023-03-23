import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineHome, AiOutlineMail, AiOutlineProject} from "react-icons/ai";
import {BsPerson, GrProjects} from "react-icons/all";

const SideNav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className={'px-4'}>
            <GiHamburgerMenu className="absolute top-4 right-7 z-[99] sm:hidden" onClick={handleNav} size={30}/>
            {nav ? (
                <div className={'w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'}>
                    <a href={"#main"}
                       className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 cursor-pointer m-2'}>
                        <AiOutlineHome size={20}/>
                        <span className={'pl-4'}>Home</span>
                    </a>
                    <a href={"#work"}
                       className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 cursor-pointer m-2'}>
                        <GrProjects size={20}/>
                        <span className={'pl-4'}>Work</span>
                    </a>
                    <a href={"#projects"}
                       className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 cursor-pointer m-2'}>
                        <AiOutlineProject size={20}/>
                        <span className={'pl-4'}>Projects</span>
                    </a>
                    <a href={"#resume"}
                       className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 cursor-pointer m-2'}>
                        <BsPerson size={20}/>
                        <span className={'pl-4'}>Resume</span>
                    </a>
                    <a href={"#contacts"}
                       className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 cursor-pointer m-2'}>
                        <AiOutlineMail size={20}/>
                        <span className={'pl-4'}>Contacts</span>
                    </a>
                </div>
            ) : (
                <div className={'sm:block hidden fixed top-[25%] z-10'}>
                    <div className={'flex flex-col'}>
                        <a className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'}>
                            <AiOutlineHome/>
                        </a>
                        <a className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'}>
                            <GrProjects/>
                        </a>
                        <a className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'}>
                            <AiOutlineProject/>
                        </a>
                        <a className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'}>
                            <BsPerson/>
                        </a>
                        <a className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 easy-in duration-300'}>
                            <AiOutlineMail/>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SideNav;