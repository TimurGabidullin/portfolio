import React from "react";
import style from './Title.module.scss';



function Title(props) {
    return (
        <div className={style.title}>
            <h2 className={style.text}>{props.text}</h2>
        </div>

    );
}

export default Title;
