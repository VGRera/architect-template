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
                ARCHITECTURE <br />
                <span className="text-stroke text-background">CONTEXTUÉE.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
                Nous développons des projets sincères, contextuels et philosophiques alliant rigueur économique et qualité architecturale.
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

      {/* Process Phases */}
      <section className="py-20 border-b architect-line-bottom bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-16">
             {[
               {
                 phase: "01",
                 title: "LE LABORATOIRE D'IDÉES",
                 subtitle: "Questionner & Accompagner",
                 desc: "La faisabilité est une étape clé pour appréhender tous les paramètres : enveloppe budgétaire, patrimoine existant, réglementation. Nous accompagnons le développement des besoins et du programme pour ouvrir des questionnements sur des usages nouveaux."
               },
               {
                 phase: "02",
                 title: "CRÉER",
                 subtitle: "L'Identité du Projet",
                 desc: "Nous ne partons jamais d'une page blanche. Le site et le programme client nous guident. Notre art est de manier ces données pour produire une œuvre architecturale qui soit une réponse spécifique à un contexte unique, portée par une dimension poétique."
               },
               {
                 phase: "03",
                 title: "DÉVELOPPER",
                 subtitle: "Approfondir & Détailler",
                 desc: "Cette phase établit les fondations du projet en construction. C'est de la rigueur de ces règles que sera généralement induite la qualité du projet réalisé. Nous menons le projet à maturation en précisant les matériaux et développant les détails."
               },
               {
                 phase: "04",
                 title: "RÉALISER",
                 subtitle: "Le Projet Concrétisé",
                 desc: "L'architecte est le chef d'orchestre de l'opération. Sa position centrale lui permet de déterminer les adaptations les plus judicieuses au cours du chantier. C'est au travers du dialogue que les ajustements seront décidés."
               }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="border-l-2 border-primary pl-8 relative"
               >
                 <div className="absolute -left-[13px] top-0 w-6 h-6 bg-primary rounded-full" />
                 <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.phase}</span>
                 <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-1">{item.title}</h3>
                 <p className="text-sm font-semibold text-primary mb-4">{item.subtitle}</p>
                 <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.desc}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-primary text-primary-foreground architect-line-bottom">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-light leading-tight mb-8">
              "Une grande qualité de l'architecte doit être de bien interpréter les données contextuelles d'un projet, et un de ses rôles primordiaux est de veiller à la qualité des espaces et bâtiments construits."
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-12 max-w-2xl mx-auto">
              La rentabilité financière d'un projet ne doit pas entacher son intégration. Nous avons le devoir de créer un patrimoine pérenne et qualitatif. Nos projets sont sincères, contextuels et philosophiques, alliant aspect économique et excellence architecturale.
            </p>
            <Link href="/atelier" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary-foreground/30 pb-1 hover:border-primary-foreground transition-colors">
                Découvrir notre approche
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Domaines d'Intervention</h2>
            <p className="text-muted-foreground max-w-md">Une approche pluridisciplinaire guidée par la qualité architecturale et la responsabilité environnementale.</p>
          </div>
          <Link href="/expertise" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-muted-foreground transition-colors mt-6 md:mt-0">
              Explorer tous les domaines
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {[
            {
              icon: Building2,
              title: "Logement & Habitat",
              desc: "Maisons individuelles, rénovations patrimoniales, nouvelles façons d'habiter. Chaque projet porte une réflexion sur l'évolutivité et l'appropriation des espaces."
            },
            {
              icon: Ruler,
              title: "Espaces Professionnels",
              desc: "Bureaux, tiers-lieux et espaces collaboratifs. Nous concevons des environnements de travail innovants qui reflètent les valeurs et les pratiques contemporaines."
            },
            {
              icon: Compass,
              title: "Réflexion Urbaine",
              desc: "Aménagement, densification, patrimoine urbain. Notre démarche s'inscrit dans une lecture sensible du contexte et du territoire."
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

      {/* Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-6">La qualité au cœur du projet</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Chaque projet est une opportunité de créer un patrimoine durable. Nous attachons une importance particulière à la qualité des espaces, à leur intégration urbaine et à leur capacité d'adaptation aux évolutions futures.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Notre approche privilégie une sincérité matérielle, un dialogue constant avec le contexte et une vision philosophique du projet. Nous concevons des architectures qui racontent une histoire, celle de leur lieu et de leurs habitants.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              De la faisabilité à la réalisation, chaque décision est guidée par la recherche d'équilibre entre les contraintes économiques et l'excellence architecturale.
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
          <h2 className="text-4xl font-display font-bold mb-16 text-center">Projets en confiance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Une architecture qui nous a permis de mieux vivre. Chaque détail a été pensé, aucun compromis sur la qualité malgré les contraintes du budget.",
                author: "Famille Lemoine",
                project: "Rénovation & Extension"
              },
              {
                text: "L'équipe a su transformer notre vision en une réalité cohérente. Une véritable collaboration du début jusqu'à la réception du chantier.",
                author: "Entreprise TechHub",
                project: "Tiers-lieu de 300m²"
              },
              {
                text: "Au-delà du projet construit, c'est une relation de confiance qui s'est installée. Ils ont été nos guides avisés à chaque étape.",
                author: "Collectif Urbain",
                project: "Aménagement Urbain"
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