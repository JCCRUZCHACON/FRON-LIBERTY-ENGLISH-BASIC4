const HomeHouseSection = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col md:flex-row overflow-hidden">

      {/* Imagen 1 - Más grande en PC */}
      <div className="w-full md:w-[65%] h-[50vh] md:h-screen flex items-center justify-center">
        <img
          src="/sister-complet.jpg"
          alt="My sister"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Imagen 2 - Más pequeña en PC */}
      <div className="w-full md:w-[35%] h-[50vh] md:h-screen flex items-center justify-center">
        <img
          src="/sister-sing.jpg"
          alt="My sister singing"
          className="w-full h-full object-contain"
        />
      </div>

    </div>
  );
};

export default HomeHouseSection;

