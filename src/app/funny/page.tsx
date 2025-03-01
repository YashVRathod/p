"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SorryPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const newX = Math.random() * 300 - 150; // Random X position (-150 to 150)
    const newY = Math.random() * 300 - 150; // Random Y position (-150 to 150)
    setPosition({ x: newX, y: newY });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-red-600 mb-4">I am so sorry! 😿</h1>

      {/* Crying Cat GIF */}
      <img
        src="/p/me.jpeg"
        alt="Crying Cat"
        className="w-64 h-64 rounded-lg shadow-lg"
      />

      <p className="mt-4 text-lg text-gray-700">
        Ata pn ragat ye ka hass ki nalayaka
      </p>
      <p>If you don't love me then click the button</p>
      <a
          href="/memo"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          You love me
        </a>
      {/* Moving Button */}
      <motion.button
        onMouseEnter={moveButton} // Moves when hovered
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 100 }}
        className="absolute px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        NO
      </motion.button>
      <a
          href="/loveyou"
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Yes
        </a>
    </div>
  );
};

export default SorryPage;
