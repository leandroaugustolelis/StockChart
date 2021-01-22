import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

import ResponsiveContainer from './styles';

const styles = {
  tooltipWrapper: {
    background: '#444444',
    border: 'none',
  },
  tooltip: {
    color: '#ebebeb',
  },
};

const StockChart: React.FC<any> = ({ data }) => {
  const currencyFormat = (item: string) => numeral(item).format('$0,0');
  const dateFormat = (item: Date) => moment(item).format('MMM YY');

  return (
    <ResponsiveContainer>
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
        <XAxis
          tick={false}
          axisLine={false}
          dataKey="close"
          tickFormatter={dateFormat}
        />
        <YAxis tick={false} axisLine={false} tickFormatter={currencyFormat} />
        <Tooltip
          itemStyle={{ fontSize: 20 }}
          contentStyle={styles.tooltipWrapper}
          labelStyle={styles.tooltip}
        />
        <Area
          type="linear"
          dataKey="close"
          name="price"
          stroke="none"
          fill="url(#colorValue)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default StockChart;
