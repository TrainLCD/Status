import DATA from "../../status.json";

export type Status =
  | "operational"
  | "maintenance"
  | "degraded"
  | "outage"
  | "unknown";

type StatusData = {
  id: number;
  name: string;
  status: Status;
  description_en: string;
  description_ja: string;
  status_since: string;
  updated_at: string;
};

export const isOperational = (() =>
  DATA.every((d) => d.status === "operational"))();
export const hasUnderMaintenanceService = (() =>
  DATA.some((d) => d.status === "maintenance"))();
export const hasDegradedService = (() =>
  DATA.some((d) => d.status === "degraded"))();
export const hasOutage = (() => DATA.some((d) => d.status === "outage"))();
export const services = DATA as StatusData[];
