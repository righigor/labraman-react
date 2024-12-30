import { Link } from "react-router-dom";
import logo from "../../assets/logo-sem-fundo.png";
import NavList from "./NavList";
import BurgerMenu from "./buguerMenuBtn";
import NavSideBar from "./NavSidebar";
import { useState, useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

type DirectionProps = 1 | -1;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const animationRef = useRef<LottieRefCurrentProps>(null);
  const [direction, setDirection] = useState<DirectionProps>(1);

  const handleClick = () => {
    if (animationRef.current) {
      animationRef.current.setDirection(direction);
      animationRef.current.play();
      setDirection(direction === 1 ? -1 : 1);
    }
    toggleMenu();
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 h-16 md:h-20 lg:h-20 bg-black font-title">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Logo LabRaman" className="h-14" />
      </Link>
      <NavList />
      <BurgerMenu handleClick={handleClick} animationRef={animationRef} />
      <NavSideBar isOpen={isOpen} handleClick={handleClick} />
    </header>
  );
}
