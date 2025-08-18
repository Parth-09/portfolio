// src/lib/paths.js
export const base = import.meta.env.BASE_URL || "/";

export const asset = (p = "") =>
  `${base}${String(p).replace(/^\/+/, "")}`; // ensures no double slashes
