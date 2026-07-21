import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Ambient glow background */}
      <div className="ambient-glow" />
      
      {/* Galaxy background */}
      <div className="galaxy-background" data-fallback="true" />
      
      {/* Gradient container */}
      <div className="gradient-container">
        {/* Primary gradient */}
        <div className="gradient-primary" />
        
        {/* Secondary gradient */}
        <div className="gradient-secondary" />
      </div>
    </>
  );
}
