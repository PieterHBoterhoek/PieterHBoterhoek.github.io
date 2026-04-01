import "../css/MyWorkPage.css"
import Arduinogif from "../assets/Arduino.gif"

export default function MyWorkPage() {
    return (
        <>
            <div className="project">
                <div className="project-headline">
                    <div className="ascii-art">
                        &#6158; ██████╗ ██╗   ██╗██╗███████╗████████╗ ██████╗  ██████╗██╗  ██╗████████╗<br />
                        ██╔═══██╗██║   ██║██║╚══███╔╝╚══██╔══╝██╔═══██╗██╔════╝██║  ██║╚══██╔══╝<br />
                        ██║   ██║██║   ██║██║  ███╔╝    ██║   ██║   ██║██║     ███████║   ██║   <br />
                        ██║▄▄ ██║██║   ██║██║ ███╔╝     ██║   ██║   ██║██║     ██╔══██║   ██║   <br />
                        ╚██████╔╝╚██████╔╝██║███████╗   ██║   ╚██████╔╝╚██████╗██║  ██║   ██║   <br />
                        &#6158; ╚══▀▀═╝  ╚═════╝ ╚═╝╚══════╝   ╚═╝    ╚═════╝  ╚═════╝╚═╝  ╚═╝   ╚═╝
                    </div>
                </div>
                <p>Quiztocht is a interactive/educative quizplatform, <br /> designed to give for example museums and zoo's an easy way to implement quizzes.</p>
                <div className="project-links">
                    <p>Learn more about Quiztocht on the <a className="qt-link" href="https://quiztocht.com/" target="_blank">Website</a></p>
                    <p>Or check out our <a className="linkedin-link" href="https://www.linkedin.com/company/quiztocht" target="_blank">Linkedin</a> page</p>
                </div>
            </div>
            <div className="seperator"></div>
            <div>
                <div className="project-headline">
                    <h1>Arduino - Reactietijd test</h1>
                </div>
                <p>For project IOT we had to work with an ESP32, <br /> this is my reactionspeed tester.</p>
                <div className="project-gif">
                    <img src={Arduinogif}></img>
                </div>
                <div className="project-links">
                    <a className="gh-link" href="https://github.com/PieterHBoterhoek/Arduino-Reactietijd-tester" target="_blank">Github repository</a>
                </div>
            </div>
            <div className="seperator"></div>
        </>
    );
}