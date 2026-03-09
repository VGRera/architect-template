import { motion } from "framer-motion";
import { PenTool, Key, CheckSquare, ClipboardList, TreePine, PaintBucket } from "lucide-react";

export default function Expertise() {
  const expertise = [
    {
      icon: PenTool,
      title: "Conception Architecturale",
      desc: "Étude du site, analyse de vos besoins, esquisses, modélisation 3D et définition des espaces. Nous donnons forme à vos idées en concevant des plans détaillés."
    },
    {
      icon: ClipboardList,
      title: "Démarches Administratives",
      desc: "Constitution et dépôt des dossiers de Permis de Construire (PC) ou Déclaration Préalable (DP). Nous gérons les échanges avec les mairies et l'urbanisme."
    },
    {
      icon: CheckSquare,
      title: "Appels d'Offres",
      desc: "Rédaction des cahiers des charges (CCTP), consultation des entreprises partenaires et analyse des devis pour garantir le juste prix."
    },
    {
      icon: Key,
      title: "Suivi & Réalisation",
      desc: "Direction de l'exécution des travaux (DET), réunions de chantier régulières et assistance lors de la réception de l'ouvrage jusqu'à la remise des clés."
    },
    {
      icon: PaintBucket,
      title: "Architecture d'Intérieur",
      desc: "Conception de mobilier sur mesure, choix des matériaux, des couleurs et des éclairages pour un intérieur cohérent jusqu'au moindre détail."
    },
    {
      icon: TreePine,
      title: "Rénovation Énergétique",
      desc: "Audit de l'existant et propositions d'améliorations thermiques. Intégration de matériaux biosourcés et de solutions éco-responsables."
    }
  ];

  return (
    <div className="w-full pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6">NOTRE EXPERTISE</h1>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Un accompagnement global, de la première esquisse jusqu'à la livraison.
            Nous structurons notre mission en phases claires pour sécuriser votre projet techniquement, financièrement et esthétiquement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-muted flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <item.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold font-display mb-4">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Process (New Section) */}
        <section className="py-24 border-t architect-line-bottom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Notre Méthodologie</h2>
            <p className="text-muted-foreground">Un processus rigoureux pour garantir le succès de votre projet.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border hidden md:block -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { phase: "Phase 1", title: "Rencontre & Faisabilité", detail: "Visite du site, écoute de vos attentes, définition de l'enveloppe budgétaire." },
                { phase: "Phase 2", title: "Conception", detail: "Esquisses, plans détaillés, permis de construire, choix architecturaux." },
                { phase: "Phase 3", title: "Préparation chantier", detail: "Consultation des entreprises, analyse des devis, planning d'intervention." },
                { phase: "Phase 4", title: "Réalisation", detail: "Suivi des travaux, coordination des artisans, réception de l'ouvrage." },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="bg-background border border-border p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-bold font-display">
                    {i + 1}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{step.phase}</div>
                  <h3 className="font-bold text-lg mb-4">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-muted-foreground">Tout ce que vous devez savoir avant de vous lancer.</p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {[
              {
                q: "Combien coûte une mission d'architecte ?",
                a: "Nos honoraires sont généralement calculés en pourcentage du montant total des travaux (entre 10% et 14% selon la complexité du projet et l'étendue de la mission). Une estimation précise vous est fournie dès l'étude de faisabilité."
              },
              {
                q: "Quelle est la durée moyenne d'un projet ?",
                a: "Pour une rénovation complète ou une construction, comptez généralement entre 8 et 14 mois. Cela inclut les phases de conception (2-3 mois), les démarches administratives (2-4 mois) et la réalisation des travaux (4-8 mois)."
              },
              {
                q: "Dois-je m'occuper des démarches administratives ?",
                a: "Non, notre équipe prend en charge l'intégralité des démarches, de la constitution du dossier jusqu'à l'obtention de votre permis de construire ou déclaration préalable."
              },
              {
                q: "Travaillez-vous avec vos propres artisans ?",
                a: "Nous sommes indépendants mais disposons d'un réseau d'artisans de confiance (maçons, menuisiers, plombiers...) avec qui nous avons l'habitude de travailler. Cependant, vous restez libre de choisir vos propres entreprises si vous le souhaitez."
              }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-border p-6 hover:bg-muted/10 transition-colors"
              >
                <h4 className="font-bold text-lg mb-3 flex gap-4 items-start">
                  <span className="text-primary font-display">Q.</span>
                  {faq.q}
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-8">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-muted/30 border border-border text-center blueprint-grid"
        >
          <h2 className="text-3xl font-display font-bold mb-6">Prêt à démarrer votre projet ?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons ensemble de vos envies. Le premier rendez-vous est l'occasion de découvrir notre méthodologie et d'évaluer la faisabilité de votre projet.
          </p>
          <a href="mailto:contact@respiro-architecture.fr" className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </div>
  );
}