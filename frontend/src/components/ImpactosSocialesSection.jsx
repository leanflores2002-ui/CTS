import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    quote: 'Gracias al comité de ética y a la evaluación de impacto, nuestra cooperativa recibió un modelo inclusivo que respeta nuestros idiomas y saberes.',
    author: 'Lina Ríos',
    role: 'Representante de la Comunidad Awajún',
    theme: 'Inclusión'
  },
  {
    quote: 'La auditoría algorítmica demostró que el sistema no filtraba datos sensibles, y eso permitió que familias migrantes pudieran usar servicios de salud seguros.',
    author: 'Dr. Gabriel Ortega',
    role: 'Director médico regional',
    theme: 'Privacidad'
  },
  {
    quote: 'Con supervisión humana constante, el sistema de alerta temprana evitó falsas alarmas y fortaleció la seguridad de vecindarios vulnerables.',
    author: 'Deyanira Calderón',
    role: 'Lideresa vecinal',
    theme: 'Seguridad'
  }
];

const ImpactosSocialesSection = () => {
  return (
    <section id="impactos" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white" data-reveal>
            Impactos sociales al respetar la ética
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-3" data-reveal>
            Comunidades e instituciones comparten cómo la transparencia, la privacidad y la inclusión construyen confianza y resultados tangibles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.author} className="bg-gray-900/70 border border-slate-800 shadow-lg" data-reveal>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-white">{item.theme}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-200 leading-relaxed">“{item.quote}”</p>
                <div className="text-sm text-slate-400">
                  <p className="font-semibold text-white">{item.author}</p>
                  <p>{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Card className="bg-slate-900/70 border border-slate-800 shadow-lg" data-reveal>
            <CardContent>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Inclusión</p>
              <p className="text-3xl font-serif font-bold text-white">47%</p>
              <p className="text-slate-300">más hogares participaron cuando se incorporaron representantes comunitarios en la etapa de diseño.</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/70 border border-slate-800 shadow-lg" data-reveal>
            <CardContent>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Privacidad</p>
              <p className="text-3xl font-serif font-bold text-white">0 incidentes</p>
              <p className="text-slate-300">de filtraciones reportadas luego de aplicar plantillas de auditoría y cifrado diferencial.</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/70 border border-slate-800 shadow-lg" data-reveal>
            <CardContent>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Seguridad</p>
              <p className="text-3xl font-serif font-bold text-white">92%</p>
              <p className="text-slate-300">de las alertas generadas tuvieron validación humana antes de ser comunicadas.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactosSocialesSection;
