import React, { useRef, useEffect, useState } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import { DEFAULT_THEME } from './assets/themes';
import { applyTheme } from './assets/themes/utils';

// Layouts
import DefaultLayout from './layouts/DefaultLayout'

// Pages
import Home from './pages/Home';

// TODO Initialize Google Analytics
// ReactGA.initialize(process.env.REACT_APP_GA_CODE);
// const trackPage = page => {
//   ReactGA.set({ page });
//   ReactGA.pageview(page);
// };

function App() {

  // const childRef = useRef()
  let location = useLocation()

  const [theme, setTheme] = useState(DEFAULT_THEME);

  /**
   * Run the applyTheme function every time the theme state changes
   */
  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded');
    setTheme(theme);
  }, [theme]);

  return (
    <Switch>
      <AppRoute exact path='/' component={Home} layout={DefaultLayout} />
    </Switch>
  );
}

export default App;
