import { Contact, Container, Presentation, Project, Projects, TextOrange } from "./style";

import File from "../assets/icons/file.svg";
import Github from "../assets/icons/github.svg";
import Linkedin from "../assets/icons/linkedin.svg";
import Whatsapp from "../assets/icons/whatsapp.svg";
import Envelope from "../assets/icons/envelope.svg";
import CV from "../assets/files/Currículo Front-end.pdf";

import OppineMockup from "../assets/mockups/oppine-mockup.png";
import NailPlannerMockup from "../assets/mockups/mockup-nail.png";
import CifraMockup from "../assets/mockups/mockup-cifra.png";
export function MainPage(){
    return(
        <Container>

            <Presentation>
                <span className="welcome-message">
                    Olá, eu sou o Pedro    
                </span>
                <h1>
                    <TextOrange>FUll-Stack</TextOrange><br />
                    Developer
                </h1>
                <span className="presentation">
                    Tenho 21 anos, sou <TextOrange>desenvolverdor Full-Stack </TextOrange> 
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

                            <a href="https://github.com/PedroGustav/Oppine-Initial-Idea" target="_blank" className="repo-link">Link do repositório</a>
                        </div> 
                    </Project>
                    <Project>
                            <img src={NailPlannerMockup} alt="Oppine" />
                        <div className="title">
                            <span>Estudo de React e Node</span>
                            <strong>Sistema de <br/>gerenciamento</strong>
                        </div>
                        <div className="description">
                            <h2>Nail Planner</h2>
                            <p>
                                Este projeto nasceu de uma vontade minha de empreender, vendo
                                o crescimento no nicho de Manicures/Nail designers.<br/>
                                <br></br>
                                O sistema abrange desde o momento do contato do cliente, com o agendamento,
                                até a gestão de caixa do salão.
                            </p>

                            <a href="https://nailplanner.com.br" target="_blank" className="repo-link">Acesse o site</a>
                        </div>
                    </Project>
                    <Project>
                            <img src={CifraMockup} alt="Oppine" />
                        <div className="title">
                            <span>Estudo de HTML,CSS e Javascript</span>
                            <strong>Gerador de <br/> Cifra</strong>
                        </div>
                        <div className="description">
                            <h2>Gerador de Cifra</h2>
                            <p>
                                Este projeto surgiu da minha necessidade em resolver o problema
                                de otimização de tempo ao produzir cifras para um grupo musical
                                ao qual faço parte.<br/>
                                <br></br>
                                A ferramenta conta com conversor de tom e gerador de PDF com a
                                Cifra, fazendo com que ela possa ser útil para outras pessoas.
                            </p>

                            <a href="https://github.com/PedroGustav/gerador-cifras" target="_blank" className="repo-link">Link do repositório</a>
                        </div> 
                    </Project>
                </div>
            </Projects>
            
            <Contact>
                <div className="title-section">
                    <strong>Se interessou?</strong>
                    <h1>Fale<br/>comigo</h1>
                    <span>Você pode entrar em <TextOrange>contato</TextOrange> por algum desses canais:</span>
                </div>
                <div className="contact-links">
                    <a href="https://api.whatsapp.com/send?phone=5583981377357&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio!" target="_blank" className="contact">
                        <img src={Whatsapp} alt="Whatsapp" />
                    </a>
                    <a href="https://www.linkedin.com/in/ppedrogustavo/" target="_blank" className="contact">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="mailto:pedrogustavosantosdelima@gmail.com" className="contact">
                        <img src={Envelope} alt="E-mail" />
                    </a>
                </div>
            </Contact>
        </Container>
    )
}