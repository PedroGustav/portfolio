import styled, { keyframes } from "styled-components";
import ReactLogo from "../assets/react-logo.png";

const fadeIn =keyframes`
    0%{
        opacity: 0;
        transform: translateX(-20%);
    }
    50%{
        opacity: 0;
        transform: translateX(-20%);
    }
    to{
        opacity: 1;
        transform: translateX(0);
    }
`

const fade = keyframes`
    0%{
        opacity: 0;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`;
export const Container = styled.div`  
    display: flex;
    flex-direction: column;
`;

export const TextOrange = styled.b`
    color: var(--orange);

    &::selection{
        background-color: var(--orange) !important;
        color: var(--white) !important;
    }
`;

export const Presentation = styled.section`
    display: flex;
    flex-direction: column;
    padding: 5rem 0;
    height: 100vh;
    position: relative;
    animation: ${fade} 1s;
    .welcome-message{
        text-transform: uppercase;
        font-size: var(--fz-2);
        animation: ${fadeIn} 1.5s ease-in-out 0s;
    }

    h1{
        text-transform: uppercase;
        font-size: var(--fz-5);
        line-height: 129px;
        animation: ${fadeIn} 2s ease-in-out 0s;
    }

    .presentation{
        font-size: var(--fz-1);
        justify-self: flex-end;
        animation: ${fadeIn} 2.5s ease-in-out 0s;
    }

    background-image: url(${ReactLogo});
    background-repeat: no-repeat;
    background-position: bottom right;

    .networks{
        position: absolute;
        display: flex;
        column-gap: 60px;
        left:500px;
        top: 210px;
        animation: ${fade} 3s;
        

        .network{
            transition: all 1s;
        }
        .network:hover{
            transform: translateY(-20%);
        }
    }
`; 

export const Projects = styled.section`
    min-height: 100vh;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .title-section{
        display: flex;
        flex-direction: column;
        align-items: center;
        strong{
            text-transform: uppercase;
            font-size: var(--fz-2);
        }
        h1{
            text-transform: uppercase;
            font-size: var(--fz-3);
            line-height: 80px;
        }
        span{
                font-size: var(--fz-1);

        }
    }

    .projects-area{
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-top: 8rem;
        flex-wrap: wrap;
    }

`;

export const Project = styled.article`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items:center;
    padding: 1rem;
    max-width: 460px;
    max-height: 421px;
    overflow-y: hidden;
    transition: all 1s;


    &:hover img, &:hover .title{
        transform: translateY(-10%);
        opacity: 0;
    }

    &:hover .description{
        transform: translateY(-100%);
        opacity: 1;
    }

    &:hover .first{
        transform: translateY(-85%) !important;
        opacity: 1;
    }
    img{
        transition: all 1s;
        max-width: 320px;
    }
    .title{
        transition: all 1s;
        margin-top: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: fit-content;
        /* padding-bottom: 75px; */
        span{
            text-align: center;
            font-size: 1rem;
            color: var(--orange);
            text-transform: uppercase;
            font-weight: var(--font-weight-regular);
        }

        strong{
            text-transform: uppercase;
            font-size: 2.75rem;
            text-align: center;
        }
    }

    .description{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-height: 421px;
        transition: all 1s;
        opacity: 0;
        padding: 1rem;
        background-color: #191919;
        h2{
            color: var(--orange);
            margin-bottom: 1rem;
        }
        p{
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
        .repo-link{
            text-decoration: none;
            color: var(--white);
            background-color: var(--orange);
            padding: 8px 16px;
            margin-top: 8px;
            text-align: center;
        }
    }

`;


export const Contact = styled.section``;