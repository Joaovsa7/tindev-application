import React from 'react'
import { Container, Form } from './style'
import Logo from '../../../assets/logo.svg'
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Container>
      <Form>
        <Logo />
        <Input />
        <Button>
          Enviar
        </Button>
      </Form>
    </Container>
  )
}

export default Login
