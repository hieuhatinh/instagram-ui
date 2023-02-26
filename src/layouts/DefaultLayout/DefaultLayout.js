import PropTypes from 'prop-types';

import Sidebar from '~/layouts/components/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div className="wrapper">
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
