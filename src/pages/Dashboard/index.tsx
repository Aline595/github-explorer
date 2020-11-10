import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

// Colocar somente informações que será usado e não necessariamente tudo que será retornado  pela API
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// truthy -> Tudo q não é de valor vazio
// falsy -> Tudo que é de valor vazio

// fc -> componente escrito em formato de função
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handlerAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // Adição de um novo repositório
    // Não deixa recarregar a página
    event.preventDefault();
    // Verifica se foi digitado um repositório
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório.');
      return;
    }
    try {
      // Consumir API do Github
      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      // Salvar novo repositório no estado
      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório.');
    }
  }
  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore os usuários e seus repositórios no Github</Title>

      <Form hasError={!!inputError} onSubmit={handlerAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          type="text"
          placeholder="Digite o nome do usuário do Github"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

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
