import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import nookies from "nookies";

const development = "http://localhost:3333";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const { token } = nookies.get();

export const api = axios.create({
  baseURL: development,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
