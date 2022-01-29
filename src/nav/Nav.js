import React from "react";
import style from './Nav.module.scss';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Scills</a>
            <a href="">Projects</a>
            <a href="">Contacts</a>
        </div>
    );
}

export default Nav;
