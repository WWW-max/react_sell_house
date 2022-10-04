// 引入路由
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import House from './pages/House/House.jsx';
import News from './pages/News/News.jsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout path="/">
            <Route exact path={'/'} component={Home} />
            <Route path={'/house'} component={House} />
            <Route path={'/news'} component={News} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
