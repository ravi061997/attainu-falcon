import React from 'react';
import RepoList from './RepoList';
import UserList from './UserList';
function App(props){

return(<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">GitHub API Example</a>
  </nav>
<main>
<UserList />
<RepoList/>
</main>
</div>
)
}


  export default App;