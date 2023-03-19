import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = ({ data, setData }) => {

  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value
    });
  };
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.loanTerm}
          label="Tenure"
          onChange={handleChange}
        >

          <MenuItem value={3}>3 Months</MenuItem>
          <MenuItem value={6}>6 Months</MenuItem>
          <MenuItem value={9}>9 Months</MenuItem>
          <MenuItem value={12}>1 Year</MenuItem>
          <MenuItem value={18}>1.5 Years</MenuItem>
          <MenuItem value={24}>2 Years</MenuItem>
          <MenuItem value={30}>2.5 Years</MenuItem>
          <MenuItem value={36}>3 Years</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default TenureSelect