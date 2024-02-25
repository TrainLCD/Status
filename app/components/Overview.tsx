import { hasOutage, hasUnderMaintenanceService } from "../utils/availability";
import { CheckmarkIcon } from "./icons/Checkmark";
import { ErrorIcon } from "./icons/Error";
import { MaintenanceIcon } from "./icons/Maintenance";

export const Overview = () => {
  const statusObj = (() => {
    if (hasUnderMaintenanceService) {
      return {
        rgba: "rgba(234,179,8,0.1)",
        className: "text-yellow-500",
        text: "TrainLCDサービスは現在メンテナンス中です。",
        Icon: MaintenanceIcon,
      };
    }
    if (hasOutage) {
      return {
        rgba: "rgba(239,68,68,0.1)",
        className: "text-red-500",
        text: "TrainLCDサービスにて障害が発生しております。",
        Icon: ErrorIcon,
      };
    }
    return {
      rgba: "rgba(34,197,94,0.1)",
      className: "text-green-500",
      text: "すべてのサービスは正常に動作しています。",
      Icon: CheckmarkIcon,
    };
  })();

  const { Icon } = statusObj;

  return (
    <div className="flex justify-center flex-col items-center">
      <Icon
        className={`size-32 ${statusObj.className} drop-shadow-[0_1px_2px_${statusObj.rgba}]`}
      />
      <h1 className="mt-4 font-bold text-2xl text-center">{statusObj.text}</h1>
    </div>
  );
};
