import React from 'react';

import './global.css';
import { Title } from './styles';

export default function Main() {
  return (
    <Title>
       <aside>
    <strong>Github Search</strong>
    <form>
      <label htmlFor=""></label>
      <input name="github_username" id="username_github" required placeholder="Enter with your github username"/>
    </form>
     </aside>
    </Title>
  );
}
