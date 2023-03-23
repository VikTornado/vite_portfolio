import React from 'react';

const Work = (props) => {
    return (
        <div>
            <h1>Work</h1>
            {props.data.map((item, id) => {
                return (
                    <ol className={'flex flex-col md:flex-row relative border-l border-stone-200 ml-24'}>
                        <li className={'mb-10 ml-4'}>
                            <div className={'absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white'}/>
                            <p className={'flex flex-wrap px-2 gap-4 flex-row items-center justify-start text-xs md:text-sm'}>
                                <span className={'inline-block px-2 py-1 font-semi-bold text-white bg-violet-900 rounded-md'}>{item.year}</span>
                                <span className={'text-lg font-semi-bold text-violet-900'}>{item.title}</span>
                                <span className={'my-1 text-sm font-normal leading-none text-stone-400'}>{item.duration}</span>
                            </p>
                            <p className={'my-2 text-base font-normal text-stone-500 px-4'}>{item.details}</p>
                        </li>
                    </ol>
                )
            })}
        </div>
    );
};

export default Work;