// This component determines which experience to render ( Desktop or Mobile ) based on the viewport width

import { lazy, Suspense, useEffect, useState } from "react";

import MobileLanding from "@/mobile/MobileLanding";
const DesktopEntry = lazy(() => import("@/desktop/DesktopEntry"));

const DESKTOP_QUERY = "(min-width: 641px)";

export default function DeviceRouter() {
  const [isDesktop, setIsDesktop] = useState<Boolean>(() => {
    return window.matchMedia(DESKTOP_QUERY).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_QUERY);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  if (!isDesktop) {
    return <MobileLanding />;
  }

  return (
    <Suspense fallback={null}>
      <DesktopEntry />
    </Suspense>
  );
}
