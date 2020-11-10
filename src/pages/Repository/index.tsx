import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepositoryParams {
  repository: string;
}

// fc -> componente escrito em formato de função
const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return <h1>Repository</h1>;
};

export default Repository;
