import { Fragment, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';
import { Login } from './pages/Accounts';

function App() {
    const [token, setToken] = useState();

    return (
        <Router>
            <div className="App" style={{ height: '100vh' }}>
                <Routes>
                    {!!token
                        ? privateRoutes.map((route, index) => {
                              const Page = route.component;

                              let Layout = DefaultLayout;

                              if (route.layout) {
                                  Layout = route.layout;
                              } else if (route.layout === null) {
                                  Layout = Fragment;
                              }

                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={
                                          <Layout>
                                              <Page />
                                          </Layout>
                                      }
                                  />
                              );
                          })
                        : publicRoutes.map((route, index) => {
                              const Page = route.component;
                              return (
                                  <Route
                                      key={index}
                                      path={route.path}
                                      element={<Page setToken={route.component === Login ? setToken : ''} />}
                                  />
                              );
                          })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
