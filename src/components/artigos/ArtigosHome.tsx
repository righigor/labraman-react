import useAnimationScroll from "../../hooks/useAnimationScroll";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ArtigosHome() {
  const { t } = useTranslation();
  const isVisible = useAnimationScroll({
    selector: "#my-artImg",
    threshold: 0.3,
  });
  const isVisibleText = useAnimationScroll({
    selector: "#my-artText",
    threshold: 0.3,
  });
  return (
    <section className="w-full h-screen flex items-center bg-black/95 gap-4 overflow-hidden">
      <motion.img
        id="my-artImg"
        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        layout
      />
      <motion.div
        id="my-artText"
        className="w-1/2 h-screen flex flex-col justify-center items-center text-text mr-4"
        initial={{ opacity: 0, x: 100 }}
        animate={isVisibleText ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        layout
      >
        <h2 className="text-3xl font-title text-center mb-8 relative inline-block">
          {t("art_dis_teses")}
          <span className="absolute left-1/2 -bottom-2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-blue-500 to-red-500 rounded"></span>
        </h2>
        <div className="flex flex-col items-center border-4  border-text/90 h-[63%] p-8 rounded">
          <h3 className="text-2xl font-title font-semibold text-center mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-lg text-text/90 mb-12 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit
            maiores veritatis voluptatum sit, sapiente deserunt consectetur
            perspiciatis natus fugiat repellendus corrupti harum neque adipisci,
            quas at voluptate aliquam enim!
          </p>
          <div className="flex gap-4 justify-end items-center w-full">
            <Link
              to="/"
              className="px-4 py-2 bg-backgroundLight text-black rounded hover:bg-red-600 hover:text-text transition pointer duration-500 ease-in-out"
            >
              {t("saiba_mais")}
            </Link>
            <Link
              to="/artigos"
              className="px-4 py-2 bg-backgroundLight text-black rounded hover:bg-blue-600 hover:text-text duration-500 ease-in-out transition"
            >
              {t("todos_artigos_btn")}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
