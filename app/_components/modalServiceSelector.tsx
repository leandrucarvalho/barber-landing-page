import React from "react";
import Modal from "react-modal";
import { servicesData } from "../data/servicesData";

import ReactModal from "react-modal";
import { Service } from "@/types/services";

ReactModal.setAppElement("#root");

type ModalServiceSelectorProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  onSelectServices: (services: Service[]) => void;
  selectedServices: Service[];
};

const ModalServiceSelector: React.FC<ModalServiceSelectorProps> = ({
  isOpen,
  onRequestClose,
  onSelectServices,
  selectedServices,
}) => {
  const handleServiceSelect = (service: Service) => {
    const updatedServices = selectedServices.includes(service)
      ? selectedServices.filter((s) => s !== service)
      : [...selectedServices, service];
    onSelectServices(updatedServices);
  };

  const handleWhatsAppClick = () => {
    if (selectedServices.length > 0) {
      const message = selectedServices
        .map(
          (service) =>
            `Olá, gostaria de agendar um horário para o serviço: ${service.title}. Duração: ${service.duration}. Preço: ${service.price}.`
        )
        .join("\n");
      const whatsappNumber = "5581985016452";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Selecionar Serviço"
      className="absolute bg-white p-6 rounded-md shadow-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <h2 className="text-2xl font-bold mb-4">Selecione um Serviço</h2>
      <div className="relative">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-96">
          {servicesData.map((service) => (
            <li
              key={service.title}
              className={`cursor-pointer p-4 border rounded ${
                selectedServices?.includes(service)
                  ? "border-black"
                  : "border-gray-200"
              } ${selectedServices?.length === 0 ? "border-dashed" : ""}`}
              onClick={() => handleServiceSelect(service)}
            >
              <p className="font-bold">{service.title}</p>
              <p>Duração: {service.duration}</p>
              <p>Preço: {service.price}</p>
            </li>
          ))}
        </ul>
        <div className="mt-11">
          {selectedServices && (
            <button
              onClick={handleWhatsAppClick}
              className="fixed bottom-0 left-0 right-0 bg-black text-white py-2 px-4 m-4 rounded"
            >
              Agendar no WhatsApp
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalServiceSelector;
