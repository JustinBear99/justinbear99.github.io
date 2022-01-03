import React from 'react'
import Project from './Project'
import asparagus from '../../images/asparagus.jpg'
import modelstructure from '../../images/modelstructure.png'
import ppocr from '../../images/ppocr.png'

const Projects = () => {
    return (
        <div className="container mx-auto flex flex-wrap justify-center">
            <Project link="https://github.com/JustinBear99/django_asparagus"
                     imgPath={asparagus}
                     header="Asparagus monitoring system"
                     content="The asparagus monitoring system collects images of greenhouse asparagus and detects its growth status by Mask R-CNN. The website was developed using Django, sqlite, Bootstrap and jQuery."
            />
            <Project link="https://github.com/JustinBear99/Mask_RCNN"
                     imgPath={modelstructure}
                     header="Mask R-CNN"
                     content="The instance segmentation model training project for asparagus monitoring system. The process included backbone substitution, Copy-Paste augmentation and self-training."
            />
            <Project link="https://github.com/JustinBear99/PPOCR-app"
                     imgPath={ppocr}
                     header="Scene text recognition App"
                     content="This App can recognize simplified Chinese and English text in daily life scene under 1s. The recognition model is provided by Paddle and the deployment framework is Streamlit"
            />
            <Project link="https://github.com/JustinBear99/mywebsite"
                     imgPath={null}
                     header="Portfolio"
                     content="This portfolio website is written in React.js and tailwind supporting dark mode."
            />
        </div>
    )
}

export default Projects
