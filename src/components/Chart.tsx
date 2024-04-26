/* import React from 'react';
import { View } from 'react-native';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area } from 'recharts';

interface ChartProps {
  incomeData: { name: string; pv: number }[];
  genderData: { name: string; pv: number }[];
}

const Chart: React.FC<ChartProps> = ({ incomeData, genderData }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <AreaChart
          width={300}
          height={220}
          data={incomeData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16 }}>
        <View style={{ flex: 1, paddingRight: 8 }}>
          <LineChart
            width={150}
            height={150}
            data={incomeData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </View>
        <View style={{ flex: 1, paddingLeft: 8 }}>
          <AreaChart
            width={150}
            height={150}
            data={genderData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          </AreaChart>
        </View>
      </View>
    </View>
  );
};

export default Chart; */
