"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError("Veuillez remplir tous les champs");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || "Erreur lors de l'envoi du message");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Erreur lors de l'envoi du message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-7xl font-bold text-stone-900 mt-8 mb-8">
            Parlons ensemble
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-light">
            Vous avez un projet intéressant ? Je serais ravi de discuter de vos idées et de voir comment je peux vous aider.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Mail, title: "Email", value: "evamadani@hotmail.fr", href: "mailto:evamadani@hotmail.fr" },
              { icon: Phone, title: "Téléphone", value: "+33 (0)1 23 45 67 89", href: "tel:+33123456789" },
              { icon: MapPin, title: "Localisation", value: "Paris, France", href: "https://maps.google.com" }
            ].map((info, i) => (
              <a
                key={i}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-8 border border-stone-200 hover:border-amber-700 hover:shadow-lg transition-all group bg-white"
              >
                <div className="bg-stone-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-900 group-hover:text-white transition-all">
                  <info.icon size={20} />
                </div>
                <h3 className="text-sm font-bold text-stone-900 mb-2 tracking-widest uppercase">{info.title}</h3>
                <p className="text-stone-600 font-light group-hover:text-amber-700 transition-colors">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl font-bold text-stone-900 mt-6 mb-6">Envoyez un message</h2>
            <p className="text-stone-600 font-light">Je répondrai dans les 24 heures.</p>
          </div>

          {error && (
            <div className="mb-8 p-6 bg-red-50 border border-red-300 flex gap-3">
              <div className="text-red-700 font-black text-2xl">✕</div>
              <div>
                <p className="font-bold text-red-900 tracking-widest uppercase text-sm">Erreur</p>
                <p className="text-red-700 text-sm mt-1 font-light">{error}</p>
              </div>
            </div>
          )}

          {submitted && (
            <div className="mb-8 p-6 bg-green-50 border border-green-300 flex gap-3">
              <div className="text-green-700 font-black text-2xl">✓</div>
              <div>
                <p className="font-bold text-green-900 tracking-widest uppercase text-sm">Merci !</p>
                <p className="text-green-700 text-sm mt-1 font-light">Votre message a été envoyé. Je vous recontacterai rapidement.</p>
              </div>
            </div>
          )}

          <form 
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div>
              <label className="block text-xs font-black text-stone-900 mb-4 tracking-widest uppercase">
                Nom complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
                className="w-full px-6 py-4 border border-stone-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all font-light"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-stone-900 mb-4 tracking-widest uppercase">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre.email@example.com"
                required
                className="w-full px-6 py-4 border border-stone-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all font-light"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-stone-900 mb-4 tracking-widest uppercase">
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet de votre message"
                required
                className="w-full px-6 py-4 border border-stone-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all font-light"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-stone-900 mb-4 tracking-widest uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Parlez-moi de votre projet..."
                required
                className="w-full px-6 py-4 border border-stone-300 hover:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all resize-none font-light"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-stone-900 hover:bg-stone-800 disabled:bg-stone-500 text-white font-light tracking-widest uppercase text-sm py-5 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Send size={18} />
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-stone-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mt-8 mb-12">Connectons-nous</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-white hover:bg-white hover:text-stone-900 font-light tracking-widest uppercase text-sm transition-all duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-white hover:bg-white hover:text-stone-900 font-light tracking-widest uppercase text-sm transition-all duration-300"
            >
              Instagram
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border-2 border-white hover:bg-white hover:text-stone-900 font-light tracking-widest uppercase text-sm transition-all duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
