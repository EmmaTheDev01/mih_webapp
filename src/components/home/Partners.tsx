import React from "react";
import { motion } from "framer-motion";
import Section from "../common/Section";

// Import images directly
import jica from "./partners/jica.png";
import risa from "./partners/risa.png";
import minict from "./partners/minict.png";

const partnerLogos = [
  { id: 1, src: jica, alt: "Partner 1" },
  { id: 2, src: risa, alt: "Partner 2" },
  { id: 3, src: minict, alt: "Partner 3" },
];

export default function Partners() {
  const shouldAnimate = partnerLogos.length >= 4;
  const logosToDisplay = shouldAnimate
    ? [...partnerLogos, ...partnerLogos] // duplicate for seamless scrolling
    : partnerLogos;

  return (
    <Section id="partners" className="overflow-hidden">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-secondary"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Partners
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We're proud to collaborate with leading organizations and companies
        </motion.p>
      </div>

      {/* Image container */}
      <div className="w-full flex justify-center">
        <motion.div
          className={`flex items-center space-x-12 ${
            shouldAnimate ? "" : "justify-center"
          }`}
          style={{ overflow: "hidden", maxWidth: "80%" }}
          initial={shouldAnimate ? { x: "100%" } : false}
          animate={shouldAnimate ? { x: "-100%" } : false}
          transition={
            shouldAnimate
              ? {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }
              : undefined
          }
        >
          {logosToDisplay.map((logo, i) => (
            <motion.img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-20 w-auto object-contain"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
