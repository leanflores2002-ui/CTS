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
      title: 'Reconocimiento Facial y Sesgo Racial',
      category: 'Sesgo Algor?tmico',
      year: '2018-2020',
      summary: 'Investigaciones mostraron tasas de error mucho m?s altas para personas de piel oscura en sistemas comerciales de reconocimiento facial.',
      description:
        'Informes del MIT y Stanford revelaron que varios sistemas comerciales fallaban hasta 34% m?s con mujeres de piel oscura frente a hombres de piel clara. Empresas como Amazon, Microsoft e IBM suspendieron temporalmente ventas a agencias policiales tras cr?ticas. El caso evidencia que sesgos en los datos perpet?an discriminaci?n racial sistem?tica.',
      implications: [
        'Arrestos err?neos derivados de identificaciones imprecisas',
        'Discriminaci?n sistem?tica en sistemas de vigilancia',
        'Desconfianza p?blica en tecnolog?as de IA',
        'Demandas por regulaciones m?s estrictas'
      ],
      lessons: [
        'Necesidad de conjuntos de datos diversos y representativos',
        'Auditor?as independientes antes y durante el despliegue',
        'Transparencia sobre l?mites y tasas de error',
        'Evaluar impactos en comunidades hist?ricamente marginadas'
      ],
      image: 'https://images.unsplash.com/photo-1559137771-536eecb999ab?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      title: 'Veh?culos Aut?nomos: El Dilema Moral',
      category: 'Toma de Decisiones Aut?noma',
      year: '2016-Presente',
      summary: 'Accidentes fatales pusieron sobre la mesa decisiones ?ticas en veh?culos aut?nomos.',
      description:
        'El choque fatal de Uber en Arizona en 2018 y otros incidentes generaron preguntas sobre c?mo programar respuestas cuando el da?o es inevitable o qui?n asume la culpa: fabricante, desarrollador de software o el ?conductor?. El experimento "M?quina Moral" del MIT mostr? que los juicios ?ticos var?an seg?n culturas.',
      implications: [
        'Necesidad de marcos legales claros para establecer responsabilidades',
        'Retos para codificar dilemas morales complejos',
        'Diferencias culturales en valores de decisi?n',
        'Impactos en seguros y regulaciones vehiculares'
      ],
      lessons: [
        'No se puede anticipar cada situaci?n ?tica posible',
        'Mantener supervisi?n humana en sistemas cr?ticos',
        'Exigir transparencia en criterios de decisi?n',
        'Impulsar est?ndares internacionales sobre autonom?a'
      ],
      image: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      title: 'COMPAS: Sesgo en Justicia Predictiva',
      category: 'Justicia y Equidad',
      year: '2016',
      summary: 'COMPAS exhibi? sesgos raciales en decisiones judiciales.',
      description:
        'ProPublica revel? que el algoritmo COMPAS, usado por tribunales para predecir reincidencia, se?alaba falsamente a acusados negros como alto riesgo (45%) con m?s frecuencia que a acusados blancos (23%). Aunque no usaba la raza directamente, variables correlacionadas introduc?an discriminaci?n indirecta, desatando debates sobre IA en los tribunales.',
      implications: [
        'Perpetuaci?n de sesgos sist?micos en el sistema judicial',
        'Cuestionamiento de la supuesta objetividad algor?tmica',
        'Impacto desigual en comunidades de color',
        'Debates sobre debido proceso y derecho a explicaci?n'
      ],
      lessons: [
        'Requerir auditor?as externas en contextos de alto riesgo',
        'Equilibrar equidad con precisi?n estad?stica',
        'Garantizar supervisi?n humana en decisiones de libertad',
        'Vigilar variables correlacionadas y proxies discriminatorios'
      ],
      image: 'https://images.pexels.com/photos/8090125/pexels-photo-8090125.jpeg'
    },
    {
      id: 4,
      title: 'Cambridge Analytica y Manipulaci?n Electoral',
      category: 'Privacidad y Manipulaci?n',
      year: '2018',
      summary: 'Uso no autorizado de datos de millones de usuarios para alimentar campa?as pol?ticas.',
      description:
        'Cambridge Analytica recolect? datos de hasta 87 millones de usuarios de Facebook sin consentimiento expreso y us? perfiles generados por IA para microdirigir campa?as en EE. UU., Reino Unido y otros comicios. El esc?ndalo mostr? c?mo la data personal puede manipular opini?n p?blica y procesos democr?ticos.',
      implications: [
        'Amenaza a la integridad de procesos democr?ticos',
        'Violaciones masivas de privacidad de datos',
        'Manipulaci?n psicol?gica a gran escala',
        'Crisis de confianza en plataformas de redes sociales'
      ],
      lessons: [
        'Regulaci?n urgente sobre el uso de datos personales',
        'Consentimiento informado y transparencia en algoritmos',
        'Responsabilidad de plataformas en proteger a usuarios',
        'Sanciones y supervisi?n efectiva sobre campa?as digitales'
      ],
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 5,
      title: 'IA en Diagn?stico M?dico: Promesas y Riesgos',
      category: 'Salud y Medicina',
      year: '2019-Presente',
      summary: 'Algoritmos muestran alta precisi?n pero plantean desigualdades.',
      description:
        'Modelos de deep learning igualan o superan a radiol?gos en detecci?n de c?ncer y enfermedades oculares, pero funcionan peor con poblaciones subrepresentadas. El algoritmo de UnitedHealth favorec?a a pacientes blancos con necesidades similares. El caso expone riesgos de sesgo y responsabilidad en IA m?dica.',
      implications: [
        'Potencial para ampliar cobertura y precisi?n diagn?stica',
        'Riesgo de agrandar disparidades existentes',
        'Preguntas sobre responsabilidad ante errores cl?nicos',
        'Necesidad de validaci?n rigurosa antes del despliegue'
      ],
      lessons: [
        'Validar modelos en poblaciones diversas',
        'La IA debe complementar, no reemplazar, el juicio m?dico',
        'Exigir transparencia en el funcionamiento de algoritmos',
        'Regulaci?n que equilibre innovaci?n y seguridad del paciente'
      ],
      image: 'https://images.pexels.com/photos/8439076/pexels-photo-8439076.jpeg'
    },
    {
      id: 6,
      title: 'Deepfakes: De Entretenimiento a Amenaza',
      category: 'Desinformaci?n',
      year: '2020-Presente',
      summary: 'Deepfakes ponen en riesgo la integridad de la evidencia audiovisual.',
      description:
        'La tecnolog?a deepfake evolucion? de curiosidad t?cnica a herramienta para desinformaci?n, acoso y fraude. Incluye videos falsos de pol?ticos, pornograf?a no consensuada de celebridades y fraudes empresariales donde criminales imitaron voces de ejecutivos. La facilidad creciente de crear deepfakes plantea desaf?os para verificar autenticidad.',
      implications: [
        'Erosi?n de confianza en evidencia audiovisual',
        'Nuevas formas de acoso y abuso, especialmente contra mujeres',
        'Amenaza a la integridad electoral y el discurso p?blico',
        'Dificultades para la verificaci?n period?stica y judicial'
      ],
      lessons: [
        'Desarrollar tecnolog?as de detecci?n de deepfakes',
        'Promover alfabetizaci?n medi?tica entre la ciudadan?a',
        'Marcos legales que aborden la creaci?n y distribuci?n maliciosas',
        'Medidas de autenticaci?n en plataformas tecnol?gicas'
      ],
      image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5?auto=format&fit=crop&w=1200&q=80'
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
            Análisis profundo de incidentes reales que ilustran desafíos éticos en la implementación de IA
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
                  <span>Leer más</span>
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
                  ×
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
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Descripción Detallada</h4>
                  <p className="text-slate-700 leading-relaxed">{selectedCase.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-3">Implicaciones</h4>
                  <ul className="space-y-2">
                    {selectedCase.implications.map((implication, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-slate-700 mr-2">•</span>
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
                        <span className="text-slate-700 mr-2">•</span>
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
