"use client";

import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative w-full overflow-hidden bg-[#000000] py-2 z-20">
      <motion.div
        initial={{ opacity: 0, scaleX: 0.8 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent shadow-[0_0_20px_rgba(197,160,89,0.8)]"
      />
    </div>
  );
}
