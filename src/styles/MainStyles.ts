// @ts-ignore
import styled from 'styled-components';

export const PostCardContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
width:60rem;
margin:.5rem;



border:1px solid black
`;

export const PCustom = styled.p`
cursor:pointer;
width:10rem;
text-align:right;
margin-right:3rem;
:hover{
color:blue;
text-decoration:underline;

}


`;

export const CommentsContainer = styled.div`
display:flex;
padding-top: 3rem;
flex-direction: column;
justify-content: center;
align-items: center;
width:50rem;
margin:.5rem;

border:1px solid black
`;

export const FormStyled = styled.form`
background-color: green;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 25rem;
height:30rem;
border:2px solid grey;
`;

export const FormContent = styled.div`
display:flex;
width: 20rem;
height:20rem;
flex-direction: column;
justify-content: flex-start;
border:2px solid white;
background:lightpink;
padding:.5rem;
`;

export const InputCustom = styled.input`
height:1.5rem;

`;

export const MainMenuContainer = styled.div`
padding:3rem;
display:flex;
flex-direction: column;
align-items:center;
justify-content: center;

`;

export const CustomBtn = styled.button`
background:green;
width:7rem;
height:1.5rem;
padding:0;
border:0;
cursor:pointer;
color:white;
margin: 1rem 0 0;
justify-self:flex-end;
:hover {
opacity:.7;
}
`;

export const MainContainer = styled.div`
width:100%;
height:100%
`;

export const ImageCustom = styled.img`
margin-top: 1rem;
max-width: 100px;
max-height:100px;
border:1px solid black;
`;

export const PictureInput = styled.div`
display:flex;
flex-direction: column;


`;
