import React from "react";
import style from './Footer.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Тимур Габидуллин</h2>
                <div className={style.networks}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span className={style.copy}>&copy; 2021 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
