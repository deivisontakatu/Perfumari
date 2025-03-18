export default function About() {
    try {
        return (
            <div data-name="about-page" className="pt-16">
                <div className="bg-[#b3e8ed] py-20 px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold mb-6 text-gray-900">Nossa História</h1>
                        <p className="text-xl text-gray-700">
                            Conheça a trajetória da Perfumari e nossa paixão por fragrâncias.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 py-16">
                    <div className="prose prose-lg mx-auto text-gray-700">
                        <p className="text-lg mb-6">
                            Desde a infância, <strong>Mariana Maximo</strong> sempre teve uma conexão especial com os perfumes. 
                            Fascinada pelos frascos elegantes e pelos aromas que contavam histórias, ela sonhava em ter sua própria coleção, 
                            onde cada fragrância representasse um momento especial.
                        </p>
                        <p className="text-lg mb-6">
                            Começou com perfumes nacionais, encantando-se com cada nova descoberta. Mas seu amor pelas fragrâncias foi além do desejo pessoal. 
                            Com um olfato apurado e uma sensibilidade única para entender as preferências das pessoas, Mariana passou a ajudar amigos e familiares 
                            a escolherem perfumes que refletissem suas personalidades.
                        </p>
                        <p className="text-lg mb-6">
                            O que começou como um hobby logo se transformou em uma missão: proporcionar às pessoas a experiência de encontrar um perfume que 
                            não apenas cheirasse bem, mas que contasse sua história, elevasse sua autoestima e se tornasse sua assinatura pessoal.
                        </p>
                        <p className="text-lg mb-6">
                            Com o crescimento das vendas, Mariana se aprofundou ainda mais no universo da perfumaria, estudando notas olfativas, tendências 
                            e combinações que despertam emoções. Aos poucos, sua paixão se tornou um negócio — a <strong>Perfumari</strong>, um espaço onde cada cliente 
                            recebe atendimento personalizado e descobre fragrâncias que traduzem sua essência.
                        </p>
                        <p className="text-lg">
                            Hoje, a <strong>Perfumari</strong> é muito mais do que uma loja de perfumes. É um convite para uma jornada sensorial, onde cada fragrância é escolhida 
                            com cuidado, cada cliente é atendido com dedicação e cada perfume carrega a promessa de momentos inesquecíveis.
                        </p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Erro na página Sobre:', error);
        return null;
    }
}
