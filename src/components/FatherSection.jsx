const FatherSection = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col md:flex-row overflow-hidden">

      {/* Imagen 1 */}
      <div className="w-full md:w-[55%] h-[50vh] md:h-screen flex items-center justify-center">
        <img
          src="/dev-imag.jpg"
          alt="About me"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Imagen 2 */}
      <div className="w-full md:w-[45%] h-[50vh] md:h-screen flex items-center justify-center">
        <img
          src="/dev-imag2.jpg"
          alt="About me"
          className="w-full h-full object-contain"
        />
      </div>

    </div>
  );
};

export default FatherSection;


