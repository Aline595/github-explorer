import React, { useState, FormEvent } from 'react';
import { FiChevronRight, FiX } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// Colocar somente informações que será usado e não necessariamente tudo que será retornado  pela API
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// fc -> componente escrito em formato de função
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handlerAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // Não deixa recarregar a página
    event.preventDefault();
    // Adição de um novo repositório

    // Consumir API do Github
    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    // Salvar novo repositório no estado
    setRepositories([...repositories, repository]);
    setNewRepo('');
  }
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore os usuários e seus repositórios no Github</Title>

      <Form onSubmit={handlerAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do usuário do Github"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
