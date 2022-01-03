import React from 'react'
import Skill from './Skill'
import { SiPython, SiJavascript, SiCplusplus, SiReact, SiDjango, SiAmazonaws, SiDocker, SiFirebase, SiMysql } from 'react-icons/si'

const About = () => {
    const skills = [
        {name: 'Python', icon: <SiPython className="block m-auto"/>,},
        {name: 'JavaScript', icon: <SiJavascript className="block m-auto"/>},
        {name: 'C++', icon: <SiCplusplus className="block m-auto"/>},
        {name: 'React', icon: <SiReact className="block m-auto"/>},
        {name: 'Django', icon: <SiDjango className="block m-auto"/>},
        {name: 'AWS', icon: <SiAmazonaws className="block m-auto"/>},
        {name: 'Docker', icon: <SiDocker className="block m-auto"/>},
        {name: 'Firebase', icon: <SiFirebase className="block m-auto"/>},
        {name: 'MySQL', icon: <SiMysql className="block m-auto"/>}
    ]
    return (
        <div className="container mx-auto">
            {/* <div className="py-5 dark:text-white">
                <h1 className="font-bold text-4xl my-5"></h1>
            </div> */}
            <div className="py-5 dark:text-white">
                <h1 className="font-bold text-4xl my-5">Skills</h1>
                <div className="flex flex-wrap flex-row px-40">
                    {skills.map((skill) => (<Skill key={skill.name} name={skill.name} icon={skill.icon} />))}
                </div>
            </div>
        </div>
    )
}

export default About