const About = () => {
  return (
    <div
    className="min-h-screen flex flex-col items-center"
    >
      <h2 className="text-2xl font-semibold m-2">About us</h2>
      <p className={`m-0 max-w-[60ch] opacity-50`}>
        Electrodomesticos Capellari es una empresa familiar con una larga
        tradicion en la venta de electrodomesticos.
      </p>

      <p className={`m-0 max-w-[60ch] opacity-50`}>
        La pasion y el compromiso con la satisfaccion del cliente y la
        excelencia en productos han sido nuestro sello distintivo a lo largo de
        los años
      </p>
      <p className={`m-0 max-w-[60ch] opacity-50`}>
        Ya van cuatro generaciones de nuestra familia Capellari, iniciamos en
        1923 creando una pequeña tienda en el corazon de la ciudad de Puerto
        Montt, Chile
      </p>
    </div>
  );
};

export default About;