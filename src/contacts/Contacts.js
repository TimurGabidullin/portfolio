import React from "react";
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${style.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form action="#" className={style.contacts}>
                    <input placeholder={'Name'}/>
                    <input placeholder={'E-mail'}/>
                    <textarea placeholder={'Your message'}></textarea>
                    <button type={"submit"}>SEND MESSAGE</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;
