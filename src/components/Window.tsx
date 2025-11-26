import { useEffect, useRef, useState } from "react";
import { X, Minus, Plus } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

interface WindowProps {
  id: string;
  title: string;
  x: number;
  y: number;
  z: number;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onFocus: (id: string) => void;
  content: React.ReactNode;
}

// dragable window component
const Window: React.FC<WindowProps> = ({
  id,
  title,
  x,
  y,
  z,
  isOpen,
  isMinimized,
  isMaximized,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  content,
}) => {
  // Track position locally for immediate feedback
  const [pos, setPose] = useState<Position>({ x, y });
  // console.log(pos);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // We use a Ref to store the offset because we need the *initial* click delta
  // unrelated to re-renders.

  const dragOffset = useRef<Position>({ x: 0, y: 0 });

  // Reset position if x or y props change (e.g. reset on re-open)
  // useEffect(() => {
  //   setPose({ x, y });
  // }, [x, y]);

  //  start dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent dragging if maximized
    if (isMaximized) return;
    setIsDragging(true);
    // Calculate where we clicked relative to the window's top-left corner
    dragOffset.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };

    // console.log("offset", dragOffset.current);
    // console.log(e.clientX, e.clientY);
  };

  // Handle moving (Global listener to prevent losing focus if mouse moves too fast)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      // console.log(e.clientX, dragOffset.current.x);
      setPose({
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // Return early check MUST happen after hooks are defined
  if (!isOpen) return null;

  // --- STYLE LOGIC ---
  const windowStyle: React.CSSProperties = {
    left: isMaximized ? 0 : pos.x,
    top: isMaximized ? 0 : pos.y,
    width: isMaximized ? "100%" : "32rem", // 32rem = w-128
    height: isMaximized ? "100%" : "20rem", // 20rem = h-80
    zIndex: z,
    transform: isMinimized
      ? `translate(${0}px, ${500}px) scale(0.5)`
      : "translate(0, 0) scale(1)",
    opacity: isMinimized ? 0 : 1,
    pointerEvents: isMinimized ? "none" : "auto",
    borderRadius: isMaximized ? 0 : "0.75rem",
  };

  return (
    <div
      onMouseDown={() => onFocus(id)}
      className={`absolute bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden border border-white/20 flex flex-col ${
        isDragging
          ? ""
          : "transition-all duration-300 ease-[cubic-bezier(0.25,0.8,0.25,1)]"
      }`}
      style={windowStyle}
    >
      {/* --- HEADER BAR --- */}
      <div
        className="h-10 bg-linear-to-br from-gray-100/80 to-gray-100/50 border-b border-gray-300/50 flex items-center justify-between px-4 select-none"
        onMouseDown={handleMouseDown}
        onDoubleClick={() => onMaximize(id)}
      >
        {/* Traffic Lights Container */}
        <div className="flex gap-2 group w-16">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose(id);
            }}
            className="w-4 h-4 rounded-full bg-[#FF5F57] border border-[#E0443E] flex items-center justify-center hover:bg-[#FF5F57]/80 active:brightness-90"
          >
            <X
              size={8}
              className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
              strokeWidth={4}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize(id);
            }}
            className="w-4 h-4 rounded-full bg-[#FEBC2E] border border-[#D89E24] flex items-center justify-center hover:bg-[#FEBC2E]/80 active:brightness-90"
          >
            <Minus
              size={8}
              className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
              strokeWidth={4}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMaximize(id);
            }}
            className="w-4 h-4 rounded-full bg-[#28C840] border border-[#1AAB29] flex items-center justify-center hover:bg-[#28C840]/80 active:brightness-90"
          >
            <Plus
              size={8}
              className="text-black/60 opacity-0 group-hover:opacity-100 transition-opacity"
              strokeWidth={4}
            />
          </button>
        </div>

        <div className="font-semibold text-sm text-gray-700/80 flex-1 text-center truncate px-2">
          {title}
        </div>
        <div className="w-16" />
      </div>

      {/* --- CONTENT --- */}
      <div className="flex-1 overflow-auto bg-white/50 p-6 text-gray-800">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default Window;
