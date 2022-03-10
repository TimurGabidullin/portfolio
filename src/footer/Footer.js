import React from "react";
import style from './Footer.module.scss';



function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${style.footerContainer}`}>

                <h2 className={style.title}>Timur Gabidullin</h2>
                <div className={style.networks}>
                    <div className={style.icon}>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                    </div>
                    <div className={style.icon}>
                        <a href="">
                            <img src="" alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copy}>© 2022 beingeorge, All Rights Reserved.</span>
            </div>
        </div>
    )
        ;
}


export default Footer;
