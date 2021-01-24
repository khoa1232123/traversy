import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Home, NavBar, Post, Project, SinglePost } from './components';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/post/:slug" component={SinglePost} />
        <Route path="/post" component={Post} />
        <Route path="/project" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
