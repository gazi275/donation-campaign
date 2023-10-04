import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

  const [totalItems, setTotalItems] = useState(0);
  const [totalDonatedItem, setTotalDonatedItem] = useState(0);
  const [remainingTotal, setRemainingTotal] = useState(0);

  const dataFromLocalStorage = JSON.parse(localStorage.getItem('donated'));

  // doantion data fatch
  const datationData = async () => {
    const response = await fetch('/donation.json');
    const data = await response.json();
    setTotalItems(data?.length || 0);
  }

  useEffect(() => {
    setTotalDonatedItem(dataFromLocalStorage?.length || 0);
    datationData()

    setRemainingTotal(totalItems - totalDonatedItem);
  }, [dataFromLocalStorage,totalItems]);

  console.log("sjdfsa", totalItems, totalDonatedItem)
  console.log("donatedItrem", totalDonatedItem,remainingTotal)

  const data = [
    { name: 'Total Donation', value: remainingTotal},
    { name: 'Your Donation', value: totalDonatedItem }
  ];



  const COLORS = ['#FF444A', '#00C49F'];

  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;

    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
        {`${(value / totalItems * 100).toFixed(1)}%`}
      </text>
    );
  };

  return (
    <div className='w-full mt-[100px]'>
      <h2 className='text-center text-3xl font-medium'>Your Donation Statistics</h2>
      <div className='flex justify-center w-full mx-auto'>
        <ResponsiveContainer width="40%" height="40%" minHeight={410} minWidth={410} aspect={1}>
          <PieChart>
            {/* width={410} height={410}/ */}
            <Pie
              dataKey="value"
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
            >
              {
                data?.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Tooltip />
            <Legend iconSize={30} iconType="plainline" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;