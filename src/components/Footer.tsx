import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                {/* Logo y texto */}
                <div className="flex items-center space-x-4">
                    <img className="w-24" src="/medi.png" alt="logotipo" />
                    <p className="text-sm text-gray-400">
                        &copy; 2025 M Facts. Todos los derechos reservados.
                    </p>
                </div>

                {/* Redes sociales */}
                <div className="flex space-x-6">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <FaFacebookF size={22} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-sky-400 transition-colors"
                    >
                        <FaTwitter size={22} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-pink-500 transition-colors"
                    >
                        <FaInstagram size={22} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
