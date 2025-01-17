import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="bg-red-900 text-white py-10 w-full satitic z-10 flex-col col-end-1 ml-auto shadow-2xl flex flex-wrap  justify-between">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">ConsultAR</h3>
            <p className="text-sm text-gray-300">Alto do rio Bonito, 173</p>
            <p className="text-sm text-gray-300">Vassouras</p>
            <p className="text-sm text-gray-300">CEP:27700-000</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contato</h3>
            <p className="text-sm text-gray-300">
              <a href="mailto:consultar@gmail.com" className="hover:underline">consultar@gmail.com</a>
            </p>
            <p className="text-sm text-gray-300">(11) 99999-9999</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ConsultAR. Todos os direitos reservados.</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>Feito por [BG-Tech]</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
