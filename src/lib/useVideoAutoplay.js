import { useEffect, useRef } from "react";

/* Muted, looping product videos that play only while scrolled into view.
   Keeps the page light: off-screen videos are paused automatically. */
export function useVideoAutoplay() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => video.play().catch(() => {});
    const pause = () => video.pause();

    if (!("IntersectionObserver" in window)) {
      play();
      return () => pause();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? play() : pause()));
      },
      { threshold: 0.35 }
    );
    observer.observe(video);

    return () => {
      observer.disconnect();
      pause();
    };
  }, []);

  return videoRef;
}
