import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { Shield, Users, Eye, BadgeCheck, Lock, Leaf, Layers } from 'lucide-react';

const axes = [
  {
    icon: Shield,
    title: 'Derechos humanos',
    statement: 'Garantizar que cada despliegue de IA respete la dignidad, la justicia y los derechos fundamentales de todas las personas.',
    importance: 'Evita discriminaciones sistémicas, protege libertades y sostiene la confianza ciudadana en soluciones inteligentes.'
  },
  {
    icon: Users,
    title: 'Inclusión',
    statement: 'Diseñar procesos participativos y accesibles que integren voces diversas, especialmente de comunidades afectadas.',
    importance: 'Asegura que la IA sea útil para grupos subrepresentados y que nadie quede excluido de beneficios sociales y económicos.'
  },
  {
    icon: Eye,
    title: 'Transparencia',
    statement: 'Explicar cómo funcionan los modelos, qué datos usan y cómo se toman decisiones automatizadas.',
    importance: 'Facilita la rendición de cuentas, permite auditorías y empodera a personas para cuestionar resultados injustos.'
  },
  {
    icon: BadgeCheck,
    title: 'Responsabilidad',
    statement: 'Establecer responsables claros y mecanismos de corrección cuando la IA cause daño.',
    importance: 'Combina supervisión humana, ética profesional y normativas vigentes para evitar impactos no deseados.'
  },
  {
    icon: Lock,
    title: 'Privacidad',
    statement: 'Minimizar recolección de datos, aplicar controles y respetar consentimientos informados.',
    importance: 'Preserva la autonomía individual y reduce riesgos de vigilancia masiva y filtraciones.'
  },
  {
    icon: Leaf,
    title: 'Sostenibilidad',
    statement: 'Evaluar la huella ambiental, económica y social de los sistemas inteligentes a lo largo del tiempo.',
    importance: 'Impulsa decisiones de eficiencia energética, reparabilidad y equidad intergeneracional.'
  },
  {
    icon: Layers,
    title: 'Gobernanza',
    statement: 'Coordinar políticas públicas, estándares y diálogos multi-sectoriales que acompañen el avance tecnológico.',
    importance: 'Construye marcos confiables, observatorios y capacidades institucionales para acompasar innovación con bienestar.'
  }
];

const KeyTopicsSection = () => {
  return (
    <section id="temas-claves" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-4xl md:text-5xl font-serif font-bold text-slate-900">
            Ejes UNESCO para una IA ética
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Cada eje ofrece señales prácticas para construir sistemas confiables, responsables y que respondan a expectativas sociales compartidas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {axes.map((axis) => {
            const Icon = axis.icon;
            return (
              <Card key={axis.title} className="border-slate-200 shadow-sm hover:shadow-lg transition-shadow" data-reveal>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <CardTitle className="text-2xl font-serif text-slate-900 mb-0">
                      {axis.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-slate-600">{axis.statement}</CardDescription>
                  <p className="text-sm font-medium text-slate-500">{axis.importance}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KeyTopicsSection;
