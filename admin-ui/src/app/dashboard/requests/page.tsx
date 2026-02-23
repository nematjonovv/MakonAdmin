"use client";
import { getRequests } from "@/api/requests.api";
import PageTitle from "@/components/PageTitle";
import { useToast } from "@/Providers/MessageProvider";
import { IRequests } from "@/types/requests.type";
import { useEffect, useState } from "react";
import RequestsTable from "./components/RequestsTable";

function Requests() {
  return (
    <div>
      <div className="flex justify-between items-center border-b border-neutral-700 pb-2 mb-5 pt-5 sticky top-0 z-50 bg-(--bg)">
        <PageTitle title="Murojatlar" />
      </div>
      <div>
        <RequestsTable />
      </div>
    </div>
  );
}

export default Requests;
