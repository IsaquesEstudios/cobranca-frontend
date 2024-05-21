import axios from "axios";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import nookies from "nookies";

const development = "http://localhost:3333";
const production = "https://main-form.herokuapp.com/"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const { token } = nookies.get();

export const api = axios.create({
  baseURL: production,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
