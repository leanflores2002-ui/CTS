import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const expertQuotes = [
  {
    quote: 'La gobernanza de la IA no es un lujo: requiere mesas intersectoriales, evaluaciones de riesgo abiertas y supervisión democrática permanente.',
    author: 'María Fernanda Cortés',
    role: 'Directora de políticas en el Observatorio de IA',
    focus: 'Gobernanza'
  },
  {
    quote: 'Supervisión humana significa entrenamiento, roles claros y criterios para intervenir cuando los modelos se desvían. La ética opera en esa brecha.',
    author: 'Dr. Alberto Noguera',
    role: 'Investigador en sistemas críticos',
    focus: 'Supervisión humana'
  },
  {
    quote: 'Las decisiones alrededor del consumo energético, la reciclabilidad y la equidad de datos definen si la IA es sostenible o no.',
    author: 'Lucía Méndez',
    role: 'Coordinadora regional de sostenibilidad digital',
    focus: 'Sostenibilidad'
  }
];

const OpinionesSection = () => {
  return (
    <section id="opiniones" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900" data-reveal>
            Opiniones y reflexiones
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mt-3" data-reveal>
            Citas de expertas y expertos que ponen en perspectiva gobernanza, supervisión humana y sostenibilidad en la IA ética.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {expertQuotes.map((item) => (
            <Card key={item.author} className="border-slate-200 shadow-md hover:shadow-lg transition-shadow" data-reveal>
              <CardHeader>
                <CardTitle className="text-xl font-serif text-slate-900">{item.focus}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p className="text-slate-800 italic">“{item.quote}”</p>
                <p className="font-semibold text-slate-900">{item.author}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpinionesSection;
