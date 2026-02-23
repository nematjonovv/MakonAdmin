import { TestimonialDto } from "@/types/testimonial.type";
import { Popconfirm } from "antd";
import { Pencil, PencilIcon, PencilLine, Trash } from "lucide-react";
import React from "react";

type LocalizedField = {
  uz: string;
  ru: string;
};

type Props = {
  data: TestimonialDto[];
  // onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TestimonialTable: React.FC<Props> = ({
  data,
  // onEdit,
  onDelete,
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left border border-stone-200">
        <thead className="bg-(--card) text-white uppercase font-clashGrotesk font-normal text-xs">
          <tr>
            <th className="px-4 py-3">Preview</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Lavozim</th>
            <th className="px-4 py-3">Izoh</th>
            <th className="px-4 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            const hasVideo = !!item.videoUrl;
            const hasPhoto = !!item.photoUrl;

            return (
              <tr
                key={item.id}
                className="border-t hover:bg-(--card)  transition"
              >
                {/* Preview */}
                <td className="px-4 py-3">
                  {hasPhoto && (
                    <div className="relative w-14 h-14">
                      <img
                        src={item.photoUrl}
                        alt={item.altImage.image.uz}
                        className="w-14 h-14 object-cover rounded-md border"
                      />

                      {hasVideo && (
                        <div
                          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/40 rounded-md"
                          onClick={() => console.log(true)}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      )}
                    </div>
                  )}
                </td>

                {/* Name */}
                <td className="px-4 py-3 font-medium text-white">
                  {item.name}
                </td>

                {/* Position */}
                <td className="px-4 py-3">
                  {item.localizedContent.uz.position}
                </td>

                {/* Content */}
                <td className="px-4 py-3 max-w-xs truncate">
                  {item.localizedContent.uz.content}
                </td>

                {/* Actions */}
                <td className="px-4 py-3 text-right space-x-2">
                  <button
                    // onClick={() => onEdit(item.id)}
                    className="px-2 py-1 text-xs rounded-md cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
                  >
                    {<Pencil size={14} />}
                  </button>

                  <Popconfirm
                    title="Fikrni o'chirish"
                    description={`Haqiqatan ${item.name} fikrini o'chirishni xohlaysizmi?`}
                    okText="Ha"
                    cancelText="Yo'q"
                    className=""
                    // onConfirm={onDelete}
                  >
                    <button
                      onClick={() => onDelete(item.id)}
                      className="px-2 py-1 text-xs rounded-md cursor-pointer bg-red-500 text-white hover:bg-red-600"
                    >
                      <Trash size={14} />
                    </button>
                  </Popconfirm>
                </td>
              </tr>
            );
          })}

          {data.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-10 text-stone-400">
                Testimonial mavjud emas
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
