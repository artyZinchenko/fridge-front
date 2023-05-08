import { createGlobalStyle } from 'styled-components';
import { styled as muiStyled } from '@mui/system';
import { Box } from '@mui/system';
import { Paper } from '@mui/material';

const GlobalStyles = createGlobalStyle`
body {
  background-color: #fafafa;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.white-bg{
  background-color: #fff;
}

.user-img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: contain;
}

a{
  text-decoration: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.flex-column {
  display: flex;
  height: 100%;
  flex-direction: column;
}

.full-width{
  width: 100%;
}

@media (max-width: 30em) {
  .recipes-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2em;
    /* padding-inline: 1em; */
  }
}

@media (min-width: 30em) {
  .recipes-list {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: flex-start;
    align-content: center;
  }
}


@media (max-width:40em) {
  .flex-media {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

}

.flex-gap {
  gap: 0.5em;
}

.full-height {
  height: 100%;
}

.test {
  background-color: red;
}

.center {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media (min-width: 40em){
.modal{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

 .flex-media {
    width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.flex-gap {
  gap: 1em;
}

.modal-content{
outline: none;
  padding-left: 11em;
  width: calc(100% - 11em);
}

.py{
  padding-block: 2em;
}

.px{
  padding-inline: 2em;
}

.gap> *:not(:last-child) {
  padding-bottom: 1em;
}

}

@media (max-width: 40em){
  .flex-media {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

  .modal{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

  .modal-content{
    outline: none;
}

.overflow{
   overflow: auto;
}

  .py{
  padding-block: 1em;
}

  .px{
  padding-inline: 1em;
}

.gap> *:not(:last-child) {
  padding-bottom: 0.5em;
}
}

//TODO: these styles below should be moved towards ther components

.typeImage{
  width: 1.3em;
  height: 1.3em;
}

.expandedImage{
  width: 4em;
  height: 4em;
 } 

`;

export const FlexSpaceBetween = muiStyled(Box)({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
});

export const FlexStart = muiStyled(Box)({
  maxWidth: '100%',
  flexWrap: 'wrap',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '0.4em',
});

export const FlexEnd = muiStyled(Box)({
  width: '80%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '0.4em',
});

export const FlexVertical = muiStyled(Box)({
  width: '100%',
  gap: '0.5em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const BackgroundPaper = muiStyled(Paper)({
  width: '100%',
  height: '100%',
  margin: '10px auto',
  marginBottom: '20px',
  padding: '0',
});

export const CenterChildElement = muiStyled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export default GlobalStyles;
