import HeroIcon from "../../components/heroIcon/HeroIcon";
import divBar from '../../assets/fundo/espectro_raman_separador.svg';
import HomeHistoria from "../../components/historia/HomeHistoria";
// import EquipeHome from "../equipe/EquipeHome";
import EquipamentosHome from "../../components/equipamentos/EquipamentosHome";
import ArtigosHome from "../../components/artigos/ArtigosHome";
import ContatoHome from "../../components/contato/ContatoHome";

export default function HomePage() {
  return (
    <div>
      <HeroIcon />
      <HomeHistoria />
      {/* <EquipeHome /> */}
      <img src={divBar} alt="divisor" className="w-full bg-black" />
      <EquipamentosHome />
      <ArtigosHome />
      <ContatoHome />
    </div>
  );
}
