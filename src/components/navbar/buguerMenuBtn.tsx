import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import { MutableRefObject } from 'react';
import animationData from '../../assets/Menu V2/menuV2.json';

interface BurgerMenuProps {
  animationRef: MutableRefObject<LottieRefCurrentProps | null>;
  handleClick: () => void;
}

export default function BurgerMenu({ animationRef, handleClick }: BurgerMenuProps) {

  return (
    <button type="button" onClick={ handleClick } className='md:hidden'>
      <Lottie
        loop={ false }
        autoplay={ false }
        animationData={ animationData }
        rendererSettings={ { preserveAspectRatio: 'xMidYMid slice' } }
        lottieRef={ animationRef }
      />
    </button>
  );
}
