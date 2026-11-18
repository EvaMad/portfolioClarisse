"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { ChevronDown } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  year: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Centre Commercial Moderne",
    description:
      "Conception d'un centre commercial intégrant les dernières normes d'efficacité énergétique et d'accessibilité.",
    category: "Commercial",
    year: 2024,
  },
  {
    id: 2,
    title: "Résidence Résidentielle",
    description:
      "Projet de 120 logements avec espaces verts communs et toiture végétalisée.",
    category: "Résidentiel",
    year: 2024,
  },
  {
    id: 3,
    title: "Bâtiment Administratif Durable",
    description:
      "Bureau certifié LEED avec façade intelligente et panneaux solaires intégrés.",
    category: "Administratif",
    year: 2023,
  },
  {
    id: 4,
    title: "Musée d'Art Contemporain",
    description:
      "Galerie d'exposition avec architecture épurée et jeux de lumière naturelle.",
    category: "Culturel",
    year: 2023,
  },
  {
    id: 5,
    title: "Campus Universitaire",
    description:
      "Aménagement complet d'un campus avec auditoriums, bibliothèques et résidences étudiantes.",
    category: "Éducation",
    year: 2022,
  },
];

type Category = "Tous" | "Commercial" | "Résidentiel" | "Administratif" | "Culturel" | "Éducation";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("Tous");

  const categories: Category[] = [
    "Tous",
    "Commercial",
    "Résidentiel",
    "Administratif",
    "Culturel",
    "Éducation",
  ];

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Mes Projets</h1>
          <p className="text-xl text-gray-300">
            Découvrez une sélection de mes réalisations architecturales
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Projet personnel en tête ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Parlons de vos idées et de comment je peux les concrétiser.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white hover:bg-gray-100 text-blue-600 font-semibold rounded-lg transition-colors"
          >
            Me contacter
          </a>
        </div>
      </section>
    </div>
  );
}
