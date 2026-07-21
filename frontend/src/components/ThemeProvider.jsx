import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Apply theme immediately before page renders (matching target site logic)
    try {
      const storedTheme = localStorage.getItem("emergent-theme");
      let currentTheme = storedTheme;
      
      if (!currentTheme) {
        const isLoggedIn = Object.keys(localStorage).some((k) =>
          k.startsWith("sb-") && k.endsWith("-auth-token")
        );
        currentTheme = isLoggedIn ? "dark" : "system";
      }
      
      if (
        currentTheme === "light" ||
        (currentTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: light)").matches)
      ) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        setTheme("light");
      } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        setTheme("dark");
      }
    } catch (e) {
      // Default to dark if error
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const changeTheme = (newTheme) => {
    try {
      localStorage.setItem("emergent-theme", newTheme);
      
      if (
        newTheme === "light" ||
        (newTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: light)").matches)
      ) {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
        setTheme("light");
      } else {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
        setTheme("dark");
      }
    } catch (e) {
      console.error("Failed to save theme preference", e);
    }
  };

  if (!mounted) {
    return <div className="hidden">{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
