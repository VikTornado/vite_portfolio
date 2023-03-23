import React, {useState} from 'react';
import wp from '../assets/4.png'
import {TypeAnimation} from "react-type-animation";
import {FaFacebookF, FaInstagram, FaViber, FaWhatsapp} from "react-icons/all";

const Main = () => {
    return (
        <div id={"main"} className={'w-full'}>
            <div className={'w-full'}>
                <img className={'w-full h-screen object-cover object-left scale-x-[-1]'} id={"#main"} src={wp}
                     alt={"images"}/>
            </div>
            <div className={'w-full h-screen absolute top-0 left-0 bg-white/50 '}>
                <div
                    className={'max-w-[700px] m-auto w-full h-full flex flex-col justify-center items-center lg:items-start items-center'}>
                    <h1 className={'sm:text-5xl text-4xl font-bold text-gray-800'}>I'm Viktor Minin</h1>
                    <h2 className={'flex sm:text-3xl text-2xl pt-4 text-gray-800'}> I'm a &nbsp;
                        <TypeAnimation
                            sequence={[
                                'Developer', // Types 'One'
                                1000, // Waits 1s
                                'Coder', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                () => {
                                    console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                                }
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{fontSize: '2em', display: 'inline-block'}}
                        />
                    </h2>
                    <div className={'flex justify-between pt-6 max-w-[200px] w-full'}>
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaViber/>
                        <FaWhatsapp/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;