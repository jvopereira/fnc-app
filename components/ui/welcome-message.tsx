"use client";

import { useMemo } from "react";
import { useUser } from "@clerk/nextjs";

export const WelcomeMessage = () => {
  const { user, isLoaded } = useUser();
  const greeting = useMemo(() => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 18) return "Good afternoon";
    return "Good evening";
  }, []);

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        {greeting}{isLoaded ? ", " : " "}{user?.firstName}
      </h2>
      <p className="text-sm lg:text-base text-[#89b6fd]">
				Welcome back to FNC App! Here's to a productive day managing your finances.
			</p>
    </div>
  );
};
