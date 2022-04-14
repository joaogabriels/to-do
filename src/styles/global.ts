import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #DCE7E9;
        --red: #e52e4d;
        --grey: #F0F1F5;

        --blue-light: #658BA6;

        --text-title: #444444;
        --text-body: #969cb3;

        --shape: #FFFFFF;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

   // font-size: 16px; por padrão (desktop) 
    html{
        @media (max-width: 1800px) {
            font-size: 93.75% // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
        
        
    }
    //REM = 1rem = 16px

    body{
        background: var(--background);
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        
    }

    h1{
        font-weight: 600;
    }
`