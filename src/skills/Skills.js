import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>

                    <Skill title={'Js'} description={'qqqqqq qqqqqqq qqqqqq qqqqqqqq qqqqqq qqqqq qqqqq'}/>
                    <Skill title={'Css'} description={'qqqqqq qqqqqqq qqqqqq q'}/>
                    <Skill title={'React'} description={'qqqqqq qqqqqqq qqqqqq qqqqqqqq qqqqqq q'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;
