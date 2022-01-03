import React from 'react'

const Project = ({link, imgPath, header, content}) => {
    return (
        <div className="text-left m-5">
            <a href={link} className="flex flex-col items-center px-2 bg-gray-100 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={imgPath} alt="None"/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{header}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
                </div>
            </a>
        </div>
        
    )
}

export default Project
