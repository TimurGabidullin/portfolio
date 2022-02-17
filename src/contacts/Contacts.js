import React from "react";
import style from './Contacts.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            {/*<div className={`${styleContainer.container} ${style.contactsContainer}`}>*/}
            <div className={`${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form action="#" className={style.contacts}>
                    <input placeholder={'Name'}/>
                    <input placeholder={'E-mail'}/>
                    <textarea placeholder={'Your message'}></textarea>

                    <button type={"submit"}>SEND MESSAGE</button>

                </form>
                {/*<button>SEND MESSAGE</button>*/}
            </div>
        </div>
    );
}

export default Contacts;
