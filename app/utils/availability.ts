import DATA from "../../data/status.json";

export const isOperational = (() =>
  DATA.every((d) => d.status === "operational"))();
export const hasUnderMaintenanceService = (() =>
  DATA.some((d) => d.status === "maintenance"))();
export const hasOutage = (() => DATA.some((d) => d.status === "outage"))();
