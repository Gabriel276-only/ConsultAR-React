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
        "Promover o bem-estar integral de cada indivíduo, através de um atendimento personalizado, ético e humanizado. Buscamos fortalecer as relações interpessoais e sociais, proporcionando ferramentas e conhecimentos para que nossos clientes alcancem uma vida mais saudável, equilibrada e feliz. Acreditamos que a saúde vai além da ausência de doenças e engloba todos os aspectos da vida, desde a alimentação e a atividade física até o bem-estar emocional e social. Nosso objetivo é ser um parceiro de confiança na jornada de nossos clientes em direção a uma vida mais plena.",
    },
    {
      title: "Nossa Visão",
      description:
        "Ser reconhecidos como a referência em saúde e bem-estar, oferecendo serviços inovadores e de alta qualidade. Desejamos transformar a vida das pessoas, promovendo hábitos saudáveis e uma maior qualidade de vida. Nossa visão é construir um futuro onde a saúde e o bem-estar sejam acessíveis a todos.",
    },
    {
      title: "Nossos Valores",
      description:
        "Nossos Valores são a essência da ConsultAR Saúde e Bem-Estar. Acreditamos na força da humanização, oferecendo um atendimento acolhedor e personalizado, onde cada indivíduo é valorizado em sua singularidade. A integridade é a base de nossas relações, garantindo transparência e honestidade em todas as nossas ações. O respeito às diferenças é um pilar fundamental, promovendo um ambiente inclusivo e acolhedor para todos. Nosso compromisso é com a excelência, buscando sempre superar as expectativas de nossos clientes e colaboradores. E a defesa da marca ConsultAR Saúde e Bem-Estar é a paixão que nos move, construindo uma reputação sólida e confiável.",
    },
  ];


  return (
    <div id='sobre'className="relative container flex flex-col bg-gray-150 p-4 space-y-6">
    <h1 className="font-bold text-red-800 text-2xl border-b-2 border-red-700 pb-2">
      Nossos Objetivos
    </h1>
    <p className="text-center font-semibold mt-4 text-gray-700 text-sm sm:text-base">
      Nosso objetivo é cuidar da sua saúde e bem-estar com uma abordagem
      completa e humanizada.
    </p>
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
