import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Galeria = () => {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          speed: 600, 
        },
      },
      {
        breakpoint: 640, 
        settings: {
          slidesToShow: 1,
          arrows: false, 
        },
      },
    ],
  };

  const slidesData = [
    {
      title: "Acácio Borges",
      image: "/acacio.jpg",
      description: "Profissional comprometido com o cuidado, desenvolve protocolos de prevenção e manutenção da Saúde e do Bem-Estar. Além de diversos cursos na área de massoterapia, é formado em Pedagogia, possui pós-graduação em gestão de pessoas e compõe o trio gestor da ConsultAR. Realiza tratamento para alívio das dores musculares causadas pelos treinos intensos, pelo trabalho ou por questões posturais; auxilia na construção de hábitos mais saudáveis e sem dores no dia a dia. Desenvolve protocolos terapêuticos associados aos tratamentos de psicoterapia para adoecimentos emocionais."
    },
    {
      title: "Regiane Magalhães",	
      image: "/regiane.jpg",
      description: "Graduada em psicologia pelo CES Juiz de Fora, possui pós graduação em gestão de pessoas e é psicanalista em formação, membro do Corpo Freudiano de Vassouras/RJ. Palestrante, foi professora por muitos anos em cursos técnicos, cursos de graduação e pós-graduação. É psicóloga clínica e supervisora. Compõe o trio gestor da ConsultAR e atende em Vassouras, Barra do Piraí e on-line. Regularmente inscrita no Conselho de Psicologia, bem como devidamente autorizada por este a prestar serviços na modalidade on-line, realiza consulta particular, convênios e plano de saúde,",
    },
    {
      title: "Barbara Crivas",
      image: "/barbara.jpg", 
      description: "Graduada em Psicologia, desenvolve trabalhos com público infantojuvenil e feminino. É autora colaboradora do livro Referências Básicas do Direito Contemporâneo - Vol. 1 com o artigo: Direito e Políticas Públicas na interseção do feminismo; idealizadora do Projeto Adolescer, da Oficina Terapêutica envolvendo psicologia e pedagogia e do Grupo Psicoterapêutico para crianças de 4 a 6 anos. Compõe o trio gestor da ConsultAR. Regularmente inscrita no Conselho de Psicologia, bem como autorizada por este a prestar serviços na modalidade on-line, realiza consulta particular, por convênios e plano de saúde.",
    },
    {
      title: "Raabe Rodrigues",
      image: "/raaaaabe.jpg", 
      description: "Psicóloga clínica infantojuvenil; especialista em atendimento infantil, em neuropsicologia, em psicopedagogia e em psicologia hospitalar e da saúde, sua formação em Psicologia se deu pela Universidade de Vassouras. Realiza atendimentos de avaliação do desenvolvimento infantil, orientação a pais e responsáveis, terapia de casal e psicoterapia individual de crianças, adolescentes, adultos e idosos. Regularmente inscrita no Conselho de Psicologia, realiza atendimento na ConsultAR em Vassouras e atendimento on-line.",
    },
    {
      title: "Ana Claudia",
      image: "/Anaclaudia.jpg", 
      description: "Professora de Educação Especial desde 2002 e formação em psicopedagogia, Ana Cláudia é parceira da ConsultAR e atende no Espaço Psicopedagógico em Barra do Piraí. Graduada em estudos sociais, especialista em autismo e apaixonada por práticas baseadas em evidências: ABA, TEACCH, Denver, DIR Floortime/Desenvolvimento Infantil (DIR 101 e em andamento DIR 201) e integração sensorial.",    },
    {
      title: "Andressa Flor",
      image: "/maryflor.jpg", 
      description: "Fisioterapeuta, atua com fisioterapia geral, fisioterapia estética, pilates, drenagem linfática, massagem modeladora e massagem redutora. Parceira da ConsultAR, atende no Studio Mary & Flor Fisioterapia e atendimento domiciliar",
    },
    {
      title: "Ana Celia Dieguez",
      image: "/AnaCelia.jpg", 
      description: "Fisioterapeuta, atua com fisioterapia geral, fisioterapia estética, pilates, drenagem linfática, massagem modeladora e massagem redutora. Parceira da ConsultAR, atende no Studio Mary & Flor Fisioterapia e atendimento domiciliar",
    }
  ];

  return (
    <div className="container m-0 px-4 sm:px-6">
      <div className="w-full mt-8"> 
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-red-800">Nossos Profissionais</h2>
          <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="px-2 sm:px-4">
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src={slide.image}
                alt={`slide ${index}`}
                className="w-full h-48 sm:h-64 object-cover" 
              />
              <div className="p-6">
                <h1 className='text-red-700 font-bold text-xl'>{slide.title}</h1>
                <p className="text-gray-700 text-sm sm:text-base text-justify">{slide.description}</p>
              </div>
            </div>
            </div>
          ))}
        </Slider>
        <h1 className="text-2xl font-bold text-red-800 m-2">Nossos Parceiros e Convênios</h1>
        <div className="flex flex-wrap justify-center items-center ">
          <img src="/assets/logos/cherem.png" alt="Grupo Cherem" className="w-40 h-40 rounded-full border border-gray-900" />
          <img src="/assets/logos/unimed.png" alt="Unimed" className="w-40 h-40 rounded-full border border-gray-900" />
          <img src="/assets/logos/ABM.png" alt="ABM Plano de Vida" className="w-40 h-40 rounded-full border border-gray-900" />
          <img src="/assets/logos/Ultraplan.jpg" alt="Ultraplan " className="w-40 h-40 rounded-full border border-gray-900" />
          <img src="/assets/logos/BomJesus.png" alt="Grupo Bom Jesus" className="w-40 h-40 rounded-full border border-gray-900" />
          </div>
      </div>
    </div>
    </div>
  );
};

export default Galeria;