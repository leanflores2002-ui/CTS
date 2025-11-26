import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Globe, ShieldCheck, FileText } from 'lucide-react';

const caseStudies = [
  {
    title: 'Observatorio Ciudadano de Impacto Ético',
    focus: 'Evaluación de impacto ético',
    summary: 'Un observatorio regional condujo una EIA participativa antes de aprobar un sistema de análisis predictivo en servicios sociales.',
    insights: [
      'Incluyó talleres con comunidades, defensoras de derechos y técnicos.',
      'Detectó riesgos de discriminación indirecta y reorientó los criterios.',
      'Hoy la implementación reporta mayor confianza y participación ciudadana.'
    ],
    icon: FileText
  },
  {
    title: 'Certificación de gobernanza en salud inteligente',
    focus: 'Certificación ética',
    summary: 'Una red hospitalaria obtuvo un sello “AI Trust” tras auditar explicabilidad, privacidad y supervisión humana en sus chatbots.',
    insights: [
      'Auditoría cruzada con universidades verificó métricas de equidad.',
      'Se formalizó un comité de revisión que interviene antes de cada actualización.',
      'Los pacientes ahora reciben explicaciones sobre decisiones médicas asistidas.'
    ],
    icon: ShieldCheck
  },
  {
    title: 'Laboratorio UNESCO de Gobernanza y Sostenibilidad',
    focus: 'Observatorio internacional',
    summary: 'El laboratorio recopiló casos de políticas públicas y generó recomendaciones para alinear IA con sostenibilidad y derechos humanos.',
    insights: [
      'Mapeó 40 países que integran metas de la UNESCO en sus marcos nacionales.',
      'Proporcionó plantillas para auditorías algorítmicas abiertas.',
      'Los resultados influyeron en una declaración regional de supervisión humana.'
    ],
    icon: Globe
  }
];

const CaseStudiesSection = () => {
  return (
    <section id="casos-estudio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Casos de estudio en acción
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Historias reales de evaluaciones de impacto ético, certificaciones y observatorios que aplican los ejes UNESCO.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((caseStudy) => {
            const Icon = caseStudy.icon;
            return (
              <Card key={caseStudy.title} className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow" data-reveal>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <CardTitle className="text-2xl font-serif text-slate-900 mb-0">
                        {caseStudy.title}
                      </CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {caseStudy.focus}
                    </Badge>
                  </div>
                  <p className="text-slate-600">{caseStudy.summary}</p>
                </CardHeader>
                <CardContent className="text-slate-600">
                  <ul className="list-disc list-inside space-y-2">
                    {caseStudy.insights.map((insight) => (
                      <li key={insight}>{insight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
