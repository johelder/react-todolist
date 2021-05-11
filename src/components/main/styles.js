import styled from 'styled-components'

export const Container = styled.div`
    max-width: 800px;
    margin: auto;

    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    background-color: white;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    margin-top: 10rem;
    padding: 6rem;

    h1 {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: #2d88ff;
        margin-bottom: 2rem;
        font-size: 2.4rem;
    }
`

export const Form = styled.form`

    width: 100%;
    display: flex;

    input {
        height: 4rem;
        width: 100%;
        margin: 0 auto;

        border: none;
        outline: none;

        &:focus {
            border-bottom: 2px solid #2d88ff;
        }

        &::placeholder {
            font-size: 1.6rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: #2d88ff;
        }
    }

`

export const Button = styled.button.attrs({
    type: 'submit'
})`
    width: 10%;
    font-size: 1.8rem;
    color: #04d361;
    background: none;
    border: 2px solid #04d361;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: .2s linear;
    margin-left: 2rem;
    &:hover {
        background-color: #04d361;
        color: #fff;
    }

    svg {
        
    }
`

export const TodoList = styled.ul`
    list-style: none;
    width: 100%;
    margin-top: 4rem;

    li {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: 1.6rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: #333;
            padding-top: 1rem;
        }

        & + li {
            border-top: 1px solid #eee;

            margin: 2rem 0;
        }

        Button {
            border: none;
            color: #b0423e;

            &:hover {
                background: none;
                color: red;
            }
        }
        
    }
`