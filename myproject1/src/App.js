import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'



export default () => {
  let Wrapper = props => <div class = "wrapper">{props.children}</div>
  return (
    <Wrapper>
      <Header />
      <Main />
      <Footer />
    </Wrapper>);
};


