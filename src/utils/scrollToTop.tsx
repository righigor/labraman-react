import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola para o topo da página
  }, [pathname]); // Executa sempre que o pathname mudar

  return null;
};
