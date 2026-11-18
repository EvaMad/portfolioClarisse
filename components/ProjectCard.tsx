import Link from "next/link";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  year: number;
}

export default function ProjectCard({
  id,
  title,
  description,
  category,
  year,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
        {/* Image Placeholder */}
        <div className="relative h-72 bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-colors duration-300 flex items-center justify-center">
            <div className="text-center">
              <div className="text-gray-700 font-semibold text-lg mb-2">
                {title}
              </div>
              <div className="text-gray-600 text-sm">{year}</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white group-hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              {category}
            </span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <span className="text-sm text-gray-500">{year}</span>
            <span className="text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
              Voir plus →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
