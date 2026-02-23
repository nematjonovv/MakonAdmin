"use client";
import { deleteTestimonial, getTestimonials } from "@/api/testimonial.api";
import PageTitle from "@/components/PageTitle";
import { useToast } from "@/Providers/MessageProvider";
import { TestimonialDto } from "@/types/testimonial.type";
import { useEffect, useState } from "react";
import { TestimonialTable } from "./component/TestimonialTable";
import TestimonialCreateModal from "./component/TestimonialCreateModal";

function Testimonial() {
  const { error, success } = useToast();
  const [testimonials, setTestimonials] = useState<TestimonialDto[] | null>(
    null,
  );
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getTestimonials()
      .then((res) => setTestimonials(res.data))
      .catch((err: any) => error(err.message));
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteTestimonial(id);
      if (res.success) {
        success(res.message);
      } else {
        error(res.message);
      }
      setTestimonials((prev) =>
        prev ? prev.filter((item) => item.id !== id) : null,
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-5 sticky top-0 z-10 bg-[#060e10] pt-5">
        <PageTitle title="Mijozlar fikri" />

        <button
          onClick={() => setIsOpen(true)}
          className="bg-(--surface) cursor-pointer py-1 px-2 rounded-md z-50"
        >
          Yangi Fikr
        </button>
      </div>

      <div className="flex flex-wrap h-full gap-5 w-full">
        {testimonials && testimonials.length > 0 ? (
          <TestimonialTable
            data={testimonials}
            onDelete={(id) => handleDelete(id)}
          />
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
                d="M9 10h.01M15 10h.01M7 16h10M5 4h14a2 2 0 012 2v10a2 2 0 01-2 2h-4l-3 3-3-3H5a2 2 0 01-2-2V6a2 2 0 012-2z"
              />
            </svg>

            <p className="text-lg font-medium">Testimonial mavjud emas</p>
            <p className="text-sm mt-1">
              Hozircha hech qanday mijoz fikri qo'shilmagan
            </p>
          </div>
        )}
      </div>
      <TestimonialCreateModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={() => {
          getTestimonials()
            .then((res) => setTestimonials(res.data))
            .catch((err: any) => error(err.message));
        }}
      />
    </div>
  );
}

export default Testimonial;
