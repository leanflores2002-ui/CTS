import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';

const stats = [
  {
    title: 'Proyectos con auditorías éticas',
    value: '74%',
    description: 'Porcentaje de despliegues críticos que cumplieron auditorías independientes antes del lanzamiento (UNESCO/ITU 2024).',
    progress: 74
  },
  {
    title: 'Países con marcos normativos',
    value: '68 países',
    description: 'Estados que reportan marcos en marcha para gobernanza de IA alineados con recomendaciones éticas.',
    progress: 68
  },
  {
    title: 'Despliegues con supervisión humana activa',
    value: '81%',
    description: 'Sistemas de alto riesgo con responsables humanos en la cadena de toma de decisiones (OWASP/NIST 2024).',
    progress: 81
  },
  {
    title: 'Evaluaciones de impacto completadas',
    value: '53%',
    description: 'Del total de intervenciones públicas, más de la mitad realizaron EIA antes del despliegue (UNESCO 2023).',
    progress: 53
  },
  {
    title: 'Organizaciones con certificación ética',
    value: '42 sellos',
    description: 'Certificaciones como “AI Trust” o “ISO 42001” para frenar sesgos y aumentar explicabilidad.',
    progress: 42
  }
];

const AIStatsSection = () => {
  return (
    <section id="estadisticas" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Estadísticas de implementación ética
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Las métricas muestran cómo los ejes UNESCO se traducen en auditorías, marcos nacionales y evaluaciones concretas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {stats.map((stat) => (
            <Card key={stat.title} className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow" data-reveal>
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-slate-900">{stat.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-4xl font-bold text-slate-900">{stat.value}</div>
                <p className="text-slate-600">{stat.description}</p>
                <Progress value={stat.progress} aria-label={stat.title} className="h-2" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-sm text-slate-500">
          Fuente: UNESCO, ITU, NIST y observatorios nacionales 2023-2024. Los valores reflejan iniciativas públicas y privadas con reportes verificables.
        </div>
      </div>
    </section>
  );
};

export default AIStatsSection;
