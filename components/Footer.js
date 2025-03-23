export default function Footer() {
    return (
        <footer data-name="footer" className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Fale Conosco</h2>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <i className="fas fa-map-marker-alt text-[#cb9999] w-8"></i>
                            <span>Rua Duque de Caxias, Guareí - SP, 18250-000</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-phone text-[#cb9999] w-8"></i>
                            <span>+55 15 99713-9173</span>
                        </div>
                        <div className="flex items-center">
                            <i className="fas fa-envelope text-[#cb9999] w-8"></i>
                            <span>perfumari.contato@gmail.com</span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold mb-4">Nos siga</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/perfu.mari/" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-[#cb9999]">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="https://wa.me/5515997139173" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-600 hover:text-[#cb9999]">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-6">Horário de Atendimento</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>Segunda - Sexta</span>
                            <span>09:00 - 20:00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sábado</span>
                            <span>10:00 - 18:00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Domingo</span>
                            <span>Fechado</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
