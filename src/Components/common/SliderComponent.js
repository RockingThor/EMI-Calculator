import React from 'react'
import Slider from '@mui/material/Slider';

const SliderComponent = () => {
  return (
    <div>
        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </div>
  )
}

export default SliderComponent