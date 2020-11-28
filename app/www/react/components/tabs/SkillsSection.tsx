import * as React from 'react';

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

interface SkillsSectionProps {
  codeMap: Map<string, number>;
}

const SkillsSection = ({ codeMap }: SkillsSectionProps) => {
  const orderedLangs: object[] = [...codeMap.entries()]
    .sort((a, b) => (a[1] > b[1] ? -1 : 1))
    .splice(0, 8)
    .map(([k, v]) => ({ language: k, Kilobytes: v / 1000 }));

  return (
    <>
      <h4>Code on Github</h4>
      <ResponsiveContainer height={300} width="100%">
        <BarChart
          width={600}
          height={300}
          data={orderedLangs}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="language"
            label={{ value: 'Language', position: 'bottom' }}
          />
          <YAxis
            domain={[1, 'dataMax']}
            label={{
              value: 'Amount (Kilobytes)',
              angle: -90,
              position: 'insideBottomLeft',
            }}
            scale="log"
          />
          <Tooltip />
          <Bar dataKey="Kilobytes" fill="#00d4d4" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default SkillsSection;
