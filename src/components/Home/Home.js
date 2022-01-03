import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import bear from '../../images/polar-bear.png'

const Home = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex flex-wrap mt-8">
                <div className="order-1 grow md:basis-1/2 pt-14 font-bold dark:text-white">
                    <h1 className="text-3xl text-center md:text-left py-5 pl-6 md:text-4xl">Hi there!</h1>
                    <h1 className="text-3xl text-center md:text-left py-5 pl-6 md:text-4xl">This is Justin Bear</h1>
                    <p className=" italic font text-2xl text-center md:text-left pl-6 pt-10 md:text-3xl">I love coding and software development</p>
                </div>
                <div className="flex order-2 px-40 md:basis-1/2 md:px-12 items-center dark:invert">
                    <img src={bear} alt="https://www.flaticon.com/premium-icon/polar-bear_2408936?term=bear&page=1&position=12&page=1&position=12&related_id=2408936&origin=tag"></img>
                </div>
            </div>
            <hr className="solid my-10 mx-24 md:mx-48 border-gray-900 dark:border-white"/>
            <div className="dark:text-white">
                <h1 className="font-bold text-3xl mt-10 pb-2">Find me on</h1>
                <ul className="inline-flex">
                    <li className="px-2">
                        <a href="https://linkedin.com/in/hsien-feng-hsiung" target="_blank" rel="noreferrer"><FaLinkedin size="40px"/></a>
                    </li>
                    <li className="px-2">
                        <a href="https://github.com/JustinBear99" target="_blank" rel="noreferrer"><FaGithub size="40px"/></a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Home
