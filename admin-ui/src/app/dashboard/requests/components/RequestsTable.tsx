import { deleteRequest, getRequests } from "@/api/requests.api";
import { useToast } from "@/Providers/MessageProvider";
import { IRequests } from "@/types/requests.type";
import { Popconfirm } from "antd";
import { Eye, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import ViewReqModal from "./ViewReqModal";

export default function RequestsTable() {
  const [requests, setRequests] = useState<IRequests[]>();
  const { error, success } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [targetReq, setTargetReq] = useState<IRequests | undefined>();
  useEffect(() => {
    getRequests()
      .then((res) => setRequests(res.data ?? []))
      .catch((err) => error(err));
  }, []);
  const ViewReq = (req: IRequests) => {
    setIsOpen(true);
    setTargetReq(req);
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await deleteRequest(id);
      if (res.success) {
        success(res.message);
        setRequests((prev) => prev?.filter((f) => f.id !== id));
      } else {
        error(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rounded-xl border border-gray-200 bg-(--card) text-white shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-(--surface) border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left font-semibold text-white">#</th>
            <th className="px-4 py-3 text-left font-semibold text-white">
              Ism
            </th>
            <th className="px-4 py-3 text-left font-semibold text-white">
              Telefon
            </th>
            <th className="px-4 py-3 text-left font-semibold text-white">
              Murojaat
            </th>
            <th className="px-4 py-3 text-left font-semibold text-white">
              Qayerdan
            </th>
            <th className="px-4 py-3 text-left font-semibold text-white">
              Sana
            </th>
            <th className="px-4 py-3 text-center font-semibold text-white">
              Amal
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {requests?.map((req) => (
            <tr
              key={req.id}
              className="bg-(--card) hover:bg-(--bg) transition-colors"
            >
              <td className="px-4 py-3 text-white">{req.id}</td>
              <td className="px-4 py-3 font-medium text-white">{req.name}</td>
              <td className="px-4 py-3 text-white">{req.number}</td>
              <td className="px-4 py-3 text-white max-w-50 truncate">
                {req.about}
              </td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                  {req.heardFrom}
                </span>
              </td>
              <td className="px-4 py-3 text-neutral-400">
                {new Date(req.createdAt).toLocaleDateString("uz-UZ")}
              </td>
              <td className="px-4 py-3 text-center">
                <Popconfirm
                  title="Murojatni o'chirish"
                  description={`Haqiqatdan ${req.name}jonni murojatini o'chirishni istaysizmi?`}
                  okText="Ha"
                  cancelText="Yo'q"
                  className=""
                  onConfirm={() => handleDelete(req.id)}
                >
                  <button className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-500 hover:text-red-500 hover:bg-neutral-800 transition-colors cursor-pointer">
                    <Trash2 size={16} />
                  </button>
                </Popconfirm>
                <button
                  onClick={() => ViewReq(req)}
                  title="To'liq ko'rish"
                  className="inline-flex items-center justify-center p-2 rounded-lg text-neutral-500 hover:text-blue-400 hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <Eye size={16} />
                </button>
              </td>
            </tr>
          ))}

          {requests?.length === 0 && (
            <tr>
              <td colSpan={7} className="px-4 py-8 text-center text-gray-400">
                Ma'lumot topilmadi
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ViewReqModal
        request={targetReq}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}
