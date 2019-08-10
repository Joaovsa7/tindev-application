import React from 'react'
import { hot } from 'react-hot-loader'
import { createGlobalStyle } from 'styled-components'
import Login from './pages/Login'
import Routes from './routes';

const App = () => {
  const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    };

    html, body, #root {
      height: 100%;
    };

    body {
      background: #f5f5f5;
      font-family: Helvetica, Arial;
    };

    input, button, select {
      border: none;
    }
  `
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  )
}

export default hot(module)(App)
