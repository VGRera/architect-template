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
            <h2 className="text-3xl font-display font-bold text-foreground mb-6">Notre Philosophie</h2>
            <p>
              RESPIRO est né de la volonté de créer des espaces qui respirent, des lieux où l'architecture se met au service de l'humain et de son environnement. Nous concevons chaque projet comme une histoire unique, tissée avec soin et créativité.
            </p>
            <p>
              Notre atelier d'architecture croit profondément que la fonctionnalité ne doit jamais sacrifier l'esthétique, et inversement. Nous recherchons un équilibre parfait, des lignes épurées et des volumes justes.
            </p>
            <p>
              L'accompagnement humain est au cœur de notre démarche. Nous écoutons, nous analysons et nous traduisons vos besoins en solutions spatiales concrètes, durables et inspirantes.
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

      {/* Philosophie detail (New Section) */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 border-t architect-line-bottom">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Nos Convictions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "L'Analyse du Lieu",
              desc: "Chaque projet commence par une observation minutieuse du site : son orientation, son histoire, ses contraintes. L'architecture doit s'insérer naturellement dans son environnement."
            },
            {
              title: "La Matière",
              desc: "Nous accordons une grande importance au choix des matériaux. Leurs textures, leurs couleurs et la façon dont ils vieillissent déterminent l'âme du projet."
            },
            {
              title: "La Lumière",
              desc: "Élément central de notre conception, la lumière sculpte l'espace. Nous travaillons les ouvertures pour créer des jeux d'ombres et valoriser les volumes tout au long de la journée."
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
              name: "Julien Moreau",
              role: "Architecte DPLG - Fondateur",
              desc: "Spécialiste de l'intégration paysagère et de la construction durable. Julien a fondé RESPIRO avec la volonté de remettre le bon sens au cœur de la conception."
            },
            {
              name: "Claire Dubois",
              role: "Architecte d'Intérieur",
              desc: "Experte en optimisation d'espaces et en design mobilier. Claire apporte une attention particulière aux détails, aux textures et à la lumière."
            },
            {
              name: "Thomas Leblanc",
              role: "Conducteur de Travaux",
              desc: "Le garant de la réalisation de vos projets. Thomas assure la coordination des entreprises et veille au respect strict des plannings et des budgets."
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
              { num: "15+", label: "Années d'expérience" },
              { num: "120", label: "Projets réalisés" },
              { num: "3", label: "Architectes associés" },
              { num: "100%", label: "Sur mesure" },
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