import React from "react";
import style from './Main.module.scss';

function Main() {
    return (
        <div className={style.mainBlock}>
            {/*<div className={`${styleContainer.container} ${style.mainContainer}`}>*/}
            <div className={`${style.mainContainer}`}>
                <div className={style.text}>
                    <span className={style.spanText}>Hi There</span>
                    <h1>I am Timur Gabidullin</h1>
                    <p className={style.prof}>Frontend Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );

}

export default Main;
