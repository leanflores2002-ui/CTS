import React from 'react';
import { Scale, Shield, Eye, Users, Briefcase, Camera, AlertTriangle, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import SafeImage from './SafeImage';

const KeyTopicsSection = () => {
  const topics = [
    {
      icon: Scale,
      title: 'Sesgo y Equidad',
      description: 'Detecci?n y correcci?n de sesgos algor?tmicos en modelos de IA',
      content:
        'Los sistemas de IA pueden reproducir prejuicios presentes en los datos y en las decisiones humanas. Por eso necesitamos detectar, medir y corregir esos sesgos para garantizar que las decisiones sean equitativas sin importar raza, g?nero, edad o condici?n socioecon?mica.',
      image: 'https://images.unsplash.com/photo-1607074245269-848539fe3335?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Shield,
      title: 'Privacidad y Protecci?n de Datos',
      description: 'Protecci?n de datos personales frente al uso masivo de IA',
      content:
        'La IA exige grandes vol?menes de datos personales y multiplica los riesgos de exposici?n. Por eso es clave aplicar aprendizaje federado, privacidad diferencial o cifrado homom?rfico, y mantener pol?ticas claras que respeten GDPR y el principio de minimizaci?n.',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Eye,
      title: 'Transparencia y Explicabilidad',
      description: 'Comprender c?mo los modelos opacos toman decisiones',
      content:
        'El car?cter opaco de muchos modelos impide entender por qu? se rechaza un cr?dito o se diagnostica una enfermedad. La explicabilidad busca hacer visible ese proceso y devolver a las personas el derecho a comprender el impacto de la IA sobre su vida.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Users,
      title: 'Responsabilidad y Rendici?n de Cuentas',
      description: 'Establecer marcos de responsabilidad para sistemas aut?nomos',
      content:
        'Cuando un sistema causa da?o es necesario rastrear la cadena de responsabilidad entre desarrolladores, organizaciones implementadoras y usuarios. Las normas, auditor?as y supervisi?n continua fortalecen la rendici?n de cuentas antes y despu?s del despliegue.',
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Briefcase,
      title: 'Impacto Laboral y Social',
      description: 'Consecuencias de la automatizaci?n en el empleo y la sociedad',
      content:
        'La automatizaci?n redistribuye tareas: desplaza ocupaciones rutinarias y crea nichos nuevos. Son necesarias pol?ticas de transici?n, reentrenamiento y redes de protecci?n para que los beneficios de la IA se distribuyan con equidad.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Camera,
      title: 'Vigilancia y Control',
      description: 'Balance entre seguridad y derechos civiles',
      content:
        'Herramientas como el reconocimiento facial permiten vigilancia masiva y tensionan libertades civiles. Hace falta acordar l?mites democr?ticos, transparencia institucional y controles legales que eviten abusos.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: AlertTriangle,
      title: 'Deepfakes y Desinformaci?n',
      description: 'Combatir la manipulaci?n medi?tica generada por IA',
      content:
        'Los deepfakes y contenidos sint?ticos erosionan la confianza en la informaci?n p?blica. Se necesitan herramientas de detecci?n, marcos legales contra usos maliciosos y alfabetizaci?n cr?tica para reconocer se?ales de manipulaci?n.',
      image: 'https://images.unsplash.com/photo-1595666944516-bbb485958fb5?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Cpu,
      title: 'Sistemas Aut?nomos',
      description: '?tica de la toma de decisiones automatizada',
      content:
        'Desde veh?culos sin conductor hasta sistemas letales, los sistemas aut?nomos deben operar con supervisi?n humana, directivas ?ticas claras y prohibiciones donde se comprometan derechos fundamentales.',
      image: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?auto=format&fit=crop&w=1000&q=80'
    }
  ];


  return (
    <section id="temas-claves" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Temas Claves
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explorando los principios fundamentales y desafíos éticos en el desarrollo de la inteligencia artificial
          </p>
        </div>

        <div className="grid gap-8 mb-16" data-stagger>
          {topics.slice(0, 4).map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Card key={index} data-reveal className="reveal reveal-up border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-slate-100 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-serif text-slate-900 mb-2">
                        {topic.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">
                        {topic.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <p className="text-slate-700 leading-relaxed">{topic.content}</p>
                    </div>
                    <div className="md:col-span-1">
                      <SafeImage
                        src={topic.image}
                        alt={topic.title}
                        loading="lazy"
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-6">
            Temas Adicionales
          </h3>
          <Accordion type="single" collapsible className="space-y-4" data-stagger>
            {topics.slice(4).map((topic, index) => {
              const Icon = topic.icon;
              return (
                <AccordionItem
                  key={index + 4}
                  value={`item-${index + 4}`}
                  data-reveal
                  className="reveal reveal-up border border-slate-200 px-6"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-slate-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-slate-700" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-serif font-semibold text-slate-900">
                          {topic.title}
                        </h4>
                        <p className="text-sm text-slate-600">{topic.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <p className="text-slate-700 leading-relaxed">{topic.content}</p>
                      </div>
                      <div className="md:col-span-1">
                        <SafeImage
                          src={topic.image}
                          alt={topic.title}
                          loading="lazy"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default KeyTopicsSection;
