import { motion } from "framer-motion";
import teamImg from "@assets/d7a35847072c3648_3009-w240-h240-b1-p0--_1772808244729.webp";

export default function Atelier() {
  return (
    <div className="w-full">
      {/* Header section */}
      <section className="pt-20 pb-16 px-6 lg:px-12 max-w-7xl mx-auto border-b architect-line-bottom blueprint-dots">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl md:text-7xl font-display font-black tracking-tight uppercase"
        >
          L'Atelier
        </motion.h1>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg text-muted-foreground"
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Notre Approche</h2>
            <p>
              Nous créons des architectures sincères, contextuelles et philosophiques. Chaque projet est une occasion de démontrer que la rigueur économique et l'excellence architecturale ne sont pas incompatibles.
            </p>
            <p>
              Nos projets ne partent jamais d'une page blanche. Nous partons du site, du programme client et de la réglementation — ces données deviennent nos outils créatifs pour concevoir une réponse unique et adaptée.
            </p>
            <p>
              Du laboratoire d'idées à la réalisation finale, nous accompagnons nos clients avec rigueur et vision. Nous veillons à créer des patrimoines pérennes, des espaces qui respirent et s'adaptent aux évolutions futures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4" />
             <div className="relative bg-background border border-border p-2">
                <img 
                  src={teamImg} 
                  alt="L'équipe RESPIRO" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  style={{ maxHeight: '500px' }}
                />
                <div className="p-4 bg-muted/30 mt-2">
                  <p className="text-sm font-bold uppercase tracking-widest text-center">Les architectes fondateurs</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 border-t architect-line-bottom">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Nos Principes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "L'Interprétation Contextuelle",
              desc: "Nous lisons le site comme un texte riche d'informations. Topographie, histoire, réglementation — tout devient matière créative pour concevoir une architecture ancrée dans son lieu."
            },
            {
              title: "La Sincérité Matérielle",
              desc: "Chaque matériau pour ses véritables qualités. Une pierre doit être pierre, un bois doit être bois. Cette sincérité garantit une architecture honnête qui vieillit avec grâce."
            },
            {
              title: "La Rigueur du Détail",
              desc: "C'est dans les détails que réside la qualité. Du développement des plans à la réalisation, nous soignons chaque intersection, chaque jonction, chaque surface."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-border bg-muted/10 hover:bg-muted/30 transition-colors"
            >
              <h3 className="text-xl font-bold font-display mb-4 text-primary">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* L'Equipe (Team) Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">L'Équipe</h2>
            <p className="text-muted-foreground max-w-md">Des profils complémentaires réunis autour d'une même passion pour l'architecture.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              name: "Sophie Levasseur",
              role: "Architecte DPLG",
              desc: "Co-fondatrice de RESPIRO. Spécialiste de l'analyse contextuelle et de la conception urbaine. Chaque projet est pour elle l'occasion de dialoguer avec le territoire et de créer une architecture qui le révèle."
            },
            {
              name: "Pierre Durand",
              role: "Architecte DPLG",
              desc: "Co-fondateur. Expert en matérialité et détail constructif. Pierre veille à ce que chaque élément soit sincère et que la construction révèle l'intention architecturale."
            },
            {
              name: "Marie Arnould",
              role: "Conductrice de Projets",
              desc: "Cheffe d'orchestre de la réalisation. Marie assure la cohésion entre les phases de conception et de chantier, veillant au respect des visions initiales et de la qualité finale."
            }
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="aspect-[3/4] bg-muted w-full relative mb-4 architect-line-bottom">
                <div className="absolute inset-0 bg-primary/5"></div>
              </div>
              <h3 className="text-2xl font-bold font-display">{member.name}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Numbers / Stats */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: "20+", label: "Années d'expérience" },
              { num: "85", label: "Projets réalisés" },
              { num: "2", label: "Fondateurs" },
              { num: "100%", label: "Contextuel" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-display font-black mb-4 text-stroke text-primary">{stat.num}</div>
                <div className="text-sm uppercase tracking-widest font-medium opacity-80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}