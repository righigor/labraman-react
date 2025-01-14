import { useTranslation } from "react-i18next";
import FormContato from "./FormContato";

export default function ContatoHome() {
  const { t } = useTranslation();
  return (
    <section className="w-full h-screen flex justify-center bg-black py-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-52">
        <FormContato />
        <div className="flex flex-col space-y-6 max-w-3xl">
          <iframe
            className="w-full h-64 rounded shadow"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.1218729258787!2d-43.96520362493259!3d-19.87029438162821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6976ec5e63ed5%3A0x3adf8ff7649d41a7!2sAv.%20Ant%C3%B4nio%20Carlos%2C%206627%20-%20Pampulha%2C%20Belo%20Horizonte%20-%20MG%2C%2031230-901!5e0!3m2!1spt-BR!2sbr!4v1694826219316!5m2!1spt-BR!2sbr"
            loading="lazy"
          ></iframe>
          <div className="text-white">
            <p className="text-lg font-bold">{t("endereco")}:</p>
            <p className="text-sm">
              Avenida Antônio Carlos, 6627
              <br />
              Departamento de Física, Instituto de Ciências Exatas
              <br />
              Belo Horizonte, MG - 31270-901
            </p>
            <p className="mt-4 text-lg font-bold">{t("telefone")}:</p>
            <p className="text-sm">(31) 99839-7442</p>
          </div>
        </div>
      </div>
    </section>
  );
}
