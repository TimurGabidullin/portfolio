import React from "react";
import style from './Contacts.module.scss';
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";


function Contacts() {
    return (
        <div id={'contacts'} className={style.contactsBlock}>
            <div className={`${style.contactsContainer}`}>
                <Title text={'Contacts'}/>

                <form action="#" className={style.contacts}>
                    <Fade bottom>
                        <input placeholder={'Name'}/>
                        <input placeholder={'E-mail'}/>
                    </Fade>
                    <Fade bottom>
                        <textarea placeholder={'Your message'}></textarea>
                        <button type={"submit"}>SEND MESSAGE</button>
                    </Fade>
                </form>

            </div>
        </div>
    );
}

export default Contacts;
