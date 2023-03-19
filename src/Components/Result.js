import { Stack, Typography } from '@mui/material';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const { productValue, loanAmount, loanTerm, interestRate } = data;
  const interestPerMonth = interestRate / 100 / 12;
  const monthlyPayment =
    (loanAmount * interestPerMonth * (1 + interestPerMonth) ** loanTerm) / ((1 + interestPerMonth) ** loanTerm - 1);
  const totalInterestGenerated = monthlyPayment * loanTerm - loanAmount;

  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [productValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Stack gap={2}>
        <Typography textAlign='center' variant='h5'>
          Monthly Payment: ₹{monthlyPayment.toFixed(2)}
        </Typography>
        <Typography textAlign='center' variant='h5'>
          Total Interest: ₹{totalInterestGenerated.toFixed(2)}
        </Typography>
        <Stack direction='row' justifyContent='center'>
          <div>
            <Pie data={pieChartData} />
          </div>
        </Stack>
      </Stack>
    </div>
  )
}

export default Result