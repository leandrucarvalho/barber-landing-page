import Card from "./card";
import { servicesData } from "../data/servicesData";

const Services = () => {
  return (
    <div id="services" className="p-8 card">
      <h2 className="text-4xl font-bold text-center mb-8">Nossos Serviços</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {servicesData.map((service) => (
          <Card
            key={service.title}
            title={service.title}
            time={service.time}
            price={service.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
