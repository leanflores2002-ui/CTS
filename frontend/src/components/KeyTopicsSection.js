import React from 'react';
import { Scale, Shield, Eye, Users, Briefcase, Camera, AlertTriangle, Cpu } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import SafeImage from './SafeImage';

const KeyTopicsSection = () => {
  const topics = [
    {
      icon: Scale,
      title: 'Derechos Humanos',
      description: 'Asegurar dignidad, libertad y no discriminación en cada despliegue de IA',
      content:
        'UNESCO posiciona los derechos humanos como eje central: significa garantizar que acceso, decisiones y respuestas automatizadas no vulneren la libertad de expresión, la igualdad de género ni el derecho a un juicio justo. Incorporar controles de derechos, reparaciones y participación comunitaria fortalece la legitimidad de la IA.',
      image: 'https://images.unsplash.com/photo-1607074245269-848539fe3335?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Users,
      title: 'Inclusión',
      description: 'Diseñar IA que refleje y atienda a todas las comunidades',
      content:
        'El eje de inclusión busca cerrar brechas: implica acceso equitativo a datos, infraestructuras, educación y oportunidades generadas por IA. Los sistemas deben ser sensibles a contextos culturales, geográficos y de género para evitar reproducir desigualdades, garantizando que los beneficios lleguen a poblaciones históricamente marginadas.',
      image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Eye,
      title: 'Transparencia',
      description: 'Explicaciones claras y trazabilidad en decisiones algorítmicas',
      content:
        'Transparencia implica documentar datos, modelos y procesos de toma de decisión. UNESCO recomienda comunicar limitaciones, supuestos y riesgos a todas las personas afectadas, permitiendo revisiones independientes y aumentando la confianza pública. La IA transparente facilita la supervisión humana y el cumplimiento de estándares éticos.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Shield,
      title: 'Responsabilidad',
      description: 'Establecer cadenas claras de rendición y reparación',
      content:
        'Responsabilidad significa definir quién responde cuando un sistema causa daño, desde desarrolladores hasta decisores públicos. La UNESCO impulsa auditorías, comités de ética y mecanismos de monitoreo continuo para que las organizaciones puedan corregir sesgos, actualizar modelos y rendir cuentas de forma proporcional al riesgo.',
      image: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Camera,
      title: 'Privacidad',
      description: 'Proteger datos personales y derechos digitales en todo momento',
      content:
        'Este eje enfatiza la privacidad desde la recolección hasta la eliminación de datos. La UNESCO recomienda evaluaciones de impacto de privacidad, técnicas como el aprendizaje federado y transparencia sobre usos secundarios, para que la confianza digital se mantenga incluso cuando los sistemas aprenden de vidas privadas.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: AlertTriangle,
      title: 'Sostenibilidad',
      description: 'Medir el impacto ambiental y social de las tecnologías de IA',
      content:
        'La sostenibilidad conecta la IA con los límites planetarios y sociales: se trata de presupuestar consumo energético, reducir dependencia de infraestructuras extractivas y considerar efectos a largo plazo en comunidades. UNESCO recomienda indicadores ambientales y auditorías sociales para evitar que la eficiencia técnica genere externalidades negativas.',
      image: 'https://images.unsplash.com/photo-1694729101068-a2c621f877b4?auto=format&fit=crop&w=1000&q=80'
    },
    {
      icon: Briefcase,
      title: 'Gobernanza',
      description: 'Marcos participativos, inclusivos y multilaterales',
      content:
        'Gobernanza significa establecer reglas compartidas, supervisión humana y participación de personas afectadas. UNESCO propone marcos globales y regionales que combinan legislación, estándares voluntarios y cooperación internacional para anticipar riesgos sin frenar la innovación responsable.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1000&q=80'
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
            Explorando los principios fundamentales y desafÃ­os Ã©ticos en el desarrollo de la inteligencia artificial
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
