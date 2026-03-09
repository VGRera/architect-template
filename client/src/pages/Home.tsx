import { motion } from "framer-motion";
import { ArrowRight, Compass, Ruler, Building2 } from "lucide-react";
import { Link } from "wouter";

// Import images
import img1 from "@assets/images-3_1772808244730.jpg";
import img2 from "@assets/images-6_1772808244730.jpg";
import img3 from "@assets/images-4_1772808244732.jpg";
import img4 from "@assets/images-1_1772808244731.jpg";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-12 pb-24 blueprint-grid">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block border border-primary px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6 bg-background">
                Atelier d'Architecture
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-8">
                ESPACES <br />
                <span className="text-stroke text-background">À VIVRE.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                RESPIRO accompagne vos projets de construction et de rénovation avec soin et créativité. 
                De la demande de permis à la réalisation finale.
              </p>
              <Link href="/projets" className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
                  Découvrir nos projets
                  <ArrowRight size={18} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Decorative architectural elements */}
              <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-primary/20 -mt-8 -mr-8" />
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary/20 -mb-8 -ml-8" />
              
              <div className="grid grid-cols-2 gap-4 p-8 relative">
                {/* Crosshair decorators */}
                <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-primary/40" />
                <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-primary/40" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-primary/40" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-primary/40" />

                <img src={img1} alt="Projet Architecture" className="w-full h-48 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                <img src={img2} alt="Intérieur Design" className="w-full h-48 object-cover mt-12 grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Big background text */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-5 z-0 select-none flex justify-center">
          <span className="text-[20vw] font-display font-black whitespace-nowrap">RESPIRO</span>
        </div>
      </section>

      {/* Services Rapides (New Section) */}
      <section className="py-16 border-b architect-line-bottom">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {[
               { number: "01", title: "Esquisse", desc: "Analyse et premières intentions" },
               { number: "02", title: "Permis", desc: "Dossier administratif complet" },
               { number: "03", title: "Chantier", desc: "Suivi et coordination" },
               { number: "04", title: "Réception", desc: "Livraison de votre projet" }
             ].map((step, i) => (
               <div key={i} className="flex flex-col gap-2">
                 <span className="text-sm font-bold text-muted-foreground">{step.number} —</span>
                 <h4 className="font-display font-bold text-lg">{step.title}</h4>
                 <p className="text-sm text-muted-foreground">{step.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Manifeste / Intro */}
      <section className="py-24 bg-primary text-primary-foreground architect-line-bottom">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Compass className="w-12 h-12 mx-auto mb-8 opacity-50" />
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight mb-8">
              "Que vous souhaitiez construire la maison de vos rêves ou transformer votre espace actuel, nos architectes vous guident à chaque étape."
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
              Notre atelier d'architecture conçoit des solutions sur mesure, alliant fonctionnalité et esthétique, pour répondre à vos besoins spécifiques. Avec RESPIRO, profitez d'un accompagnement humain et d'une expertise reconnue pour donner vie à vos idées.
            </p>
            <Link href="/atelier" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary-foreground/30 pb-1 hover:border-primary-foreground transition-colors">
                L'Atelier en détail
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Notre Expertise</h2>
            <p className="text-muted-foreground max-w-md">De la conception à la remise des clés, nous assurons une maîtrise complète de votre projet.</p>
          </div>
          <Link href="/expertise" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-muted-foreground transition-colors mt-6 md:mt-0">
              Toutes nos expertises
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {[
            {
              icon: Ruler,
              title: "Conception & Plans",
              desc: "Études de faisabilité, esquisses et modélisation 3D pour visualiser votre futur espace."
            },
            {
              icon: Building2,
              title: "Permis & Démarches",
              desc: "Prise en charge intégrale du dossier de permis de construire et des autorisations administratives."
            },
            {
              icon: Compass,
              title: "Suivi de Chantier",
              desc: "Coordination des artisans et suivi rigoureux de l'exécution jusqu'à la livraison finale."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-border p-8 hover:bg-muted/30 transition-colors architect-line-left pl-8 relative"
            >
              <item.icon className="w-10 h-10 mb-6 text-primary" strokeWidth={1.5} />
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Section: Vision */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">L'espace comme lieu de vie</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chez RESPIRO, nous considérons que chaque projet est unique car chaque mode de vie l'est. Nous concevons des lieux qui respirent, où la lumière naturelle circule librement et où les espaces s'adaptent à vos usages.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous privilégions des matériaux pérennes, respectueux de l'environnement, et une mise en œuvre soignée pour des réalisations qui traversent le temps avec élégance.
            </p>
          </motion.div>
        </div>
        <div className="flex-1 relative">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
           >
             <div className="aspect-[4/3] bg-muted relative">
               <img src={img4} alt="Détail architectural" className="w-full h-full object-cover grayscale" />
               <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-primary border-t-0 border-r-0 z-[-1]"></div>
               <div className="absolute -top-6 -right-6 w-32 h-32 border-2 border-primary border-b-0 border-l-0 z-[-1]"></div>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Ce qu'ils disent de nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "L'équipe de RESPIRO a su parfaitement comprendre nos attentes. La maison correspond exactement à ce que nous avions imaginé, avec une touche d'originalité en plus.",
                author: "Sophie & Marc",
                project: "Rénovation Pierre"
              },
              {
                text: "Un accompagnement sans faille du début à la fin. Le suivi de chantier a été d'une grande rigueur, nous avons pu vivre notre projet sereinement.",
                author: "Laurent D.",
                project: "Maison & Piscine"
              },
              {
                text: "L'optimisation de l'espace dans notre appartement parisien est incroyable. La lumière circule, tout est pensé pour faciliter le quotidien.",
                author: "Camille T.",
                project: "Loft Lumineux"
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-primary-foreground/5 p-8 border border-primary-foreground/20 relative"
              >
                <div className="text-4xl text-primary-foreground/20 font-display font-black absolute top-4 left-4">"</div>
                <p className="text-lg mb-8 relative z-10 leading-relaxed italic">{testimonial.text}</p>
                <div className="border-t border-primary-foreground/20 pt-4">
                  <p className="font-bold font-display">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/70 uppercase tracking-widest">{testimonial.project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Small Grid */}
      <section className="py-24 bg-muted/20 border-y blueprint-dots">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Projets Récents</h2>
            <p className="text-muted-foreground">Découvrez une sélection de nos réalisations.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[img1, img2, img3, img4].map((src, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-square overflow-hidden bg-muted"
              >
                <img 
                  src={src} 
                  alt={`Projet ${i+1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold uppercase tracking-widest text-xs border border-primary-foreground px-4 py-2">
                    Voir
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/projets" className="inline-flex items-center gap-3 bg-background border border-primary text-primary px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
                Voir la galerie complète
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}