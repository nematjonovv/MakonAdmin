import { Service } from "@/types/services.type";
import { Edit, Trash2 } from "lucide-react";
import Image from "next/image";
import { Button, Popconfirm } from "antd";
function ServiceCart({
  title,
  desc,
  image,
  onDelete,
  onEdit,
}: {
  title: string;
  desc: string;
  image: string;
  onDelete: () => void;
  onEdit: () => void;
}) {
  return (
    <div
      className={`group relative h-70 border border-(--card-border) backdrop-blur-md bg-(--card) rounded-4xl pt-6.5 px-9 pb-10 flex items-center overflow-hidden w-1/2 lg:flex-1 lg:min-w-[calc(50%-10px)]`}
    >
      <div className="absolute hidden group-hover:flex left-0 top-0 backdrop-blur-sm w-full h-full rounded-4xl bg-black/50 z-15   justify-end pr-7 pt-5 items-start">
        <div className="flex items-center gap-3">
          <Popconfirm
            title="Xizmatni o'chirish"
            description="Haqiqatan o‘chirishni xohlaysizmi?"
            okText="Ha"
            cancelText="Yo'q"
            className=""
            onConfirm={onDelete}
          >
            <Button className="cursor-pointer !bg-transparent !border-none !text-white !py-5 !px-3 !rounded-xl hover:!bg-neutral-950 hover:!text-red-600">
              <Trash2 />
            </Button>
          </Popconfirm>
          <button
            disabled
            title="soon..."
            onClick={() => onEdit()}
            className="cursor-not-allowed !bg-transparent !border-none !text-white !py-2.5 !px-3 !rounded-xl hover:!bg-neutral-950 hover:!text-blue-600"
          >
            <Edit />
          </button>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between z-10">
        <div className="">
          <h4 className="text-4xl text-(--text) font-clashGrotesk font-medium whitespace-nowrap">
            {title}
          </h4>
          <p className="text-sm md:max-w-1/2 text-(--secondarytext) mt-2 mb-15">
            {desc}
          </p>
        </div>
      </div>

      <Image
        draggable="false"
        src={image}
        alt="service image"
        height={400}
        width={400}
        className="absolute object-contain -right-11 -bottom-20 hidden md:block"
      />
    </div>
  );
}

export default ServiceCart;
