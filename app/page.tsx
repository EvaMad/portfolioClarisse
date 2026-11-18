import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section - Elegant & Minimal */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-stone-50"></div>

        <div className="relative z-10 max-w-6xl mx-auto w-full text-center">
          {/* Number indicator */}

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-stone-900 leading-tight tracking-wide">
            Architecte<br />
            <span className="text-amber-700">Contemporain</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-stone-600 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-light px-4">
            Conception d'espaces modernes et durables qui transforment les environnements et enrichissent les expériences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center px-4">
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-stone-900 hover:bg-stone-800 text-white font-light tracking-widest uppercase text-xs md:text-sm transition-all duration-300"
            >
              Explorer
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border-2 border-stone-900 hover:bg-stone-900 hover:text-white text-stone-900 font-light tracking-widest uppercase text-xs md:text-sm transition-all duration-300"
            >
              Contacter
            </Link>
          </div>

          {/* Stats with elegant spacing */}
          <div className="mt-16 md:mt-24 grid grid-cols-3 gap-6 md:gap-16 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-amber-700 mb-2 md:mb-3">5</div>
              <p className="text-xs text-stone-500 tracking-widest uppercase font-light">Ans d'études</p>
            </div>
            <div className="border-l border-r border-stone-200 px-4 md:px-8">
              <div className="text-3xl md:text-4xl font-black text-amber-700 mb-2 md:mb-3">20</div>
              <p className="text-xs text-stone-500 tracking-widest uppercase font-light">Projets</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-amber-700 mb-2 md:mb-3">∞</div>
              <p className="text-xs text-stone-500 tracking-widest uppercase font-light">Passions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work - Magazine Layout */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mt-6">Travail sélectionné</h2>
          </div>

          <div className="space-y-16 md:space-y-32">
            {[
              { 
                number: "01",
                title: "Siège Commercial", 
                category: "Bureau", 
                year: "2024",
                desc: "Conception d'un bâtiment de bureaux intégrant durabilité et design contemporain"
              },
              { 
                number: "02",
                title: "Résidence Contemporaine", 
                category: "Habitation", 
                year: "2024",
                desc: "Projet résidentiel mêlant architecture moderne et intégration environnementale"
              },
              { 
                number: "03",
                title: "Centre Culturel", 
                category: "Public", 
                year: "2023",
                desc: "Espace public innovant dédié aux arts et à la culture locale"
              },
              { 
                number: "04",
                title: "Développement Urbain", 
                category: "Urbanisme", 
                year: "2023",
                desc: "Masterplan de quartier favorisant mixité et durabilité"
              }
            ].map((project, i) => (
              <Link
                key={i}
                href="/about"
                className="group grid md:grid-cols-2 gap-6 md:gap-12 items-center cursor-pointer"
              >
                {/* Text side */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mt-4 mb-4 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-stone-600 mb-6 font-light leading-relaxed">{project.desc}</p>
                  <div className="flex justify-between items-end text-xs md:text-sm">
                    <span className="text-stone-500 tracking-widest uppercase">{project.category}</span>
                    <span className="text-stone-400">{project.year}</span>
                  </div>
                </div>
                {/* Image side */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative h-64 md:h-96 bg-gradient-to-br from-amber-200 via-stone-200 to-stone-300 overflow-hidden group-hover:shadow-xl transition-shadow">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-stone-400 font-light text-sm md:text-lg text-center px-4">{project.title}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mt-6">Domaines d'expertise</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-20">
            {[
              {
                title: "Conception Architecturale",
                description: "Design innovant et fonctionnel adapté à vos besoins spécifiques, intégrant les dernières pratiques durables."
              },
              {
                title: "Durabilité & Environnement",
                description: "Bâtiments respectueux de l'environnement avec technologies modernes et certifications écologiques."
              },
              {
                title: "Visualisation 3D",
                description: "Rendus photoréalistes et animations pour prévisualiser vos projets avant la construction."
              }
            ].map((service, i) => (
              <div key={i} className="group">
                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-6 mb-4 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-stone-600 font-light leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
