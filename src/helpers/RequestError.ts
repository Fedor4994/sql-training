import { ErrorWithStatus } from "../types/error.js";

export const RequestError = (status: number, message: string) => {
  const error = new Error(message) as ErrorWithStatus;
  error.status = status;
  return error;
};
