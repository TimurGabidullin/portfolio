import React, {useState} from "react";
import style from './BurgerNav.module.scss';
import {Link} from 'react-scroll'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";


function BurgerNav() {

    const [isOpenMenu, setIsOpenMenu] = useState(false)


    return (
        <div className={style.burgerNav}>
            <div
                className={isOpenMenu ? style.burgerNavItems : style.burgerNavItems + ' ' + style.burgerNavItemsClosed}>
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
            }}>
                <FontAwesomeIcon icon={faBars}
                                 size='1x'
                                 color={'#fff'}
                                 transform="down-2.5 right-8"
                />
            </div>
        </div>
    );
}

export default BurgerNav;
