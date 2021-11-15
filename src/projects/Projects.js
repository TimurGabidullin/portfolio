import React from "react";
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";



function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Project title={'Js'} description={'qqqqqq qqqqqqq qqqqqq qqqqqqqq qqqqqq qqqqq qqqqq'}/>
                    <Project title={'Css'} description={'qqqqqq qqqqqqq qqqqqq q'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
