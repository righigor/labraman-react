import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";

interface IDataForm {
  name: string;
  phone: string;
  email: string;
  mensagem: string;
}

export default function FormContato() {
  const { t } = useTranslation();
  const [dataForm, setDataForm] = useState<IDataForm>({
    name: "",
    phone: "",
    email: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("https://formspree.io/f/xayrqpke", {
        method: "POST",
        body: JSON.stringify(dataForm),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setLoading(false);
        Swal.fire({
          title: t("enviada"),
          text: t("text_enviado"),
          icon: "success",
        });
        setDataForm({
          name: "",
          phone: "",
          email: "",
          mensagem: "",
        });
      } else {
        setLoading(false);
        Swal.fire({
          title: "Erro",
          text: "Erro ao enviar mensagem",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-backgroundLight p-8 rounded shadow-backgroundLight shadow-md">
      <h2 className="text-2xl font-title text-gray-800 mb-6">
        {t("entre_em_contato")}
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="relative group">
          <input
            type="text"
            name="name"
            id="name"
            value={dataForm.name}
            onChange={handleChange}
            required
            className="peer bg-transparent border border-gray-500 rounded-md h-12 lg:w-80 sm:w-2/3 py-2 px-4 outline-none"
          />
          <label
            htmlFor="name"
            className="text-gray-700 px-1 absolute -translate-y-1/2 top-1/2 left-4 pointer-events-none duration-300 peer-focus:top-0 peer-focus:bg-backgroundLight peer-focus:text-xs peer-valid:bg-backgroundLight peer-valid:top-0 peer-valid:text-xs"
          >
            {t("seu_nome")}
          </label>
        </div>

        <div className="relative group">
          <input
            type="text"
            name="phone"
            id="phone"
            value={dataForm.phone}
            onChange={handleChange}
            required
            className="peer bg-transparent border border-gray-500 rounded-md h-12 lg:w-80 sm:w-2/3 py-2 px-4 outline-none"
          />
          <label
            htmlFor="phone"
            className="text-gray-700 px-1 absolute -translate-y-1/2 top-1/2 left-4 pointer-events-none duration-300 peer-focus:top-0 peer-focus:bg-backgroundLight peer-focus:text-xs peer-valid:bg-backgroundLight peer-valid:top-0 peer-valid:text-xs"
          >
            {t("telefone")}
          </label>
        </div>

        <div className="relative group">
          <input
            type="email"
            name="email"
            id="email"
            value={dataForm.email}
            onChange={handleChange}
            required
            className="peer bg-transparent border border-gray-500 rounded-md h-12 lg:w-80 sm:w-2/3 py-2 px-4 outline-none"
          />
          <label
            htmlFor="email"
            className="text-gray-700 px-1 absolute -translate-y-1/2 top-1/2 left-4 pointer-events-none duration-300 peer-focus:top-0 peer-focus:bg-backgroundLight peer-focus:text-xs peer-valid:bg-backgroundLight peer-valid:top-0 peer-valid:text-xs"
          >
            {t("seu_email")}
          </label>
        </div>
        <div className="relative group">
          <textarea
            name="mensagem"
            id="mensagem"
            value={dataForm.mensagem}
            onChange={handleChange}
            required
            rows={4}
            className="peer bg-transparent border border-gray-500 rounded-md py-2 px-4 outline-none resize-none lg:w-80 sm:w-2/3"
          ></textarea>
          <label
            htmlFor="mensagem"
            className="text-gray-700 px-1 absolute -translate-y-1/2 top-[15%] left-4 pointer-events-none duration-300 peer-focus:top-0 peer-focus:bg-backgroundLight peer-focus:text-xs peer-valid:bg-backgroundLight peer-valid:top-0 peer-valid:text-xs"
          >
            {t("sua_mensagem")}
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-blue-500 to-red-500 text-text font-bold rounded hover:opacity-90 transition flex justify-center items-center"
        >
          {loading ? <Loader2 className="size-6 animate-spin" /> : t("enviar")}
        </button>
      </form>
    </div>
  );
}
