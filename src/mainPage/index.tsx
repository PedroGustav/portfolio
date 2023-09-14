import { Contact, Container, Presentation, Project, Projects, TextOrange } from "./style";
import File from "../assets/icons/file.svg";
import Github from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import CV from "../assets/files/Currículo Front-end.pdf";
import OppineMockup from "../assets/mockups/oppine-mockup.png";
export function MainPage(){
    return(
        <Container>

            <Presentation>
                <span className="welcome-message">
                    Olá, eu sou o Pedro    
                </span>
                <h1>
                    <TextOrange>React</TextOrange><br />
                    Developer
                </h1>
                <span className="presentation">
                    Tenho 21 anos, sou <TextOrange>desenvolverdor React</TextOrange><br/>
                    com <TextOrange>3 anos de experiência</TextOrange>
                </span>
                <div className="networks">
                    <a href="https://github.com/PedroGustav" target="_blank" className="network">
                        <img className="svg" src={Github} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/ppedrogustavo/" target="_blank" className="network">
                        <img src={Linkedin} alt="" />
                    </a>
                    <a href={CV} download='Curriculo de Pedro Gustavo' className="network">
                        <img src={File} alt="" />
                    </a>
                </div>
            </Presentation>
            
            <Projects>
                <div className="title-section">
                    <strong>Alguns dos</strong>
                    <h1>Meus <TextOrange>Projetos</TextOrange></h1>
                    <span>tem mais no Github!</span>
                </div>


                <div className="projects-area">
                    <Project>
                            <img src={OppineMockup} alt="Oppine" />
                        <div className="title">
                            <span>Estudo de React e Node</span>
                            <strong>Rede social</strong>
                        </div>
                        <div className="description first">
                            <h2>Oppine</h2>
                            <p>
                                O Oppine foi o primeiro projeto que desenvolvi na carreira,
                                mesmo antes de ingressar no mercado de trabalho.<br/>
                                <br></br>
                                Nesse projeto coloquei em prática os conhecimentos adquiridos 
                                nos meus estudos, validando a aprendizagem, e aplicando os 
                                conceitos de forma prática.
                            </p>

                            <a href="#" target="_blank" className="repo-link">Link do repositório</a>
                        </div>
                    </Project>
                    <Project>
                            <img src={OppineMockup} alt="Oppine" />
                        <div className="title">
                            <span>Estudo de React e Node</span>
                            <strong>Sistema de <br/>agendamentos</strong>
                        </div>
                        <div className="description">
                            <h2>Oppine</h2>
                            <p>
                                O Oppine foi o primeiro projeto que desenvolvi na carreira,
                                mesmo antes de ingressar no mercado de trabalho.<br/>
                                <br></br>
                                Nesse projeto coloquei em prática os conhecimentos adquiridos 
                                nos meus estudos, validando a aprendizagem, e aplicando os 
                                conceitos de forma prática.
                            </p>

                            <a href="#" target="_blank" className="repo-link">Link do repositório</a>
                        </div>
                    </Project>
                    <Project>
                            <img src={OppineMockup} alt="Oppine" />
                        <div className="title">
                            <span>Estudo de HTML,CSS e Javascript</span>
                            <strong>Gerador de <br/> Cifra</strong>
                        </div>
                        <div className="description">
                            <h2>Oppine</h2>
                            <p>
                                O Oppine foi o primeiro projeto que desenvolvi na carreira,
                                mesmo antes de ingressar no mercado de trabalho.<br/>
                                <br></br>
                                Nesse projeto coloquei em prática os conhecimentos adquiridos 
                                nos meus estudos, validando a aprendizagem, e aplicando os 
                                conceitos de forma prática.
                            </p>

                            <a href="#" target="_blank" className="repo-link">Link do repositório</a>
                        </div>
                    </Project>
                </div>
            </Projects>
            
            <Contact>
            </Contact>
        </Container>
    )
}