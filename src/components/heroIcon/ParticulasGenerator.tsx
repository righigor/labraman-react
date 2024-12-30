import React from "react";
import { motion } from "framer-motion";

const ParticleBackground: React.FC = () => {
  // Função para gerar partículas com posições, tamanhos e cores aleatórias
  const generateParticles = (count: number) => {
    const particles = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 100; // Posição X em porcentagem
      const y = Math.random() * 100; // Posição Y em porcentagem
      const size = Math.random() * 6 + 2; // Tamanho entre 2px e 8px
      const color =
        Math.random() > 0.5
          ? "rgba(0, 200, 255, 0.6)" // Azul
          : "rgba(180, 80, 255, 0.5)"; // Roxo

      particles.push(
        <motion.circle
          key={i}
          cx={`${x}%`}
          cy={`${y}%`}
          r={size}
          fill={color}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            duration: 3 + Math.random() * 2, // Duração aleatória
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      );
    }
    return particles;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      className="absolute inset-0 pointer-events-none"
    >
      {generateParticles(50)} {/* Gere 50 partículas */}
    </svg>
  );
};

export default ParticleBackground;
