"use client";
import PageTitle from "@/components/PageTitle";
import ServiceCart from "./components/ServiceCart";
import { useEffect, useState } from "react";
import ServiceAddModal from "./components/ServiceAddModal";
import { deleteService, getServices } from "@/api/services/service.api";
import { Service } from "@/types/services.type";
import { useToast } from "@/Providers/MessageProvider";

function Services() {
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const { error, success } = useToast();
  useEffect(() => {
    getServices()
      .then((res) => setServices(res.data))
      .catch((err) => console.error(err));
  }, []);

  const [id, setId] = useState<number>(0);

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteService(id);
      console.log(res);
      setServices((prev) => prev.filter((s) => s.id !== id));
      success(res.message);
    } catch (err: any) {
      console.error(err);
      error(err.message);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 sticky top-0 bg-(--bg) pt-5">
        <PageTitle title="Xizmatlar" />
        <button
          onClick={() => setOpen(true)}
          className="bg-(--surface) cursor-pointer py-1 px-2 rounded-md"
        >
          Xizmat qo'shish
        </button>
      </div>
      <div className="flex w-full justify-between gap-5 flex-wrap mt-5">
        {services && services.length > 0 ? (
          services.map((service) => (
            <ServiceCart
              key={service.id}
              title={service.localeData.uz.title}
              desc={service.localeData.uz.desc}
              image={service.icon}
              onDelete={() => handleDelete(service.id)}
              onEdit={() => setId(service.id)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-20 text-stone-400">
            <svg
              className="w-16 h-16 mb-4 text-stone-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 17v-6m4 6v-4m4 4V9M5 21h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
            <p className="text-lg font-medium">Xizmatlar mavjud emas</p>
            <p className="text-sm mt-1">
              Hozircha hech qanday xizmat qo'shilmagan
            </p>
          </div>
        )}
      </div>

      <ServiceAddModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default Services;
