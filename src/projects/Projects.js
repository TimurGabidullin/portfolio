import React from 'react';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import social from '../assets/image/social-network.jpg';
import todo from '../assets/image/todolist.jpg';


function Projects() {

    const socialImg = {
        backgroundImage: `url(${social})`
    }

    const todoImg = {
        backgroundImage: `url(${todo})`
    }


    return (
        <div id={'projects'} className={style.projectsBlock}>
            <div className={`${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={socialImg} title={'Social Network'}
                             description={'qqqqqq qqqqqqq qqqqqq qqqqqqqq qqqqqq qqqqq qqqqq'}/>
                    <Project style={todoImg} title={'Todo List'} description={'qqqqqq qqqqqqq qqqqqq q'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
