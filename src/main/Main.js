import React from "react";
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import Fade from "react-reveal/Fade";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

function Main() {

    return (
        <div id={'main'} className={style.mainBlock}>

            {/*Нужно сюда запихнуть Particles*/}

            <Particles
                id="tsparticles"
                className={style.particles}
                params={{
                    fullScreen: {enable: false},
                    fpsLimit: 120,
                    interactivity: {
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40,
                            },
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outMode: "bounce",
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            random: true,
                            value: 5,
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={`${style.mainContainer}`}>
                <Fade bottom>
                    <div className={style.greeting}>
                        <span>Hi There</span>
                        <h1>I am Timur <span>Gabidullin</span></h1>
                        {/*<span>Frontend Developer</span>*/}
                        <ReactTypingEffect className={style.typingText}
                                           text={["Frontend Developer"]}
                        />
                    </div>
                </Fade>
                <Fade right>

                        <div className={style.photo}>
                            <Tilt className="Tilt" options={{max: 25}} >
                            <div className={style.image}></div>
                            </Tilt>
                        </div>



                </Fade>

            </div>
        </div>
    );

}

export default Main;
