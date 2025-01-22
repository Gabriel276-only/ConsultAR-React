import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer id='footer' className="bg-red-900 text-white py-10 w-full satitic z-10 flex-col col-end-1 ml-auto shadow-2xl flex flex-wrap  justify-between">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">ConsultAR</h3>
            <p className="text-sm font-bold text-gray-200">Vassouras</p>
            <p className="text-sm text-gray-300">Avenida Prefeito Henrique Borges filho, 174;
            </p>
            <br></br>
            <p className="text-sm font-bold text-gray-200">Barra do Piraí</p>
            <p className="text-sm text-gray-300">Rua Paulo de Frontin, 139 - sala 707, Centro.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contato</h3>
            <p className="text-sm text-gray-300">
              <a href="mailto:consultar@gmail.com" className="hover:underline">remagalhaes@uol.com</a>
            </p>
            <p className="text-sm text-gray-300">(24) 98115-9042</p>
            <p className="text-sm text-gray-300">(24) 2471-9040</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ConsultAR. Todos os direitos reservados.</p>
          <div className="m-3">
            <a href="https://www.instagram.com/consultarsaudebemestar/" target='_blank' rel='noopener noreferrer' className="mr-4">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-400 hover:text-white" />
            </a>
            <a href='https://m.facebook.com/consultarsaudebemestar/' target='_blank' rel='noopener noreferrer' className='mr-4'>
            <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-400 hover:text-white" /> 
            </a> 
          </div>
          
          </div>
          </div>
        <div className="border-t m-3 p-2 border-gray-700  text-center text-sm text-gray-400">
          <p>Desenvolvido por [<a href='https://github.com/Gabriel276-only' target='_blank' rel='noopener noreferrer'>BG-Tech</a>]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
