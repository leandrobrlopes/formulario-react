import { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

import { Container, Typography } from '@mui/material';
import 'fontsource-roboto';

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant='h3' component='h1' align='center'>Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
      
    );
  }
  
  
}

function aoEnviarForm(dados){
  console.log(dados)
}

//As informações do formulário serão apenas mostradas no console após enviar

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 digitos"}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
