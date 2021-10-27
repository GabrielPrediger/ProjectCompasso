import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex: 3;
    aside{

        background-color: #3f3f3f;
        color: #fff;

        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 88px;

        img {
            max-width: 320px;
        }

        strong {
            font: 700 36px 'Poppins', sans-serif;
            line-height: 42px;
            margin-top: 16px;
            color: #f8f8f8;
        }

        p{
            font-size: 24px;
            line-height: 32px;
            margin-top: 16px;
            color: #f8f8f8;
        }

        h1 {
            font-size: 15px;
            margin: 86px 0 10px;
            color: #f8f8f8;
            font-family: "Poppins", sans-serif;         
        }

        .main-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 320px;
        align-items: stretch;
        text-align: center;

        input {
            padding: 10px;
            border-radius: 8px;
            border: 1px solid rgb(196, 196, 196);
            color: #f8f8f8;
            font: 400 16px 'Roboto', sans-serif;

        }

    }

    .search-user{
        margin-top: 24px;
        height: 50px;
        border-radius: 8px;
        font-weight: 500;
        background: #ea4335;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 0;
        transition: filter 0.2s;
   
        &:hover{
            filter: brightness(0.9);
        }
    }

    .separator{
        font-size: 14px;
        color: #a8a8b3;

        margin: 62px 0;
        display: flex;
        align-items: center;

        &::before{
            content: "";
            flex: 1;
            height: 1px;
            background-color: #a8a8b3;
            margin-right: 16px;
        }

        &::after{
            content: "";
            flex: 1;
            height: 1px;
            background-color: #a8a8b3;
            margin-left: 16px;
        }
    }

    .back-to-site{
        background-color: #a8a8b3;
        border-radius: 8px;    
        height: 50px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: filter 0.2s;

        a {
            text-decoration: none;
            color: #3f3f3f;
        }
        &:hover{
            filter: brightness(0.9);
        }
    }
}`;



