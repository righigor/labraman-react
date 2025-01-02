import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroIcon() {
  const { t } = useTranslation();
  return (
<div className="relative w-full h-screen bg-hero">
  <div className="absolute inset-0 bg-cover bg-center"></div>
  <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-black"></div>
  <motion.div
    className="absolute top-1/4 mx-6 md:w-1/2 md:left-[40%] lg:w-1/3 lg:top-[45%] lg:left-[60%] transform bg-background p-8 rounded"
    initial={{ opacity: 0, x: 0, y: 100 }}
    animate={{ opacity: 1, x: 0, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl font-title font-bold">LabRaman</h1>
    <p className="mt-4 text-lg font-body">{t("lab_raman")}</p>
    <motion.button
      className="mt-6 px-4 py-2 bg-white border text-black rounded hover:bg-gray-200 transition"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {t("saiba_mais")}
    </motion.button>
  </motion.div>
</div>
  );
}

// <div className='absolute top-2/3 left-2/3 transform -translate-x-1/3 -translate-y-1/3 bg-background p-4 rounded'>
//   <h1 className='text-4xl font-title text-text'>LabRaman</h1>
//   <p className='text-text'>Laboratório de Espectroscopia Raman </p>

// </div>
