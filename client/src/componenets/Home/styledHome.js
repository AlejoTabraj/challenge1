import  styled  from 'styled-components'

const TitleContainer = styled.div`
    padding: 1em;
`
const ListWrapper = styled.ul`
    margin-bottom: 0.5;
    padding: 5em auto;
    &:hover{
        background-color: lightgray;
    }
    &li{
        text-decoration: none;
    }
`
export {
    TitleContainer,
    ListWrapper
}

