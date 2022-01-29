import React from "react";
import style from './Skills.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";


function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Scills'}/>
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
