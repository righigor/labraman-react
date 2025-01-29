import useAnimationScroll from "../../hooks/useAnimationScroll";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const list = [
  {
    nome: "Microscópio Raman",
    descricao:
      "Ideal para análise espectroscópica de amostras sólidas e líquidas.",
    imagem: "https://via.placeholder.com/300",
  },
  {
    nome: "Laser de Alta Precisão",
    descricao: "Utilizado em experimentos de alta sensibilidade.",
    imagem: "https://via.placeholder.com/300",
  },
  {
    nome: "Espectrômetro de Massa",
    descricao: "Equipamento para análise quantitativa e qualitativa.",
    imagem: "https://via.placeholder.com/300",
  },
];

export default function EquipamentosHome() {
  const { t } = useTranslation();
  const isVisible = useAnimationScroll({
    selector: "#my-cards",
    threshold: 0.4,
  });
  return (
    <section className="flex flex-col items-center justify-center h-screen w-full bg-black">
      <div className="w-full py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl font-title text-text text-center mb-8 relative inline-block">
            {t("nossos_equipamentos")}
            <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-blue-500 to-red-500 rounded"></span>
          </h2>
          <p className="text-lg text-text/90 text-center mb-12">
            {t("equipamentos_home")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {list.map((equipamento, index) => (
              <motion.div
                layout
                id="my-cards"
                key={index}
                className="bg-backgroundLight rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 100 + index * 100 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 100 + index * 50 }
                }
                transition={{ duration: 2 + index * 0.5 }}
              >
                <img
                  src={equipamento.imagem}
                  alt={equipamento.nome}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {equipamento.nome}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {equipamento.descricao}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Botão para Página Completa */}
          <div className="text-center mt-12">
            <Link
              to="/equipamentos"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white text-lg font-medium rounded shadow hover:opacity-90 transition"
            >
              Conheça Todos os Equipamentos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
