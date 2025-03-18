export default function Navbar() {
    try {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <nav data-name="navbar" className="bg-white shadow-md fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <a href="#/" className="text-2xl font-bold text-purple-600">Perfumari</a>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#/" className="nav-link text-gray-700 hover:text-purple-600">Início</a>
                            <a href="#/catalog" className="nav-link text-gray-700 hover:text-purple-600">Catálogo</a>
                            <a href="#/about" className="nav-link text-gray-700 hover:text-purple-600">Sobre</a>
                            <a href="#/contact" className="nav-link text-gray-700 hover:text-purple-600">Contato</a>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
                                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <a href="#/" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Início</a>
                            <a href="#/catalog" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Catálogo</a>
                            <a href="#/about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Sobre</a>
                            <a href="#/contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">Contato</a>
                        </div>
                    </div>
                )}
            </nav>
        );
    } catch (error) {
        console.error('Erro no componente Navbar:', error);
        return null;
    }
}
