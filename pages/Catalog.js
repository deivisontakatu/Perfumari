function Catalog() {
    try {
        const categories = [
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
        ];

        return (
            <div data-name="catalog-page" className="pt-16">
                <div className="bg-[#b3e8ed] py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6">Nossas Coleções</h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Explore nossas categorias cuidadosamente selecionadas de fragrâncias premium.
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category, index) => (
                            <CategoryCard key={index} {...category} />
                        ))}
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Erro na página do catálogo:', error);
        return null;
    }
}
