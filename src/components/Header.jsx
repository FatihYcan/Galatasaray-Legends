// Header.jsx

import gsLogo from "../assets/gs-logo.png";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Header = () => {
  return (
    <Container className="p-3 rounded-4 header" >
      <Image className="logo" src={gsLogo}></Image>
      <h1 className="mt-2 font-monospace display-4 fw-bold">GALATASARAY LEGENDS</h1>
    </Container>
  );
};

export default Header;
