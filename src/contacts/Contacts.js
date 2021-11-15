import React from "react";
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form action="#" className={style.contacts}>
                    <input/>
                    <input/>
                    <textarea></textarea>
                </form>
                <button>send</button>
            </div>
        </div>
    );
}

export default Contacts;
