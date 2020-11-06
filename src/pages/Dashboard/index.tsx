import React from 'react';
import { FiChevronRight, FiX } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// fc -> componente escrito em formato de função
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore os usuários e seus repositórios no Github</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do usuário do Github" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/56769013?s=460&u=a4f3390f46e8180496d3a99749f3e70b7402ae9e&v=4"
            alt="Aline Soares da Silva"
          />
          <div>
            <strong>Aline595/teste</strong>
            <p>Descrição do usuário do github</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
