import React, {useState} from "react";
import style from './BurgerNav.module.scss';
import {Link} from 'react-scroll'

function BurgerNav() {

    const [isOpenMenu, setIsOpenMenu] = useState(false)


    return (
        <div className={style.burgerNav}>
            {/*<div className={style.burgerNavItems}>*/}
            {/*<div className={style.burgerNavItems + ' ' + style.burgerNavItemsClosed}>*/}
            <div className={isOpenMenu?style.burgerNavItems:style.burgerNavItems + ' ' + style.burgerNavItemsClosed}>
                <Link activeClass={style.active}
                      to="main"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}>
                    Main
                </Link>
                <Link activeClass={style.active}
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={2}
                      duration={500}>
                    Skills
                </Link>
                <Link activeClass={style.active}
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={2}
                      duration={500}>
                    Projects
                </Link>
                <Link activeClass={style.active}
                      to="contacts"
                      spy={true}
                      smooth={true}
                      offset={2}
                      duration={500}>
                    Contacts
                </Link>
            </div>
            <div className={style.burgerBtn} onClick={() => {
                setIsOpenMenu(!isOpenMenu);
                console.log(isOpenMenu)
            }}></div>
        </div>
    );
}

export default BurgerNav;
