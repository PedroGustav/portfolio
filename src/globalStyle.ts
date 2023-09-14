import { createGlobalStyle } from "styled-components";
import NoiseEffect from "./assets/noise-texture.png";

export const GlobalStyle = createGlobalStyle`

:root{

    --white: #FFF;
    --dark-grey: #141414;
    --orange: #E05E34;


    --font-family:  "Poppins", sans-serif;
    --font-weight-bold: bold;
    --font-weight-regular: 400;
    --fz-1: 1.5rem;
    --fz-2: 2rem;
    --fz-3: 4rem;
    --fz-4: 5rem;
    --fz-5: 8rem;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: subpixel-antialiased;
}

html{
    font-family: var(--font-family);
    font-weight: var(--font-weight-bold);
}


@media(max-width: 480px){
    html{
        font-size: 10px;
    }
}

@media (min-width: 481px) and (max-width: 767px){
    html{
        font-size: 12px;
    }
}

@media (min-width: 768px) and (max-width: 991px){
    html{
        font-size: 13px;
    }
}

@media (min-width: 992px) and (max-width: 1199px){
    html{
        font-size: 14px;
    }
}

@media (min-width: 1200px) and (max-width: 1919px){
    html{
        font-size: 16px;
    }
}

@media(min-width: 1920px){
    html{
        font-size: 18px;
    }
}

body{   
    padding: 0 6rem;
    background-color: var(--dark-grey);
    color: var(--white);
    position: relative;
    scroll-behavior: smooth;
    
    &::after{
        content: "";
        position: absolute;
        inset: 0 ;
        background-image: url(${NoiseEffect}) ;
        /* background-size: cover;*/
        background-position: bottom;
        z-index: -1;
        opacity: 0.1;
    }
}

span, p, strong, h1{
    &::selection{
        background-color: var(--orange);
        color: (--orange);
    }
}
`;