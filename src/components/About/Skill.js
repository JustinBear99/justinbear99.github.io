import React from 'react'

const Skill = ({name, icon}) => {
    return (
        <div className="text-5xl text-center p-2 m-2 grow border-gray-800 border-2 rounded md:p-6 hover:-translate-y-1 hover:scale-110 dark:border-white">
            {icon}
            <p className="text-base py-2">{name}</p>
        </div>
    )
}

export default Skill
