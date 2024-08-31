import { useEffect, useState } from "react";

export enum MediaQueryType {
  MOBILE = "MOBILE",
  TABLET = "TABLET",
  DESKTOP = "DESKTOP",
  DESKTOP_2XL = "DESKTOP_2XL",
  SMALL_SCREEN = "SMALL_SCREEN", // 높이가 짧은 화면
  SHORT_SCREEN = "SHORT_SCREEN",
  TALL_SCREEN = "TALL_SCREEN", // 높이가 긴 화면
}

export enum MediaQuerySize {
  SMALL = 0,
  MEDIUM,
  LARGE,
}

export const useMediaQuery = () => {
  const [mediaQuery, setMediaQuery] = useState<MediaQueryType>(MediaQueryType.MOBILE);

  const handleMediaQuery = (event: MediaQueryListEvent, queryType: MediaQueryType) => {
    if (event.matches) setMediaQuery(queryType);
  };

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const tabletQuery = window.matchMedia("(min-width: 769px) and (max-width: 1023px)");
    const desktopQuery = window.matchMedia("(min-width: 1024px) and (max-width: 1535px)");
    const desktop2XLQuery = window.matchMedia("(min-width: 1536px)");

    const heightMobileQuery = window.matchMedia("(max-height: 500px)");
    const heightShortQuery = window.matchMedia("(min-height: 501px) and (max-height: 800px)");
    const heightTallQuery = window.matchMedia("(min-height: 801px)");

    // 초기 미디어 쿼리 상태 설정
    if (mobileQuery.matches || heightMobileQuery.matches) {
      setMediaQuery(MediaQueryType.MOBILE);
    } else if (tabletQuery.matches || heightShortQuery.matches) {
      setMediaQuery(MediaQueryType.TABLET);
    } else if (desktopQuery.matches || heightTallQuery.matches) {
      setMediaQuery(MediaQueryType.DESKTOP);
    } else if (desktop2XLQuery.matches) {
      setMediaQuery(MediaQueryType.DESKTOP_2XL);
    }

    // 이벤트 리스너 추가
    mobileQuery.addEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.MOBILE));
    tabletQuery.addEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.TABLET));
    desktopQuery.addEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.DESKTOP));
    desktop2XLQuery.addEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.DESKTOP_2XL));
    // Cleanup 함수에서 이벤트 리스너 제거
    return () => {
      mobileQuery.removeEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.MOBILE));
      tabletQuery.removeEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.TABLET));
      desktopQuery.removeEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.DESKTOP));
      desktop2XLQuery.removeEventListener("change", (event) => handleMediaQuery(event, MediaQueryType.DESKTOP_2XL));
    };
  }, []);

  return mediaQuery;
};
