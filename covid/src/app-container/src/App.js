import React from 'react';
import { NavLink, BrowserRouter, Route, Switch } from 'react-router-dom';
import MicroFrontend from './MicroFrontend';

const { REACT_APP_CREATEREACTAPP_HOST: createreactappHost } = process.env;

const CreateReactApp = ({ history }) => (
  <MicroFrontend
    history={history}
    host={createreactappHost}
    name="createreactapp"
  />
);

const Home = () => (
  <>
    <p>
      What is a micro front-ends approach? The term micro front-ends first came
      up in the ThoughtWorks Technology Radar in November 2016. It extends the
      concepts of microservices to front-end development.
    </p>
    <p>
      The approach is to split the browser-based code into micro front-ends by
      breaking down application features. By making smaller and feature-centered
      codebases, we achieve the software development goal of decoupling.
    </p>
    <p>
      Although the codebases are decoupled, the user experiences are coherent.
      In addition, each codebase can be implemented, upgraded, updated, and
      deployed independently.
    </p>
    <p>
      Here is the paradise of micro front-ends. JavaScript applications,
      regardless of frameworks and versions, are launched by a container. These
      applications, legacy and new, work together seamlessly, and act like one
      application.
    </p>
  </>
);

const App = props => {

	constructor(props) {
		super(props);
		this.props.navigateToMap();
		this.props.navigateToStory();
		this.props.navigateToGraph();
	}
  return (
    <BrowserRouter>
      <h1>
        This is an example of micro frontend. 
      </h1>
      <p>
        In the links below, Home is a component bundled with the App Container,
        and Micro Frontend is a micro frontend app loaded from an outside route.
      </p>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/createreactapp">
            Micro Frontend: Create React App
          </NavLink>
        </li>
         <li>
          <NavLink to="/map">
            Heatmap of Corona Virus Over Time
          </NavLink>
        </li>
         <li>
          <NavLink to="/story">
            Information of the Corona Virus In Your Area
          </NavLink>
        </li>
         <li>
          <NavLink to="/graph">
            Visualize Data of the Corona Virus over time in the U.S.
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/map" render={() => this.props.navigateToBooking() ? 
        	<Redirect to="http://localhost:4001" /> :
        	<Redirect to="http://localhost:4000"
        	 } />
        <Route exact path="/story" render={() => this.props.navigateToKlarna() ? 
        	<Redirect to="http://localhost:4002" /> :
        	<Redirect to="http://localhost:4000"
        	 } />
       	<Route exact path="/graph" render={() => this.props.navigateToMessaging() ? 
        	<Redirect to="http://localhost:4003" /> :
        	<Redirect to="http://localhost:4000"
        	 } />
        <Route path="/createreactapp" render={() => <CreateReactApp />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
