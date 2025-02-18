import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import MapEmbed from './maps';

const WhatsAppButton = () => {
  const phoneNumber = "5521999999999"; // Substitua pelo número desejado
  const message = "Olá! Gostaria de mais informações sobre os serviços."; // Mensagem inicial

  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};

const Footer = () => {
  return (
    <footer id='footer' className="bg-red-900 text-white py-10 w-full satitic z-10 flex-col col-end-1 ml-auto shadow-2xl flex flex-wrap  justify-between">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">ConsultAR Saúde e Bem-estar</h1>
            <p className="text-sm font-bold text-gray-200">Vassouras</p>
            <p className="text-sm text-gray-300">Avenida Prefeito Henrique Borges filho, 174;
            </p>
            <br></br>
            <p className="text-sm font-bold text-gray-200">Barra do Piraí</p>
            <p className="text-sm text-gray-300">Rua Paulo de Frontin, 139 - sala 707, Centro.
            </p>
          </div>
          <div>
              <a href="https://linktr.ee/consultarsaudebemestar?fbclid=PAZXh0bgNhZW0CMTEAAaaerrkDLWY4UF766OI5anUjL7wuFd4kulh5iTqhOzOKrNv26EBYScvDVro_aem_HldQRDo3IKMeFKnbIAnLKw"  target='_blank' rel='noopener noreferrer' className="hover:underline"><h3 className="text-lg font-bold mb-2">FALAR COM O PROFISSIONAL</h3></a>
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
            <div>
            <MapEmbed/>
            </div>
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
