import { motion } from "framer-motion";

// Import small images carefully to manage quality
import img1 from "@assets/images-3_1772808244730.jpg"; // Exterior stone
import img2 from "@assets/images-6_1772808244730.jpg"; // Interior dining
import img3 from "@assets/images-5_1772808244731.jpg"; // Exterior shower
import img4 from "@assets/images-1_1772808244731.jpg"; // Exterior garden
import img5 from "@assets/images-10_1772808244731.jpg"; // Interior dining dark
import img6 from "@assets/c9c14ff80731d935_7541-w182-h175-b0-p0--_1772808244731.webp"; // Exterior pool
import img7 from "@assets/images-2_1772808244731.jpg"; // Exterior orange chair
import img8 from "@assets/images-4_1772808244732.jpg"; // Interior living
import img9 from "@assets/images-11_1772808244732.jpg"; // Stairs close up
import img10 from "@assets/images-9_1772808244732.jpg"; // Exterior wood facade
import img11 from "@assets/images-7_1772808244732.jpg"; // Interior stairs red chair
import img12 from "@assets/images-8_1772808244732.jpg"; // Circular stairs

export default function Projects() {
  const projects = [
    { src: img1, title: "Rénovation Pierre", category: "Rénovation" },
    { src: img2, title: "Espace de Vie", category: "Aménagement Intérieur" },
    { src: img3, title: "Extension Bois", category: "Construction" },
    { src: img4, title: "Villa Méditerranéenne", category: "Construction" },
    { src: img5, title: "Cuisine Contemporaine", category: "Aménagement Intérieur" },
    { src: img6, title: "Maison & Piscine", category: "Extérieur" },
    { src: img7, title: "Patio Design", category: "Extérieur" },
    { src: img8, title: "Loft Lumineux", category: "Rénovation" },
    { src: img9, title: "Détail Escalier", category: "Menuiserie sur mesure" },
    { src: img10, title: "Façade Bardage", category: "Construction Bois" },
    { src: img11, title: "Restructuration", category: "Rénovation" },
    { src: img12, title: "Escalier Circulaire", category: "Architecture Intérieure" },
  ];

  return (
    <div className="w-full pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6">PROJETS</h1>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Une sélection de nos réalisations récentes. Chaque projet est une réponse unique à un lieu et à des usages spécifiques.
            <br/><br/>
            <span className="text-sm italic opacity-70">
              *Afin de préserver la qualité de visualisation, les images sont présentées dans des formats adaptés.*
            </span>
          </p>
        </motion.div>

        {/* We use a grid with smaller items so the low-res images look better */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4 architect-line-bottom">
                {/* Decorative corner marks */}
                <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-primary/50 z-10" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-primary/50 z-10" />
                
                <img 
                  src={project.src} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  {project.category}
                </p>
                <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}