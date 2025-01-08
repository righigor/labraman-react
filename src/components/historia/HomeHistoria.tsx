import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomeHistoria() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  const handleScroll = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.3, // Percentual de visibilidade necessário para disparar
    });

    const section = document.querySelector("#my-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  return (
    <section className="w-full h-screen flex justify-center bg-black">
      <div
        className="relative w-full h-[90%] bg-backgroundLight rounded-b-[4rem] flex items-center justify-center will-change-transform will-change-opacity"
      >
        <div
          className="absolute -bottom-3 left-0 right-0 h-8  blur-md opacity-75 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #0000FF, #FF0000)",
          }}
        ></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-12">
          <motion.div
            layout
            id="my-section"
            initial={{ opacity: 0, x: -100, y:0 }}
            animate={
             isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-title text-gray-800 mb-4">
              {t('nossa_historia')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('historia_home')}
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/nossa-historia"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-red-500 text-white font-medium rounded shadow hover:opacity-90 transition"
              >
                {t('leia_mais')}
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            layout
            id="my-section"
            initial={{ opacity: 0, x: -100, y:0 }}
            animate={
             isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
            }
            transition={{ duration: 1 }}
          >

            <img
              src='https://images.unsplash.com/photo-1602052577122-f73b9710adba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt="Foto do Laboratório"
              className="rounded-lg shadow"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
