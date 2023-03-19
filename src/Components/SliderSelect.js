import { Stack } from '@mui/material'
import React from 'react'
import SliderComponent from './common/SliderComponent'


const SliderSelect = ({data,setData}) => {
  let unit='₹';
  return (
    <div className=''>
      <Stack my={1.4}>
        <SliderComponent 
          min={0} 
          max={100000} 
          deafultvalue={data.productValue} 
          step={1000} 
          unit={unit} 
          label={'Product Value'} 
          amount={data.productValue}
          value={data.productValue}
          onChange={(e, value)=> setData({
            ...data,
            loanAmount: value-data.downPayment,
            productValue: value
          })}>
        </SliderComponent>
        <SliderComponent 
          min={0} 
          max={data.productValue} 
          deafultvalue={data.downPayment} 
          step={500}
          label={'Down Payment'} 
          amount={data.downPayment}
          value={data.downPayment}
          onChange={(e, value)=> setData({
            ...data,
            loanAmount: data.productValue-value,
            downPayment: value
          })}>
        </SliderComponent>
        <SliderComponent 
          min={0} 
          max={data.productValue} 
          deafultvalue={data.loanAmount} 
          step={500} 
          unit={unit} 
          label={'Loan Amount'} 
          amount={data.loanAmount}
          value={data.loanAmount}
          onChange={(e, value)=> setData({
            ...data,
            downPayment: data.productValue-value,
            loanAmount: value
          })}>
        </SliderComponent>
        <SliderComponent 
          min={0} 
          max={30} 
          deafultvalue={data.interestRate} 
          step={0.5} 
          unit={'%'} 
          label={'Interest Rate'} 
          amount={data.interestRate}
          value={data.interestRate}
          onChange={(e, value)=> setData({
            ...data,
            interestRate: value
          })}>
        </SliderComponent>
      </Stack>
    </div>
  )
}

export default SliderSelect