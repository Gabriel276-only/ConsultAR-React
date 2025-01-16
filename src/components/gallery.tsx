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
          slidesToShow: 3,
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
      image: "./public/acacio.jpg",
      description: "Profissional comprometido com o cuidado, desenvolve protocolos de prevenção e manutenção da Saúde e do Bem-Estar. Além de diversos cursos na área de massoterapia, é formado em Pedagogia, possui pós-graduação em gestão de pessoas e compõe o trio gestor da ConsultAR. Realiza tratamento para alívio das dores musculares causadas pelos treinos intensos, pelo trabalho ou por questões posturais; auxilia na construção de hábitos mais saudáveis e sem dores no dia a dia. Desenvolve protocolos terapêuticos associados aos tratamentos de psicoterapia para adoecimentos emocionais."
    },
    {
      image: "./public/regiane.jpg",
      description: "Graduada em psicologia pelo CES Juiz de Fora, possui pós graduação em gestão de pessoas e é psicanalista em formação, membro do Corpo Freudiano de Vassouras/RJ. Palestrante, foi professora por muitos anos em cursos técnicos, cursos de graduação e pós-graduação. É psicóloga clínica e supervisora. Compõe o trio gestor da ConsultAR e atende em Vassouras, Barra do Piraí e on-line. Regularmente inscrita no Conselho de Psicologia, bem como devidamente autorizada por este a prestar serviços na modalidade on-line, realiza consulta particular, convênios e plano de saúde,",
    },
    {
      image: "./public/barbara.jpg", 
      description: "Graduada em Psicologia e em Direito, seu trabalho é voltado para a Saúde e Bem-Estar da mulher; desenvolve trabalhos na área da psicologia com o público infantojuvenil e feminino. Autoconhecimento, empoderamento feminino e temáticas de violências e adoecimento psiquico são algumas das temáticas que perpassam sua prática clínica. É autora colaboradora do livro Referências Básicas do Direito Contemporâneo - Vol. 1 com o artigo: Direito e Políticas Públicas na interseção do feminismo; idealizadora do Projeto Adolescer com adolescentes em Vassouras e Barra do Piraí da Oficina Terapêutica envolvendo psicologia e pedagogia para crianças e adolescentes e do Grupo Psicoterapêutico para crianças de 4 a 6 anos de idade em Barra do Piraí. Compõe o trio gestor da ConsultAR. Regularmente inscrita no Conselho de Psicologia, bem como autorizada por este a prestar serviços na modalidade on-line, realiza consulta particular, por convênios e plano de saúde.",
    },
    {
      image: "./public/raaaaabe.jpg", 
      description: "Psicóloga clínica infantojuvenil; especialista em atendimento infantil, em neuropsicologia, em psicopedagogia e em psicologia hospitalar e da saúde, sua formação em Psicologia se deu pela Universidade de Vassouras. Realiza atendimentos de avaliação do desenvolvimento infantil, orientação a pais e responsáveis, terapia de casal e psicoterapia individual de crianças, adolescentes, adultos e idosos. Regularmente inscrita no Conselho de Psicologia, realiza atendimento na ConsultAR em Vassouras e atendimento on-line.",
    },
    {
      image: "./public/Anaclaudia.jpg", 
      description: "Professora de Educação Especial desde 2002 e formação em psicopedagogia, Ana Cláudia é parceira da ConsultAR e atende no Espaço Psicopedagógico em Barra do Piraí. Graduada em estudos sociais, especialista em autismo e apaixonada por práticas baseadas em evidências: ABA, TEACCH, Denver, DIR Floortime/Desenvolvimento Infantil (DIR 101 e em andamento DIR 201) e integração sensorial.",    },
    {
      image: "./public/maryflor.jpg", 
      description: "Fisioterapeuta, atua com fisioterapia geral, fisioterapia estética, pilates, drenagem linfática, massagem modeladora e massagem redutora. Parceira da ConsultAR, atende no Studio Mary & Flor Fisioterapia e atendimento domiciliar",
    },
  ];

  return (
    <div className="container m-0 px-4 sm:px-6">
      <div className="w-full mt-8"> 
        <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-red-800">Nossos Profissionais</h2>
          <Slider {...settings}>
          {slidesData.map((slide, index) => (
            <div key={index} className="px-2 sm:px-4"> {/* Espaçamento responsivo */}
            <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden">
              <img
                src={slide.image}
                alt={`slide ${index}`}
                className="w-full h-48 sm:h-64 object-cover" // Ajustar altura
              />
              <div className="p-6">
                <p className="text-gray-700 text-sm sm:text-base text-justify">{slide.description}</p>
              </div>
            </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default Galeria;