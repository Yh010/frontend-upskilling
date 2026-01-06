import { createContext } from "react";

export type ContentType =
  | "home"
  | "experience"
  | "motion"
  | "contactme"
  | "projects"
  | "certificates"
  | "blogsNmedia";

export const ContentContext = createContext("");