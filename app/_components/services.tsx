const Services = () => {
  return (
    <div id="services" className="p-8 bg-[#f7f7f7] rounded-2xl">
      <h2 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h2>
      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-64 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Corte de Cabelo</h3>
          <p>Descrição do serviço de corte de cabelo.</p>
        </div>
        <div className="w-64 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Barba</h3>
          <p className="text-black">Descrição do serviço de barba.</p>
        </div>
        <div className="w-64 p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Tintura</h3>
          <p className="text-black">Descrição do serviço de tintura.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
