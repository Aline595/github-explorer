import React from 'react';

import { Title, Form } from './styles';

// fc -> componente escrito em formato de função
const Dashboard: React.FC = () => {
  return (
    <>
      <Title>Explore os usuários e seus repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do usuário do Github" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
