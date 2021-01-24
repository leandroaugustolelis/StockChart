import React from 'react';

import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

import CustomTooltip from '../CustomTooltip/index';

const StockChart: React.FC<any> = ({ data }) => {
  return (
    <AreaChart
      width={600}
      height={250}
      data={data}
      margin={{
        top: 30,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="45%" stopColor="#f7931a" stopOpacity={1} />
          <stop offset="100%" stopColor="#f7931a" stopOpacity={0.0} />
        </linearGradient>
      </defs>
      <XAxis tick={false} axisLine={false} />
      <YAxis tick={false} axisLine={false} />

      <Area
        type="linear"
        dataKey="close"
        stroke="none"
        fill="url(#colorValue)"
        fillOpacity={1}
      />
      <Tooltip isAnimationActive={false} content={<CustomTooltip />} />
    </AreaChart>
  );
};

export default StockChart;
