import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
        </div>

        <h2 className="text-4xl font-bold mb-4">Page Non Trouvée</h2>

        <p className="text-xl text-gray-300 mb-8">
          Oups! La page que vous cherchez n'existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <Home size={20} />
            Retour à l'accueil
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white hover:bg-white/10 text-white font-semibold rounded-lg transition-colors"
          >
            Voir les projets
          </Link>
        </div>
      </div>
    </div>
  );
}
