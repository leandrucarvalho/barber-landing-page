import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { SVGProps } from "react";

export function Footer() {
  return (
    <footer id="footer" className="card text-black py-8">
      <div className="container mx-auto gap-8 flex flex-wrap justify-between">
        <div>
          <h3 className="text-2xl font-bold">Dom Ramon Barbearia</h3>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            R. Falcão - Ouro Preto, Olinda - PE, 53370-101
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            (81) 98501-6452
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            ramonpergentinoxx@gmail.com
          </p>
        </div>
        <div className="">
          <h3 className="text-2xl font-bold">Siga-nos</h3>
          <div className="flex space-x-2">
            <Link
              className="hover:text-gray-600"
              href="https://www.instagram.com/dom_ramonn"
              target="_blank"
            >
              <InstagramIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold">Horário</h3>
          <p>Segunda - Sexta: 9am - 19pm</p>
          <p>Sábado: 8am - 17pm</p>
          <p>Domingo: Fechado</p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
