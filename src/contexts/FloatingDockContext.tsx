"use client";

import { createContext, useContext, useState } from "react";

interface FloatingDockContextType {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const FloatingDockContext = createContext<FloatingDockContextType | undefined>(
  undefined
);

export const FloatingDockProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(true); // Default: visible

  return (
    <FloatingDockContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </FloatingDockContext.Provider>
  );
};

export const useFloatingDock = () => {
  const context = useContext(FloatingDockContext);
  if (!context) {
    throw new Error(
      "useFloatingDock must be used within a FloatingDockProvider"
    );
  }
  return context;
};
