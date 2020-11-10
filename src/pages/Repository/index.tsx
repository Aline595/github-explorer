import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="data:image/png;base64,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"
            alt="teste"
          />
          <div>
            <strong>teste</strong>
            <p>teste </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="dhfgjsgfj">
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
