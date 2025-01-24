import React from 'react';
import { useInView } from 'react-intersection-observer';
import Galeria from './gallery.tsx';

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,
  });

  const services = [
    {
      title: "Nossa Missão",
      description:
        "Promover o bem-estar físico, psíquico e social a partir de um atendimento ético e humanizado, possibilitando melhoria nas relações e na qualidade de vida.",
    },
    {
      title: "Nossa Visão",
      description:
        "Ser reconhecida pela excelência e evolução constante dos serviços prestados.",
    },
    {
      title: "Nossos Valores",
      description:
        " humanização, integridade, respeito, comprometimento e defesa da marca ConsultAR Saúde e Bem-Estar são a chave para guiar nossa conduta.",
    },
  ];


  return (
    <div className="relative container flex flex-col bg-gray-150 p-4 space-y-6 md:flex">
    <h1 className="font-bold text-red-800 text-2xl border-b-2 border-red-700 pb-2">
      Nossos Objetivos
    </h1>
    <div className="mt-6 space-y-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="font-semibold text-lg text-red-700">
            {service.title}
          </h3>
          <p className="text-gray-700 text-sm mt-2 text-justify">{service.description}</p>
        </div>
      ))}
    </div>


  <section className="bg-white rounded-lg shadow-md p-4">
    <h1 className="font-bold text-red-800 text-2xl border-b-2 border-red-700 pb-2">
      Convênios e Parcerias
    </h1>
    <p className="text-justify p-10 font-medium mt-4 text-gray-700 text-md md:text-base ">
      A ConsultAR Saúde e Bem-Estar possui convênios com diversas empresas e
      instituições, oferecendo descontos e condições especiais para seus
      colaboradores e associados. Confira abaixo alguns de nossos parceiros:
    </p>
  
    <Galeria />
  </section>
</div>

      
    
        
  );
};


export default ServicesSection;
