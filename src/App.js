import { Container, Grid } from "@mui/material";
import Navbar from "./Components/Navbar";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import { useState } from "react";


function App() {

  const [data, setData]=useState({
    productValue: 10000,
    downPayment: 1000,
    loanAmount: 9000,
    loanTerm: 12,
    interestRate: 12
  });


  return (
    <div className="App">
      <Navbar></Navbar>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}></SliderSelect>
            <TenureSelect></TenureSelect>
          </Grid>
          <Grid item xs={12} md={6}>
            <Result></Result>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
