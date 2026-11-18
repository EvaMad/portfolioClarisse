"use client";

import { Mail } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const skills = [
    {
      category: "Conception",
      items: ["AutoCAD", "Revit", "SketchUp", "BIM"],
    },
    {
      category: "Visualisation",
      items: ["V-Ray", "Lumion", "Adobe Creative Suite"],
    },
    {
      category: "Domaines",
      items: [
        "Architecture bâtiment",
        "Design durable",
        "Conception urbaine",
        "Restauration",
      ],
    },
    {
      category: "Compétences",
      items: [
        "Gestion de projet",
        "Représentation 3D",
        "Réglementation",
        "Travail d'équipe",
      ],
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Diplôme d'Architecte",
      description:
        "Obtention du diplôme d'études en architecture après 5 ans de formation intensive.",
    },
    {
      year: "2023",
      title: "Stage en Cabinet d'Architecture",
      description:
        "Expérience pratique sur plusieurs projets de grande envergure avec un cabinet reconnu.",
    },
    {
      year: "2022",
      title: "Spécialisation en Design Durable",
      description:
        "Formation spécialisée en architecture écologique et constructions durables.",
    },
    {
      year: "2021",
      title: "Semestre à l'Étranger",
      description:
        "Échange académique permettant d'explorer différentes approches architecturales.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h1 className="text-7xl font-bold text-stone-900 mt-6">Architecte & Créatif</h1>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-lg text-stone-700 mb-6 leading-relaxed font-light">
                Architecte passionné par la création d'espaces modernes, durables et innovants. Après 5 années de formation intensive, je combine rigueur technique, sensibilité artistique et responsabilité environnementale.
              </p>
              <p className="text-base text-stone-600 leading-relaxed font-light">
                Chaque projet est une opportunité de transformer les défis en solutions créatives qui marquent les esprits et améliorent la qualité de vie.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "5+", label: "Années d'études" },
                { number: "20+", label: "Projets réalisés" },
                { number: "10+", label: "Clients satisfaits" },
                { number: "∞", label: "Passions" }
              ].map((stat, i) => (
                <div key={i} className="p-8 border border-stone-200 hover:border-amber-700 hover:shadow-lg transition-all bg-stone-50/30">
                  <div className="text-3xl font-black text-amber-700 mb-3">{stat.number}</div>
                  <p className="text-xs text-stone-600 tracking-widest uppercase font-light">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-stone-50 py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl font-bold text-stone-900 mt-6">Parcours</h2>
          </div>

          <div className="space-y-16 max-w-3xl">
            {timeline.map((event, index) => (
              <div key={index} className="flex gap-12 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white font-black text-sm">
                    {event.year.slice(-2)}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-stone-900 to-stone-200 mt-4"></div>
                  )}
                </div>
                <div className="pb-8 pt-2">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-stone-600 font-light leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl font-bold text-stone-900 mt-6">Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-8 border border-stone-200 hover:border-amber-700 hover:shadow-lg transition-all group bg-stone-50/50">
                <h3 className="text-sm font-black text-stone-900 mb-6 group-hover:text-amber-700 transition-colors tracking-widest uppercase">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-stone-900"></span>
                      <span className="text-stone-600 text-sm font-light">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-stone-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl font-bold text-stone-900 mt-8 mb-8">
            Collaborons
          </h2>
          <p className="text-lg text-stone-600 mb-12 leading-relaxed font-light">
            Contactez-moi pour discuter de votre prochain projet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <a
              href="mailto:votre.email@example.com"
              className="px-12 py-5 bg-stone-900 hover:bg-stone-800 text-white font-light tracking-widest uppercase text-sm transition-all duration-300"
            >
              M'envoyer un email
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 font-light tracking-widest uppercase text-sm transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
