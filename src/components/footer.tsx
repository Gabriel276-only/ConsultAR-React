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
            <p className="text-sm text-gray-300">Vassouras</p>
            <p className="text-sm text-gray-300">Avenida Prefeito Henrique Borges filho, 174;
            </p>
            <br></br>
            <p className="text-sm text-gray-300">Barra do Piraí</p>
            <p className="text-sm text-gray-300">Rua Paulo de Frontin, 139 - sala 707, Centro.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contato</h3>
            <p className="text-sm text-gray-300">
              <a href="mailto:consultar@gmail.com" className="hover:underline">consultar@gmail.com</a>
            </p>
            <p className="text-sm text-gray-300">(24) 99999-9999</p>
            <p className="text-sm text-gray-300">(24) 2471-9040</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ConsultAR. Todos os direitos reservados.</p>
          <div className="flex mt-4">
            <a href="https://www.instagram.com/consultarsaudebemestar/" target='_blank' rel='noopener noreferrer' className="mr-4">
              <FontAwesomeIcon icon={faInstagram} className="text-2xl text-gray-400 hover:text-white" />
            </a>
            <a href='https://m.facebook.com/consultarsaudebemestar/' target='_blank' rel='noopener noreferrer' className='mr-4'>
            <FontAwesomeIcon icon={faFacebook} className="text-2xl text-gray-400 hover:text-white" /> 
            </a> 
          </div>
          
          </div>
          </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>Desenvolvido por [<a href=''>BG-Tech</a>]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
