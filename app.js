function App() {
    try {
        const [currentPage, setCurrentPage] = React.useState(window.location.hash || '#/');

        React.useEffect(() => {
            const handleHashChange = () => {
                setCurrentPage(window.location.hash);
            };

            window.addEventListener('hashchange', handleHashChange);
            return () => window.removeEventListener('hashchange', handleHashChange);
        }, []);

        const renderPage = () => {
            switch (currentPage) {
                case '#/catalog':
                    return <Catalog />;
                case '#/about':
                    return <About />;
                case '#/contact':
                    return <Contact />;
                default:
                    return <Home />;
            }
        };

        return (
            <div data-name="app" className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    {renderPage()}
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
