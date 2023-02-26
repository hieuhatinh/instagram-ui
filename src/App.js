import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts/DefaultLayout';

// 1. cấu hình layout --> ok
// 2. cấu hình sidebar và làm logo --> ok
// 3. làm button --> ok
// 4. làm MenuItem sidebar --> ok
// 5. làm bảng thông báo gợi ý bạn bè
// 5.1. cấu hình cơ bản
// 5.2. AccountItem

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
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
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
