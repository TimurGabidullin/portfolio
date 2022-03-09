import React from "react";
import style from './Skills.module.scss';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import { faJs} from '@fortawesome/free-brands-svg-icons'
import {faFileCode} from "@fortawesome/free-solid-svg-icons/faFileCode";



function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer}`}>
                <Title text={'Scills'}/>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'qqqqqq qqqqqqq qqqqqq qqqqqqqq qqqqqq qqqqq qqqqq'} icon={faJs} />
                    <Skill title={'html & Css'} description={'qqqqqq qqqqqqq qqqqqq q'} icon={faCss3Alt}/>
                    <Skill title={'React'} description={'qqqqqq qqqqqqq qqqqqq qqqqqqqq qqqqqq q'} icon={faReact}/>
                    <Skill title={'html & Css'} description={'qqqqqq qqqqqqq qqqqqq qqqqqqqq qqqqqq q'} icon={faFileCode}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
