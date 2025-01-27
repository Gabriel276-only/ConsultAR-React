import React from "react";

const MapEmbed: React.FC = () => {
  return (
    <div className="m-3 flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
      {/* Mapa de Vassouras */}
      <div className="w-full h-[300px] md:h-[300px] rounded-lg shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d102471.06139443895!2d-43.788373195430644!3d-22.434920270582644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sConsultAR%20Sa%C3%BAde%20E%20Bem-Estar!5e0!3m2!1sen!2sbr!4v1737981142289!5m2!1sen!2sbr" 
          className="w-full h-full"
          allowFullScreen
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

     </div>
  );
};

export default MapEmbed;

