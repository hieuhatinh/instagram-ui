import Sidebar from './Sidebar';

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

export default DefaultLayout;
