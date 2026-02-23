import { IRequests } from "@/types/requests.type";

function ViewReqModal({
  isOpen,
  onClose,
  request,
}: {
  isOpen: boolean;
  onClose: () => void;
  request: IRequests | undefined;
}) {
  if (!isOpen) return null;
  if (!request) return null;
  console.log(request);
  
  return (
    <div className="fixed inset-0 left-0 top-0 z-50">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => onClose()}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-full max-w-lg p-6 rounded-xl border border-gray-200 bg-(--card) shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-lg font-semibold text-white">
            Murojaat #{request?.id}
          </h2>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
            {request?.heardFrom}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-white mb-1">Ism</p>
            <p className="text-white font-medium">{request?.name}</p>
          </div>

          <div>
            <p className="text-xs text-white mb-1">Telefon</p>
            <p className="text-white font-medium">{request?.number}</p>
          </div>

          <div className="col-span-2">
            <p className="text-xs text-white mb-1">Murojaat</p>
            <p className="text-white">{request?.about}</p>
          </div>

          <div>
            <p className="text-xs text-white mb-1">Sana</p>
            <p className="text-white">
              {request.createdAt
                ? new Date(request.createdAt).toLocaleString("uz-UZ")
                : "—"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewReqModal;
