import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function Example() {
    const [values, setValues] = React.useState({
      codigo: '',
      precoComprado: '',
      quant: '',
    });

    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(values.codigo)
      console.log(Number(values.precoComprado))
      console.log(Number(values.quant))

      fetch('http://34.74.110.100:3001/config', {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, 
        method: 'POST',
        body: JSON.stringify({
          codigo: values.codigo,
          precoComprado: Number(values.precoComprado),
          quant: Number(values.quant),
        })
      });
    }
    return (
      <React.Fragment>
        <form
          onSubmit={(e) => handleSubmit(e)}
          style={{ display: "flex", "flex-direction": "column" }}
        >
          <TextField
            label="Código da ação"
            placeholder="Placeholder"
            margin="normal"
            value={values.codigo}
            variant="outlined"
            onChange={handleChange('codigo')}
          />
          <TextField
            label="Preço comprado"
            placeholder="Placeholder"
            margin="normal"
            value={values.precoComprado}
            variant="outlined"
            onChange={handleChange('precoComprado')}
          />
          <TextField
            label="Quantidade"
            placeholder="Placeholder"
            margin="normal"
            value={values.quant}
            variant="outlined"
            onChange={handleChange('quant')}
          />
          <Button variant="contained" type="submit" >
              Adicionar
          </Button>
        </form>
      </React.Fragment>
    );
}
