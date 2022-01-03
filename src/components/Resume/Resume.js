import React from 'react'
import {FcGoogle} from 'react-icons/fc'

const Resume = () => {
    return (
        <div className="container mx-auto h-full">
            <button type="button"
                    onClick={()=>window.open("https://docs.google.com/document/d/1cO3czTlqWMuKguSZpX-UDNk-mq9f479tmu_3ETI1E4w/edit?usp=sharing")}
                    className="my-2.5 text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                {<FcGoogle className="mr-2"/>} Download with Google Doc
            </button>
            <iframe
            className="w-4/5 h-4/5 mx-auto outline-black"
            src="https://docs.google.com/document/d/e/2PACX-1vStkJUoieHydXxzMPfeTznRogSL7DBZ82j2dzarELcW4GUBQzpxMaV8RWVc0ILpuh2i-M9BffRBdCjT/pub?embedded=true"
            title="My resume"
            ></iframe>
        </div>
    )
}

export default Resume
