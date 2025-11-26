import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { BookOpen, FileCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const guides = [
  {
    title: 'Guía UNESCO para evaluaciones de impacto ético (EIA)',
    description: 'Instrumento detallado para mapear riesgos de derechos humanos, inclusión y sostenibilidad antes del despliegue.',
    link: 'https://unesdoc.unesco.org/ark:/48223/pf0000381137_spa',
    icon: BookOpen
  },
  {
    title: 'Plantilla de auditoría algorítmica',
    description: 'Checklist lista para usar: transparencia, privacidad, calidad de datos y responsabilidad institucional.',
    link: 'https://eticasfoundation.org/resource/algoritmic-audit-kit/',
    icon: FileCheck
  },
  {
    title: 'Manual de supervisión humana y gobernanza',
    description: 'Gobiernos y empresas pueden adaptar capítulos sobre rendición de cuentas y comité de ética.',
    link: 'https://www.aesia.gob.es/',
    icon: ShieldCheck
  }
];

const ResourcesSection = () => {
  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Recursos para aplicar los ejes UNESCO
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Guías, plantillas y enlaces clave para realizar EIA, auditorías algorítmicas y conectar con la Recomendación UNESCO.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Card key={guide.title} className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow" data-reveal>
                <CardHeader className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <CardTitle className="text-xl font-serif text-slate-900">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-600 space-y-4">
                  <CardDescription>{guide.description}</CardDescription>
                  <a
                    href={guide.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-medium hover:text-slate-700 transition-colors"
                  >
                    Abrir recurso →
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center bg-slate-900 text-white rounded-2xl p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300 mb-3">Recomendación UNESCO</p>
          <p className="text-2xl font-serif font-semibold max-w-3xl mx-auto">
            Un marco global para la ética de la IA que convoca a estados, sociedad civil y empresas a proteger la dignidad humana.
          </p>
          <a
            data-reveal
            href="https://unesdoc.unesco.org/ark:/48223/pf0000381137_spa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 px-6 py-3 rounded-full bg-white text-slate-900 font-medium hover:bg-slate-100 transition-colors"
          >
            Leer la Recomendación UNESCO
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
