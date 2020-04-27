import React, { Fragment } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from './components/NavBar'
import SummaryPage from './components/SummaryPage'
import ArchitecturesPage from './components/ArchitecturesPage'
import ViewsPage from './components/ViewsPage'
import HomePage from './components/HomePage'
import "./App.css"


function App() {
  return (
    <Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/summary" component={SummaryPage} />
          <Route path="/architectures" component={ArchitecturesPage} />
          <Route path="/views" component={ViewsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;

/*


<h1 id='main-title' className='header-text-color'>Steve's GoJS/Rest Web API Demo</h1>
      <SummaryPage />

*/