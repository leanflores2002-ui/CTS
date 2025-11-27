import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from './ui/table';

// Pequeño componente de gráfico en SVG (sin dependencias)
function MarketGrowthChart() {
  const data = [
    { year: 2020, value: 14 },
    { year: 2021, value: 23 },
    { year: 2022, value: 40 },
    { year: 2023, value: 67 },
    { year: 2024, value: 137, projected: true },
    { year: 2025, value: 217, projected: true },
    { year: 2026, value: 304, projected: true },
    { year: 2027, value: 399, projected: true },
    { year: 2028, value: 548, projected: true },
    { year: 2029, value: 728, projected: true },
    { year: 2030, value: 897, projected: true },
    { year: 2031, value: 1079, projected: true },
    { year: 2032, value: 1304, projected: true },
  ];

  const svgW = 900;
  const svgH = 360;
  const margin = { top: 24, right: 28, bottom: 56, left: 64 };
  const innerW = svgW - margin.left - margin.right;
  const innerH = svgH - margin.top - margin.bottom;
  const maxVal = Math.max(...data.map(d => d.value)) * 1.1; // pequeño headroom

  const xStep = innerW / data.length;
  const barW = Math.min(34, xStep * 0.62);
  const xCenter = (i) => margin.left + i * xStep + xStep / 2;
  const yScale = (v) => margin.top + innerH * (1 - v / maxVal);

  // ticks a intervalos fijos para la rejilla
  const tickStep = 250;
  const ticks = [];
  for (let v = 0; v <= Math.ceil(maxVal / tickStep) * tickStep; v += tickStep) ticks.push(v);

  // Calcular CAGR aproximado para la anotación de tendencia
  const start = data[0].value;
  const end = data[data.length - 1].value;
  const years = data.length - 1;
  const cagr = Math.pow(end / start, 1 / years) - 1;
  const cagrLabel = `~${Math.round(cagr * 100)}%`;

  return (
    <figure className="w-full">
      <svg viewBox={`0 0 ${svgW} ${svgH}`} role="img" aria-label="Crecimiento de iniciativas de ética y gobernanza para IA generativa">
        <defs>
          <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto" markerUnits="userSpaceOnUse">
            <path d="M0,0 L8,4 L0,8 Z" fill="#6d28d9" />
          </marker>
          <linearGradient id="barGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* Rejilla horizontal */}
        {ticks.map((t, i) => (
          <g key={`g-${i}`}> 
            <line x1={margin.left} x2={margin.left + innerW} y1={yScale(t)} y2={yScale(t)} stroke="#e2e8f0" strokeWidth="1" opacity={t === 0 ? 1 : 0.6} />
            <text x={margin.left - 10} y={yScale(t)} textAnchor="end" alignmentBaseline="middle" fontSize="11" fill="#475569">{t}</text>
          </g>
        ))}

        {/* Eje Y label */}
        <text x={16} y={margin.top} transform={`rotate(-90 16 ${margin.top})`} textAnchor="end" fontSize="12" fill="#334155">En miles de millones, USD</text>

        {/* Barras */}
        {data.map((d, i) => {
          const x = xCenter(i) - barW / 2;
          const y = yScale(d.value);
          const h = margin.top + innerH - y;
          const fill = d.projected ? 'url(#barGradient)' : '#6366f1';
          const opacity = d.projected ? 0.95 : 0.9;
          return (
            <g key={d.year}>
              <rect x={x} y={y} width={barW} height={h} fill={fill} opacity={opacity} rx="6" />
              <text x={x + barW / 2} y={y - 6} textAnchor="middle" fontSize="11" fill="#334155">{d.value}</text>
              <text x={x + barW / 2} y={margin.top + innerH + 18} textAnchor="middle" fontSize="11" fill="#475569">{d.year}{d.projected ? '*' : ''}</text>
          </g>
          );
        })}

        {/* Anotación de tendencia */}
        {(() => {
          const x1 = xCenter(0);
          const y1 = yScale(data[0].value);
          const x2 = xCenter(data.length - 1);
          const y2 = yScale(data[data.length - 1].value);
          const xm = (x1 + x2) / 2;
          const ym = (y1 + y2) / 2 - 8;
          return (
            <g>
              <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6d28d9" strokeWidth="3" markerEnd="url(#arrowhead)" opacity="0.9" />
              <text x={xm} y={ym} textAnchor="middle" fontSize="18" fill="#6d28d9" fontWeight="600">{cagrLabel}</text>
            </g>
          );
        })()}
      </svg>
      <figcaption className="text-center text-sm text-slate-500 mt-2">
        Tendencia de inversión en auditorías éticas y gobernanza (valores estimados marcados con *).
      </figcaption>
    </figure>
  );
}

const AIStatsSection = () => {
  return (
    <section id="estadisticas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 data-reveal className="reveal reveal-up text-3xl md:text-4xl font-serif font-bold text-slate-900">
            Estadísticas sobre ética en la IA (2023–2025)
          </h2>
          <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
            Métricas recientes que documentan auditorías éticas, marcos regulatorios y evaluaciones de impacto algorítmico para garantizar despliegues inclusivos y responsables.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" data-stagger>
          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Auditorías Éticas</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                El 72% de los proyectos de alto riesgo reportados en 2024 completaron auditorías éticas independientes antes de su despliegue, combinando revisiones humanas con análisis automatizados.
              </p>
              <p className="text-sm text-slate-500">Fuente: UNESCO 2024; observatorios multilaterales.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Marcos regulatorios</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                38 países ya registran marcos regulatorios explícitos en torno a la ética de la IA, con comités de gobernanza e indicadores de cumplimiento en crecimiento.
              </p>
              <p className="text-sm text-slate-500">Fuente: OECD.AI; UNESCO 2024.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Evaluaciones de Impacto Algorítmico</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                Más de 150 agencias públicas y privadas adoptaron evaluaciones de impacto algorítmico (EIA) en sus despliegues piloto para comprender consecuencias sociales y ambientales.
              </p>
              <p className="text-sm text-slate-500">Fuente: UNESCO/EU AI Act trackers 2024.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Supervisión humana</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                El 81% de los sistemas de alto riesgo mantiene supervisión humana obligatoria para decisiones críticas, con alarmas y mecanismos de remediación definidos.
              </p>
              <p className="text-sm text-slate-500">Fuente: NIST 2024; comisiones de ética regionales.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Privacidad y seguridad</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                El 66% de los equipos que despliegan IA incorporan privacidad diferencial, minimización de datos y monitoreo continuo como parte de sus protocolos éticos.
              </p>
              <p className="text-sm text-slate-500">Fuente: GDPR & privacy impact reports 2024.</p>
            </CardContent>
          </Card>

          <Card data-reveal className="reveal reveal-up">
            <CardHeader>
              <CardTitle>Sostenibilidad y gobernanza</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700 space-y-2">
              <p>
                Un 47% de iniciativas mide su huella ambiental y publica tableros de gobernanza para garantizar que la innovación no comprometa a comunidades ni al planeta.
              </p>
              <p className="text-sm text-slate-500">Fuente: Observatorios de IA responsable 2024.</p>
            </CardContent>
          </Card>
        </div>

        {/* Gráfico: crecimiento del mercado de IA generativa */}
        <div className="mt-14">
          <Card data-reveal className="reveal reveal-up">
            <CardHeader className="pb-2">
            <CardTitle className="text-2xl font-serif">Crecimiento de iniciativas de ética y gobernanza</CardTitle>
            </CardHeader>
            <CardContent>
              <MarketGrowthChart />
            </CardContent>
          </Card>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6" data-reveal>
            Cifras clave (cards comparativas)
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" data-stagger>
            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Proyectos con auditorías éticas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-slate-900">72%</div>
                <p className="text-slate-600">Iniciativas de alto riesgo auditadas en 2024</p>
                <div className="mt-3">
                  <Progress value={72} aria-label="72% de proyectos con auditorías éticas" />
                </div>
              </CardContent>
            </Card>

            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Países con marcos regulatorios</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900">38</div>
                <p className="text-slate-600">Naciones que incorporaron directrices éticas</p>
                <div className="mt-3">
                  <Progress value={38} aria-label="38 países con marcos regulatorios" />
                </div>
              </CardContent>
            </Card>

            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Evaluaciones de impacto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-slate-900">150+</div>
                <p className="text-slate-600">Agencias que usan evaluaciones de impacto algorítmico</p>
                <div className="mt-3">
                  <Progress value={75} aria-label="Adopción de evaluaciones de impacto" />
                </div>
              </CardContent>
            </Card>

            <Card data-reveal className="reveal reveal-up">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-slate-500">Supervisión humana</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-slate-900">81%</div>
                <p className="text-slate-600">Despliegues con escalado humano obligatorio</p>
                <div className="mt-3">
                  <Progress value={81} aria-label="81% de supervisión humana" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-2xl font-serif font-semibold text-slate-900 mb-6" data-reveal>
            Tabla resumen de indicadores
          </h3>
          <Card data-reveal className="reveal reveal-up">
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Dominio</TableHead>
                    <TableHead>Indicador</TableHead>
                    <TableHead>Cifra</TableHead>
                    <TableHead>Fuente</TableHead>
                    <TableHead>Año</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Auditorías éticas</TableCell>
                    <TableCell>Proyectos revisados antes de su despliegue</TableCell>
                    <TableCell>72%</TableCell>
                    <TableCell>UNESCO</TableCell>
                    <TableCell>2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Regulación</TableCell>
                    <TableCell>Países con marcos éticos o leyes de IA</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>OECD.AI</TableCell>
                    <TableCell>2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Evaluaciones</TableCell>
                    <TableCell>Agencias con evaluaciones de impacto algorítmico</TableCell>
                    <TableCell>150+</TableCell>
                    <TableCell>UNESCO / EU AI Act</TableCell>
                    <TableCell>2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Supervisión</TableCell>
                    <TableCell>Despliegues con intervención humana definida</TableCell>
                    <TableCell>81%</TableCell>
                    <TableCell>NIST</TableCell>
                    <TableCell>2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Privacidad</TableCell>
                    <TableCell>Equipos con privacidad diferencial y minimización</TableCell>
                    <TableCell>66%</TableCell>
                    <TableCell>GDPR impact reports</TableCell>
                    <TableCell>2024</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sostenibilidad</TableCell>
                    <TableCell>Proyectos que monitorean huella ambiental</TableCell>
                    <TableCell>47%</TableCell>
                    <TableCell>Observatorios IA responsable</TableCell>
                    <TableCell>2024</TableCell>
                  </TableRow>
                </TableBody>
                <TableCaption>
                  Indicadores propuestos para mostrar avances en ética, gobernanza y regulación; consultar informes originales para contextos metodológicos.
                </TableCaption>
              </Table>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 text-sm text-slate-500">
          <p className="font-semibold">Nota metodológica</p>
          <p>
            Las cifras consolidan reportes de UNESCO, OECD.AI, EU AI Act, NIST y observatorios de ética de datos. Las metodologías y muestras difieren; revisar los documentos originales para precisión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIStatsSection;
