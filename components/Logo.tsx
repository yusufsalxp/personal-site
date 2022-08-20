import styled from 'styled-components';

const LogoComponent = styled.p`
    background: var(--gradient);
    color: var(--gradient);
    font: var(--logo);
	-webkit-background-clip: text;
    background-clip: text;
	-webkit-text-fill-color: transparent;
    overflow: hidden;
    width: 170px;
    line-height: 45px;
    text-align: start;
`;

const Logo = () => <LogoComponent>Yusuf ŞAL</LogoComponent>;


export default Logo;