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
    
      <div className="flex flex-col items-center space-y-6 md:space-y-10 p-4">
  <section id='sobre' className="relative w-full bg-gray-50 py-8 sm:py-16 md:py-20">
    <h1 className="text-center text-2xl font-bold text-red-700 md:text-4xl">Nossos Objetivos</h1>
    <p className="mt-4 text-center text-sm text-gray-700 md:text-base max-w-xl mx-auto"></p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" text-justify p-6 bg-gray-100 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition-shadow  duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        </section>
        <section>
        <h1 className="text-center text-2xl font-bold text-red-700 md:text-4xl">Covênios e Parcerias</h1>
        <p className="mt-4 text-center text-sm text-gray-700 md:text-base max-w-xl mx-auto">A ConsultAR Saúde e Bem-Estar possui convênios com diversas empresas e instituições, oferecendo descontos e condições especiais para seus colaboradores e associados. Confira abaixo alguns de nossos parceiros:</p>
        </section>
        <section className='flex flex-wrap justify-center'>
         <Galeria/>
      </section>
      </div>
      
    
    
  );
};



export default ServicesSection;
