import type { NextPage } from 'next';
import styled from 'styled-components';
import TwitterIcon from '../assets/twitter-icon.svg';

const Button = styled.div`
background-color: aqua;
  color: var(--black);
  font: var(--h1);
  text-align: center;
` 

const Home: NextPage = () => {
  return (
    <Button><TwitterIcon /></Button>
  )
}

export default Home;