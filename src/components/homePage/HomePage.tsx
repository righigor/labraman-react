import HeroIcon from "../heroIcon/HeroIcon";
import divBar from '../../assets/fundo/espectro_raman_separador.svg';
import HomeHistoria from "../historia/HomeHistoria";
import EquipeHome from "../equipe/EquipeHome";
import EquipamentosHome from "../equipamentos/EquipamentosHome";
import ArtigosHome from "../artigos/ArtigosHome";

export default function HomePage() {
  return (
    <main>
      <HeroIcon />
      <HomeHistoria />
      <EquipeHome />
      <img src={divBar} alt="divisor" className="w-full bg-black" />
      <EquipamentosHome />
      <ArtigosHome />
    </main>
  );
}
