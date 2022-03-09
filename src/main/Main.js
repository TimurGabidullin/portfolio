import React from "react";
import style from './Main.module.scss';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={`${style.mainContainer}`}>
                <div className={style.greeting}>
                    <span>Hi There</span>
                    <h1>I am Timur <span>Gabidullin</span></h1>
                    <span>Frontend Developer</span>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    );

}

export default Main;
