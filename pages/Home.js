export default function Home() {
    try {
        return (
            <div data-name="home-page">
                {/* Cabeçalho */}
                <header className="bg-white shadow-md py-4 px-6 fixed w-full top-0 z-10">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-900">Perfumari</h1>
                        <nav>
                            <ul className="flex space-x-6">
                                <li><a href="#sobre" className="text-gray-600 hover:text-gray-900">Sobre</a></li>
                                <li><a href="#contato" className="text-gray-600 hover:text-gray-900">Contato</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                {/* Seção Hero */}
                <section className="flex flex-col items-center justify-center bg-gradient-to-r from-[#b3e8ed] to-[#cb9999] text-center px-4 fade-in py-32">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                        Encontre Sua Fragrância Perfeita
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto animate-fade-in-up delay-200">
                        Explore nossa coleção exclusiva e descubra sua essência ideal.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {["Perfumes Importados", "Perfumes Árabes", "Body Splashes"].map((item, index) => (
                            <div key={index} className="p-6 bg-white shadow-lg rounded-lg text-center animate-fade-in-up delay-300">
                                <h3 className="text-xl font-semibold mb-2">{item}</h3>
                                <p className="text-gray-600">Sinta a sofisticação de nossas fragrâncias.</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Seção Catálogo */}
                <section>
                    <div className="bg-[#b3e8ed] py-20 px-4">
                        <div className="max-w-7xl mx-auto text-center">
                            <h1 className="text-4xl font-bold mb-6">Nossas Coleções</h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Explore nossas categorias cuidadosamente selecionadas de fragrâncias premium.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Victoria's Secret",
                                    image: "/images/victorias-secret.jpg",
                                    description: "Luxuosas fragrâncias da icônica marca"
                                },
                                {
                                    title: "Bath & Body Works",
                                    image: "/images/bath-body-works.jpg",
                                    description: "Coleções refrescantes e encantadoras para o corpo"
                                },
                                {
                                    title: "Perfumes Árabes",
                                    image: "/images/perfume-arabe.jpg",
                                    description: "Fragrâncias exóticas e marcantes do Oriente Médio"
                                },
                                {
                                    title: "Perfumes Importados",
                                    image: "/images/perfume-importado.jpg",
                                    description: "Seleção premium de perfumes internacionais"
                                }
                            ].map((category, index) => (
                                <CategoryCard key={index} {...category} />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    } catch (error) {
        console.error('Erro na página inicial:', error);
        return null;
    }
}