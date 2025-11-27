import React, { useEffect, useState } from 'react';
import { BookOpen, Users, FileText, Globe, Video } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Link } from 'react-router-dom';
import { initAnimations } from '@/lib/animations/animations';

const ResourcesSection = () => {
  const resources = {
    papers: [
      {
        title: 'Recomendaci?n sobre la ?tica de la IA',
        authors: 'UNESCO',
        year: '2021',
        description: 'Principios globales para una IA ?tica aprobados por 193 Estados miembros.',
        link: 'https://unesdoc.unesco.org/ark:/48223/pf0000381137_spa'
      },
      {
        title: 'Reglamento (UE) sobre IA (AI Act)',
        authors: 'Parlamento y Consejo de la UE',
        year: '2024',
        description: 'Texto oficial en espa?ol del Reglamento de IA de la Uni?n Europea.',
        link: 'https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32024R1689'
      },
      {
        title: 'RGPD ? Reglamento General de Protecci?n de Datos',
        authors: 'Uni?n Europea',
        year: '2016',
        description: 'Reglamento europeo fundamental para el tratamiento de datos personales en sistemas de IA.',
        link: 'https://eur-lex.europa.eu/legal-content/ES/TXT/PDF/?uri=CELEX:32016R0679'
      },
      {
        title: 'Gu?a de Evaluaci?n de Impacto (EIPD) RGPD',
        authors: 'AEPD (Espa?a)',
        year: '2019',
        description: 'Gu?a pr?ctica de la Agencia Espa?ola de Protecci?n de Datos para realizar evaluaciones de impacto.',
        link: 'https://www.aepd.es/sites/default/files/2019-09/guia-evaluacion-de-impacto-rgpd.pdf'
      },
      {
        title: 'Gu?a de Anonimizaci??n de Datos Personales',
        authors: 'AEPD (Espa?a)',
        year: '2019',
        description: 'Buenas pr?cticas para anonimizar conjuntos de datos utilizados por sistemas de IA.',
        link: 'https://www.aepd.es/sites/default/files/2019-10/guia-anonimizacion-datos-personales.pdf'
      },
      {
        title: 'Carta de Derechos Digitales (Espa?a)',
        authors: 'Gobierno de Espa?a',
        year: '2021',
        description: 'Referente espa?ol sobre derechos y principios en el entorno digital, relevante para la IA.',
        link: 'https://www.lamoncloa.gob.es/presidente/actividades/Documents/2021/140721-Carta_Derechos_Digitales_RedEs.pdf'
      },
      {
        title: 'Principios de la OCDE sobre IA',
        authors: 'OCDE',
        year: '2019',
        description: 'Principios internacionales para promover una IA responsable en gobiernos y empresas.',
        link: 'https://oecd.ai/es/ai-principles'
      },
      {
        title: 'Libro Blanco sobre la IA ? Enfoque europeo',
        authors: 'Comisi?n Europea',
        year: '2020',
        description: 'Propuestas para impulsar una IA confiable, centrada en el ser humano, en Europa.',
        link: 'https://ec.europa.eu/info/sites/default/files/commission-white-paper-artificial-intelligence-feb2020_es.pdf'
      }
    ],
    organizations: [
      {
        name: 'AESIA ? Agencia Espa?ola de Supervisi?n de la IA',
        description: 'Agencia espa?ola encargada de supervisar y promover una IA confiable.',
        focus: 'Supervisi?n y gobernanza',
        link: 'https://www.aesia.gob.es/'
      },
      {
        name: 'UNESCO ? ?tica de la IA',
        description: 'Iniciativa global para impulsar marcos ?ticos y capacidades en IA.',
        focus: '?tica y educaci?n',
        link: 'https://www.unesco.org/es/artificial-intelligence/ethics'
      },
      {
        name: 'ODISEIA',
        description: 'Observatorio del impacto social y ?tico de la IA en Espa?a.',
        focus: 'Impacto social y principios',
        link: 'https://odiseia.org/'
      },
      {
        name: 'Fundaci?n ?ticas',
        description: 'Organizaci?n que impulsa auditor?as algor?tmicas y evaluaciones de impacto.',
        focus: 'Transparencia y auditor?a',
        link: 'https://eticasfoundation.org/es/'
      },
      {
        name: 'OECD.AI',
        description: 'Observatorio de pol?ticas y datos de la OCDE sobre IA responsable.',
        focus: 'Pol?tica p?blica y datos',
        link: 'https://oecd.ai/es/'
      },
      {
        name: 'Partnership on AI',
        description: 'Alianza internacional para desarrollar mejores pr?cticas en IA responsable.',
        focus: 'Buenas pr?cticas y colaboraci?n',
        link: 'https://www.partnershiponai.org/'
      }
    ]
  };


  // En esta versión los enlaces ya vienen en cada item
  const getPaperUrl = (paper) => paper?.link || '#';
  const getOrgUrl = (org) => org?.link || '#';
  
  useEffect(() => {
    try {
      initAnimations({ once: false, stagger: 48 });
    } catch {}
  }, []);

  const [activeTab, setActiveTab] = useState('papers');

  return (
    <section id="recursos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Recursos
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Herramientas, organizaciones y materiales para profundizar en la ética de la inteligencia artificial
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10" data-stagger>
          <Link to="/herramientas" className="block" data-reveal>
            <Card className="reveal reveal-up border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif text-slate-900">Herramientas</CardTitle>
                    <CardDescription className="text-slate-600">Kits y utilidades para evaluar la IA responsable</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
          <Link to="/cursos" className="block" data-reveal>
            <Card className="reveal reveal-up border-slate-200 hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                    <Video className="w-6 h-6 text-slate-700" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif text-slate-900">Cursos</CardTitle>
                    <CardDescription className="text-slate-600">Programas guiados para profundizar en ética y responsabilidad</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </Link>
        </div>

        <div data-reveal className="reveal reveal-up mb-10">
          <div className="w-full rounded-lg shadow-lg overflow-hidden min-h-[240px] md:min-h-[360px]">
            <iframe
              title="TED: La IA hace más importantes nuestras normas morales"
              className="w-full h-[240px] md:h-[360px]"
              src="https://embed.ted.com/talks/zeynep_tufekci_machine_intelligence_makes_human_morals_more_important?language=es&autoplay=1&muted=1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <Tabs
          value={activeTab}
          className="w-full"
          onValueChange={(v) => {
            setActiveTab(v);
            try {
              requestAnimationFrame(() => initAnimations({ once: false, stagger: 48 }));
            } catch {}
          }}
        >
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-3 mb-8">
            <TabsTrigger value="organizations" className="flex items-center space-x-2" aria-label="Organizaciones">
              <Users size={16} />
              <span className="sm:inline">Organizaciones</span>
            </TabsTrigger>
            <TabsTrigger value="papers" className="flex items-center space-x-2" aria-label="Recursos de información">
              <FileText size={16} />
              <span className="sm:inline">Recursos de información</span>
            </TabsTrigger>
            <TabsTrigger value="books" className="flex items-center space-x-2" aria-label="Libros recomendados">
              <BookOpen size={16} />
              <span className="sm:inline">Libros</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="papers" className="space-y-4" data-stagger>
            {activeTab === 'papers' && resources.papers.map((paper, index) => (
              <Card
                key={index}
                data-reveal
                className="reveal reveal-up border-slate-200 cursor-pointer"
                onClick={() => window.open(getPaperUrl(paper), '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.open(getPaperUrl(paper), '_blank', 'noopener,noreferrer'); }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-slate-900">
                    {paper.title}
                  </CardTitle>
                  <CardDescription>
                    {paper.authors} ({paper.year})
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">{paper.description}</p>
                  <a
                    href={getPaperUrl(paper)} target="_blank" rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    Abrir recurso →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="organizations" className="grid md:grid-cols-2 gap-4" data-stagger>
            {activeTab === 'organizations' && resources.organizations.map((org, index) => (
              <Card
                key={index}
                data-reveal
                className="reveal reveal-up border-slate-200 cursor-pointer"
                onClick={() => window.open(getOrgUrl(org), '_blank', 'noopener,noreferrer')}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') window.open(getOrgUrl(org), '_blank', 'noopener,noreferrer'); }}
              >
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-slate-900">
                    {org.name}
                  </CardTitle>
                  <CardDescription>{org.focus}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">{org.description}</p>
                  <a
                    href={getOrgUrl(org)} target="_blank" rel="noopener noreferrer"
                    className="text-slate-900 hover:text-slate-700 font-medium transition-colors"
                  >
                    Visitar sitio web →
                  </a>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Se eliminan Marcos, Herramientas y Cursos para dejar solo las tres mini-pestañas solicitadas */}

          <TabsContent value="books" data-stagger>
            {activeTab === 'books' && (
              <Card className="reveal reveal-up border-slate-200" data-reveal>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif text-slate-900">Libros recomendados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Armas de destrucci?n matem?tica</h4>
                    <p className="text-slate-600 text-sm mb-2">Cathy O'Neil (ed. en espa?ol)</p>
                    <p className="text-slate-700">Investigaci?n sobre c?mo los algoritmos amplifican desigualdades y amenazan la democracia.</p>
                    <a href="https://capitanswing.com/libros/armas-de-destruccion-matematica/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">M?s info ?</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Atlas de la IA</h4>
                    <p className="text-slate-600 text-sm mb-2">Kate Crawford</p>
                    <p className="text-slate-700">Un an?lisis cr?tico de los costos sociales, pol?ticos y ambientales de la expansi?n de la IA.</p>
                    <a href="https://capitanswing.com/libros/atlas-de-la-ia/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">M?s info ?</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">?tica para m?quinas</h4>
                    <p className="text-slate-600 text-sm mb-2">Josu? Ignacio Latorre</p>
                    <p className="text-slate-700">Reflexi?n sobre los valores que deben guiar a los sistemas inteligentes.</p>
                    <a href="https://www.planetadelibros.com/libro-etica-para-maquinas/292706" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">M?s info ?</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Human Compatible (Compatibles con humanos)</h4>
                    <p className="text-slate-600 text-sm mb-2">Stuart Russell</p>
                    <p className="text-slate-700">C?mo alinear la IA con objetivos humanos y reducir riesgos sist?micos.</p>
                    <a href="https://www.alianzaeditorial.es/libro/libros-singulares-ls/human-compatible-stuart-russell-9788491816999/" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">M?s info ?</a>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Privacidad es poder</h4>
                    <p className="text-slate-600 text-sm mb-2">Carissa V?lez</p>
                    <p className="text-slate-700">Una defensa de la privacidad como valor democr?tico frente a la econom?a de datos.</p>
                    <a href="https://www.penguinlibros.com/es/filosofia/287570-libro-privacidad-es-poder-9788418619347" target="_blank" rel="noopener noreferrer" className="text-slate-900 hover:text-slate-700 font-medium">M?s info ?</a>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
};

export default ResourcesSection;
