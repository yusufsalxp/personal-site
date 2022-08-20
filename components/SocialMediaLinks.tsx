import styled from 'styled-components';
import GithubIcon from '../assets/github-icon.svg';
import LinkedIcon from '../assets/linkedin-icon.svg';
import TwitterIcon from '../assets/twitter-icon.svg';
import YoutubeIcon from '../assets/youtube-icon.svg';

const IconContainer = styled.a`
    margin-left: 16px;
`;
const Container = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const _ = () => <Container>
    <IconContainer href='https://github.com/JosephShall'>
        <GithubIcon />
    </IconContainer>
    <IconContainer href='https://github.com/JosephShall'>
        <YoutubeIcon />
    </IconContainer>
    <IconContainer href='https://twitter.com/yusuf_salll'>
        <TwitterIcon />
    </IconContainer>
    <IconContainer href='https://www.linkedin.com/in/josephshall/'>
        <LinkedIcon />
    </IconContainer>
</Container>

export default _;