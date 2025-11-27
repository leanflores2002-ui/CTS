import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight } from 'lucide-react';
import SafeImage from './SafeImage';

const CaseStudiesSection = () => {
  const [selectedCase, setSelectedCase] = useState(null);

  const caseStudies = [
    {
      id: 1,
      title: 'Evaluación de impacto ético en plataformas de salud digital',
      category: 'Evaluaciones éticas',
      year: '2023-2024',
      summary: 'Ministerios de salud y universidades aplicaron una evaluación guiada por la Recomendación UNESCO para detectar sesgos en triage digital.',
      description: 'La UNESCO facilitó una guía de impacto ético que combinó análisis de datos, simulaciones clínicas y talleres comunitarios. El proceso identificó ajustes para garantizar acceso equitativo a la atención primaria, especialmente para usuarios rurales, mujeres y personas mayores.',
      implications: [
        'Reportes públicos de brechas de atención y propuestas de mejora',
        'Ajustes en umbrales para evitar exclusiones por género o ubicación',
        'Mayor confianza ciudadana gracias a canales de retroalimentación inclusivos'
      ],
      lessons: [
        'Integrar a personal clínico y pacientes en los criterios evaluados',
        'Comunicar limitaciones y riesgos en lenguaje accesible',
        'Monitorear y comparar resultados antes y después del despliegue'
      ],
      image: 'https://images.pexels.com/photos/8439076/pexels-photo-8439076.jpeg'
    },
    {
      id: 2,
      title: 'Certificación global de IA responsable',
      category: 'Certificación',
      year: '2024',
      summary: 'Una alianza UNESCO-OECD certificó algoritmos de gestión pública con base en criterios de la Recomendación.',
      description: 'El sello Global AI Responsibility (GAR) evaluó documentación, auditorías y pruebas de impacto de soluciones de contratación pública en América Latina y África, exigiendo transparencia en datos, modelos y gobernanza. Las organizaciones recibieron un plan de mejora continua y divulgación pública de resultados.',
      implications: [
        'Incremento de confianza en licitaciones con IA',
        'Requisitos de reporte obligatorios sobre riesgos y remediaciones',
        'Menor resistencia regulatoria gracias a evidencia trazable'
      ],
      lessons: [
        'Certificar modelos con auditorías internas y externas combinadas',
        'Documentar datasets y gobernanza para facilitar replicabilidad',
        'Ofrecer capacitación y rutas de mejora automática para los equipos certificados'
      ],
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      title: 'Observatorio UNESCO de la Ética de la IA en América Latina',
      category: 'Observatorio UNESCO',
      year: '2021-2025',
      summary: 'Reúne gobiernos, academia y sociedad civil para monitorear cómo se aplican los principios de la Recomendación.',
      description: 'El Observatorio publica dashboards trimestrales que cruzan datos sobre derechos humanos, inclusión y transparencia, generando alertas tempranas y recomendaciones regionales. Sus informes alimentan políticas públicas y fortalecen observatorios locales que replican los mismos ejes.',
      implications: [
        'Protocolos de rendición de cuentas con participación ciudadana',
        'Mapeo de riesgos éticos para municipios y regiones',
        'Capacitación masiva en supervisión humana y documentación de procesos'
      ],
      lessons: [
        'Mantener canales abiertos con comunidades afectadas y audiencias locales',
        'Traducir principios UNESCO en herramientas prácticas y contextuales',
        'Documentar avances para replicar observatorios en otras regiones'
      ],
      image: 'https://images.unsplash.com/photo-1559137771-536eecb999ab?auto=format&fit=crop&w=1200&q=80'
    }
  ];


  return (
    <section id="casos-estudio" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Casos de Estudio
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            AnÃ¡lisis profundo de incidentes reales que ilustran desafÃ­os Ã©ticos en la implementaciÃ³n de IA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-stagger>
          {caseStudies.map((caseStudy) => (
            <Card
              key={caseStudy.id}
              data-reveal
              className="reveal reveal-up cursor-pointer hover:shadow-lg transition-shadow border-slate-200"
              onClick={() => setSelectedCase(caseStudy)}
            >
              <SafeImage
                src={caseStudy.image}
                alt={caseStudy.title}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {caseStudy.category}
                  </Badge>
                  <span className="text-xs text-slate-500">{caseStudy.year}</span>
                </div>
                <CardTitle className="text-xl font-serif text-slate-900">
                  {caseStudy.title}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {caseStudy.summary}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <button className="flex items-center text-slate-700 hover:text-slate-900 font-medium transition-colors">
                  <span>Leer mÃ¡s</span>
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedCase && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Badge variant="secondary">{selectedCase.category}</Badge>
                    <span className="text-sm text-slate-500">{selectedCase.year}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-slate-900">
                    {selectedCase.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="text-slate-500 hover:text-slate-900 text-2xl leading-none"
                >
                  Ã—
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <SafeImage
                  src={selectedCase.image}
                  alt={selectedCase.title}
                  loading="lazy"
                  className="w-full h-64 object-cover"
                />
                
                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Resumen</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCase.summary}</p>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">DescripciÃ³n Detallada</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCase.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Implicaciones</h4>
                  <ul className="space-y-2">
                    {selectedCase.implications.map((implication, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-slate-700 mr-2">â€¢</span>
                        <span className="text-slate-700">{implication}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Lecciones Aprendidas</h4>
                  <ul className="space-y-2">
                    {selectedCase.lessons.map((lesson, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-slate-700 mr-2">â€¢</span>
                        <span className="text-slate-700">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
