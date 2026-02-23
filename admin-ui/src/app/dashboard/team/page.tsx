"use client";

import { getTeam } from "@/api/team.api";
import PageTitle from "@/components/PageTitle";
import { TeamMember } from "@/types/team.type";
import TeamCard from "./components/TeamCard";
import { useEffect, useState } from "react";
import CreateModal from "./components/CreateModal";

function Team() {
  const [data, setData] = useState<TeamMember[] | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getTeam()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-5 sticky top-0 z-50 bg-[#060e10] pt-5">
        <PageTitle title="Jamoa" />

        <button
          onClick={() => setIsOpen(true)}
          className="bg-(--surface) cursor-pointer py-1 px-2 rounded-md z-50"
        >
          Yangi jamoadosh
        </button>
      </div>

      <div className="flex flex-wrap h-full gap-5 w-full">
        {data && data.length > 0 ? (
          data.map((member) => (
            <TeamCard
              onSuccess={() => {
                getTeam()
                  .then((res) => setData(res.data))
                  .catch((err) => console.log(err));
              }}
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              photo={member.photo}
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <p className="text-lg font-medium">Jamoa a'zolari mavjud emas</p>
            <p className="text-sm mt-1">
              Hozircha hech qanday jamoa a'zosi qo'shilmagan
            </p>
          </div>
        )}
      </div>

      <CreateModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSuccess={() => {
          getTeam()
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
        }}
      />
    </div>
  );
}

export default Team;
