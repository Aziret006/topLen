// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Maximize2 } from "lucide-react";

// interface RoadmapProps {
//   className?: string;
// }

// export function Roadmap({ className }: RoadmapProps) {
//   const roadmapRef = useRef<HTMLDivElement>(null);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const toggleFullscreen = async () => {
//     if (!roadmapRef.current) return;

//     try {
//       if (!isFullscreen) {
//         if (roadmapRef.current.requestFullscreen) {
//           await roadmapRef.current.requestFullscreen();
//         }
//       } else {
//         if (document.exitFullscreen) {
//           await document.exitFullscreen();
//         }
//       }
//     } catch (err) {
//       console.error("Error attempting to toggle fullscreen:", err);
//     }
//   };

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(document.fullscreenElement !== null);
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   return (
//     <div ref={roadmapRef} className={`relative ${className}`}>
//       <Image
//         src="/roadmap.png"
//         alt="Roadmap"
//         width={1340}
//         height={754}
//         className="w-full h-auto"
//         priority
//       />
//       <Button
//         variant="outline"
//         size="lg"
//         className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75 hidden md:hidden sm:hidden max-[480px]:flex items-center gap-2"
//         onClick={toggleFullscreen}
//       >
//         <Maximize2 className="h-4 w-4" />
//         Развернуть на весь экран
//       </Button>
//     </div>
//   );
// }
