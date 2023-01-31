import { createGlobalStyle } from 'styled-components';
import { styled as muiStyled } from '@mui/system';
import { Box } from '@mui/system';
import { Container } from '@mui/system';
import { Button, AccordionSummary, Paper } from '@mui/material';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img{
  width: 100%;
  border-radius: 10px;
}

.typeImage{
  width: 1.3em;
  height: 1.3em;
}

.expandedImage{
  width: 4em;
  height: 4em;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
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
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '0.4em',
});

export const FlexVertical = muiStyled(Box)({
  width: '100%',
  paddingBlock: '1em',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

// export const ImageContainer = muiStyled(Box)({
//   width: '10em',
//   borderRadius: '10px',
//   img: {
//     width: '100%',
//     objectFit: 'contain',
//     objectPosition: 'center',
//   },
// });

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

export const FelxEnd = muiStyled(Box)({
  width: '100%',
  // display: 'flex',
  // flexDirection: 'row',
  // alignItems: 'center',
  // justifyContent: 'flex-end',
});

export default GlobalStyles;
