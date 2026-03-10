import { motion } from "framer-motion";
import { PenTool, Key, CheckSquare, ClipboardList, TreePine, PaintBucket } from "lucide-react";

export default function Expertise() {
  const expertise = [
    {
      icon: PenTool,
      title: "Conception Contextuelle",
      desc: "Au-delà de la page blanche. Nous interprétons les données du site, du programme et de la réglementation pour concevoir une réponse architecturale unique et poétique."
    },
    {
      icon: ClipboardList,
      title: "Faisabilité & Accompagnement",
      desc: "Analyse approfondie de l'enveloppe budgétaire, du patrimoine existant et de la réglementation locale. Nous questionnons les besoins et ouvrons des perspectives nouvelles."
    },
    {
      icon: CheckSquare,
      title: "Démarches Administratives",
      desc: "Constitution intégrale des dossiers de Permis de Construire et Déclarations Préalables. Gestion des échanges avec les autorités et suivi du dossier administratif."
    },
    {
      icon: Key,
      title: "Direction de Projet",
      desc: "Chef d'orchestre du chantier, nous coordonnons tous les intervenants et veillons au respect de la vision architecturale. Suivi rigoureux jusqu'à la livraison."
    },
    {
      icon: PaintBucket,
      title: "Détail & Matérialité",
      desc: "Développement des détails constructifs qui révèlent les qualités du projet. Sélection des matériaux pérennes et sincères pour une réalisation durable."
    },
    {
      icon: TreePine,
      title: "Patrimoine & Pérennité",
      desc: "Réflexion sur l'évolutivité des espaces et leur intégration urbaine. Nous créons des patrimoines architecturaux qui traversent le temps avec élégance."
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
          <h1 className="text-5xl md:text-6xl font-display font-black mb-6">DOMAINES DE COMPÉTENCE</h1>
          <div className="w-24 h-1 bg-primary mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Une approche pluridisciplinaire guidée par l'interprétation contextuelle, la sincérité matérielle et la création d'un patrimoine pérenne. De l'analyse initiale à la réalisation, chaque phase construit la qualité du projet.
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
            <h2 className="text-4xl font-display font-bold mb-4">Le Processus de Création</h2>
            <p className="text-muted-foreground">Quatre phases pour transformer une intention en réalité architecturale.</p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "01",
                title: "Le Laboratoire d'Idées",
                detail: "Nous commençons par questionner l'ensemble des paramètres : budget, contexte urbain, réglementation. Cette phase est cruciale pour déterminer la crédibilité du projet et ouvrir des perspectives nouvelles sur l'usage et l'évolution de l'espace."
              },
              {
                phase: "02",
                title: "Créer l'Identité du Projet",
                detail: "Sur la base de ces données, nous concevons une réponse architecturale unique. Ce n'est pas un geste gratuit, mais une œuvre sincère, contextuelle et philosophique, révélant les qualités du site et répondant aux besoins spécifiques."
              },
              {
                phase: "03",
                title: "Développer & Détailler",
                detail: "Cette phase établit les fondations de la construction. Nous développons les règles qui régiront toute la période d'exécution, précisons les matériaux et créons les détails qui révèleront les qualités architecturales du projet."
              },
              {
                phase: "04",
                title: "Réaliser & Concrétiser",
                detail: "En tant que chef d'orchestre du chantier, nous coordonnons tous les intervenants et veillons au respect de la vision initiale. C'est au travers d'un dialogue constructif que nous maîtrisons les adaptations et la qualité finale du projet."
              }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-l-4 border-primary pl-8 py-4 relative"
              >
                <div className="absolute -left-[14px] top-8 w-6 h-6 bg-primary rounded-full" />
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">{step.phase}</div>
                <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-3xl">{step.detail}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Questions Fréquentes</h2>
            <p className="text-muted-foreground">Tout ce que vous devez savoir avant de démarrer votre projet.</p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {[
              {
                q: "Comment débute une collaboration ?",
                a: "Nous commençons par une rencontre approfondie au cours de laquelle nous écoutons vos envies, visitons le site et discutons de votre enveloppe budgétaire. Cette phase de dialogue nous permet de comprendre vos besoins avant de proposer une approche adaptée."
              },
              {
                q: "Quel est le rôle exact de l'architecte ?",
                a: "L'architecte est un interprète du contexte et un créateur de qualité. Notre rôle est de transformer les contraintes (site, budget, réglementation) en une opportunité créative, en concevant des espaces qui allient fonction, beauté et durabilité."
              },
              {
                q: "Comment garantissez-vous la qualité finale ?",
                a: "Par une rigueur de détail à chaque étape. Nous développons les règles qui régiront la construction, précisons les matériaux et créons les détails constructifs. Sur le chantier, notre présence assure le respect de la vision initiale et de la qualité prévue."
              },
              {
                q: "Que signifie 'sincérité matérielle' ?",
                a: "C'est notre conviction que chaque matériau doit être utilisé pour ses véritables qualités, sans déguisement. Une pierre doit être pierre, un bois doit être bois. Cette sincérité garantit une architecture pérenne, honnête et intemporelle."
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
          <h2 className="text-3xl font-display font-bold mb-6">Parlons de votre projet</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Une première rencontre pour explorer vos intentions, visiter le site et déterminer ensemble la meilleure approche pour concrétiser votre vision.
          </p>
          <a href="mailto:contact@respiro-architecture.fr" className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary/90 transition-colors">
            Prendre rendez-vous
          </a>
        </motion.div>
      </div>
    </div>
  );
}