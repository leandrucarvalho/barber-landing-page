import React, { useState } from "react";
import Image from "next/image";
import { Button } from "./button";
import ModalServiceSelector from "../modalServiceSelector";
import { Service } from "@/types/services";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service[]>([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectService = (services: Service[]) => {
    setSelectedService(services);
  };

  return (
    <section
      id="root"
      key="1"
      className="flex items-center justify-center card py-10"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-4xl font-bold text-black text-center lg:text-left">
              Bem vindo a Dom Ramon BarberShop
            </h2>
            <p className="mt-4 mb-8">
              Descubra a nossa excelência em barbearia
            </p>
            <Button
              onClick={handleOpenModal}
              className="bg-black text-white py-3 px-8 hover:bg-background hover:text-foreground"
            >
              Agende agora
            </Button>
          </div>
          <div className="flex justify-center py-3">
            <Image
              alt="Barbershop chairs"
              className="max-w-xs rounded-lg"
              height="300"
              src="/cartoon_interior_barbershop.png"
              style={{
                aspectRatio: "100/100",
                objectFit: "cover",
              }}
              width="300"
            />
          </div>
        </div>
      </div>
      <ModalServiceSelector
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onSelectServices={handleSelectService}
        selectedServices={selectedService}
      />
    </section>
  );
}
