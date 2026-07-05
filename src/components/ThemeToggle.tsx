"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("simi-web-theme") as "light" | "dark" | null;
    const next = stored || "light";
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("simi-web-theme", next);
    setTheme(next);
  }

  return (
    <button type="button" onClick={toggle} className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-sm shadow-soft transition active:scale-[0.97]" aria-label="Cambiar tema">
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
