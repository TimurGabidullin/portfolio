import React from "react";
import style from './Skill.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <div className={style.ic}>
                    <FontAwesomeIcon icon={props.icon}
                                     size='3x'
                                     color={'#4e93e6'}
                                     transform="down-1.5 left-1.5"
                    />
                </div>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Skill;
