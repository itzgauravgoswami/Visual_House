"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, SkipForward } from "lucide-react";

const TOTAL_FRAMES = 300;
const TARGET_FPS = 40;
const FRAME_INTERVAL = 1000 / TARGET_FPS; // 25ms per frame

export default function IntroAnimation() {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isPreloaded, setIsPreloaded] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentFrameRef = useRef(0);
  const animFrameIdRef = useRef(null);
  const lastFrameTimeRef = useRef(0);

  // Helper to draw a specific frame onto the canvas cleanly with cover math
  const drawFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    // Preserve aspect ratio (object-fit: cover equivalent)
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = width / height;

    let renderW, renderH, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      renderW = width;
      renderH = width / imgAspect;
      offsetX = 0;
      offsetY = (height - renderH) / 2;
    } else {
      renderW = height * imgAspect;
      renderH = height;
      offsetX = (width - renderW) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
  }, []);

  // Update canvas sizing for high-DPI displays
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    
    // Redraw current frame on resize
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  // Lock body scroll while animation is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // 1. Preload image frame sequence
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = new Array(TOTAL_FRAMES);
    imagesRef.current = loadedImages;

    let isMounted = true;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;

      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        const progress = Math.min(Math.round((loadedCount / TOTAL_FRAMES) * 100), 100);
        setLoadingProgress(progress);

        if (loadedCount === TOTAL_FRAMES) {
          setIsPreloaded(true);
        }
      };

      img.onerror = () => {
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setIsPreloaded(true);
        }
      };

      loadedImages[i - 1] = img;
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Setup canvas dimensions & resize listener once preloaded
  useEffect(() => {
    if (!isPreloaded) return;

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isPreloaded, resizeCanvas]);

  // 3. Main 30 FPS Animation Loop
  useEffect(() => {
    if (!isPreloaded || isFadingOut || isComplete) return;

    lastFrameTimeRef.current = performance.now();
    currentFrameRef.current = 0;
    drawFrame(0);

    const animate = (now) => {
      const elapsed = now - lastFrameTimeRef.current;

      if (elapsed >= FRAME_INTERVAL) {
        // Advance frame based on elapsed time to ensure steady 30 FPS timing
        const framesToAdvance = Math.floor(elapsed / FRAME_INTERVAL);
        lastFrameTimeRef.current = now - (elapsed % FRAME_INTERVAL);

        const nextFrame = currentFrameRef.current + framesToAdvance;

        if (nextFrame >= TOTAL_FRAMES - 1) {
          currentFrameRef.current = TOTAL_FRAMES - 1;
          drawFrame(TOTAL_FRAMES - 1);
          handleFinish();
          return;
        } else {
          currentFrameRef.current = nextFrame;
          drawFrame(nextFrame);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isPreloaded, isFadingOut, isComplete, drawFrame]);

  // Handle completion and fade out
  const handleFinish = useCallback(() => {
    if (animFrameIdRef.current) {
      cancelAnimationFrame(animFrameIdRef.current);
    }
    setIsFadingOut(true);
    setTimeout(() => {
      setIsComplete(true);
      document.body.style.overflow = "";
    }, 600);
  }, []);

  // Handle manual skip
  const handleSkip = useCallback(() => {
    handleFinish();
  }, [handleFinish]);

  if (isComplete) return null;

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center overflow-hidden select-none pointer-events-auto"
        >
          {/* Fullscreen Animation Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full object-cover block z-0"
          />

          {/* Preloader overlay while frames buffer */}
          {!isPreloaded && (
            <div className="relative z-10 flex flex-col items-center justify-center space-y-5 px-4 text-center">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[#c5a059]/40 backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#c5a059] animate-spin" />
                <span className="text-xs font-mono tracking-widest text-[#c5a059] uppercase">
                  Loading Experience...
                </span>
              </div>

              {/* Progress Bar Container */}
              <div className="w-64 sm:w-80 h-1.5 bg-zinc-900 rounded-full overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(197,160,89,0.2)]">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#9a7b38] via-[#c5a059] to-[#fef08a] rounded-full"
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </div>

              <div className="text-[11px] font-mono text-zinc-400 tracking-wider">
                {loadingProgress}%
              </div>
            </div>
          )}

          {/* Skip Button */}
          <motion.button
            onClick={handleSkip}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/70 hover:bg-black/90 border border-white/15 hover:border-[#c5a059]/50 text-xs font-mono tracking-wider text-zinc-300 hover:text-white backdrop-blur-md transition-all duration-200 active:scale-95 group shadow-lg cursor-pointer"
          >
            <span>SKIP INTRO</span>
            <SkipForward className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
