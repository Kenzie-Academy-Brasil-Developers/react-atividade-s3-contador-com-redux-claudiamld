import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: #4cc9f0;

    h1{
        color: #ffffff;
        font-size: 48px;
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        

        button + button{
            margin-left: 30px;
        }

        button{
            width: 50px;
            height: 40px;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            background-color: #d9ed92;
            cursor: pointer;
            font-size: 20px;
            color: #1d3557;
            :hover{
                background-color: #caffbf;
            }
        }
    }
`