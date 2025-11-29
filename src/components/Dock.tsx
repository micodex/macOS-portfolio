import { useOS } from "@/context/OSContext";

const Dock = () => {
  const { state, dispatch } = useOS();

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-2xl border border-white/20 p-2 rounded-2xl flex gap-3 shadow-2xl z-[99999]">
      {state.apps.map((app) => (
        <button
          key={app.id}
          onClick={() => dispatch({ type: "OPEN", id: app.id })} // Dispatching Action
          className={`
            relative group p-3 rounded-2xl transition-all duration-300
            ${
              app.isOpen && !app.isMinimized
                ? "bg-white/30 -translate-y-2 scale-110"
                : "hover:bg-white/20 hover:scale-110"
            }
          `}
        >
          <app.icon size={32} className="text-white drop-shadow-md" />

          {/* Dot Indicator */}
          <div
            className={`
            absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full transition-all
            ${app.isOpen ? "opacity-100" : "opacity-0"}
          `}
          />
        </button>
      ))}
    </div>
  );
};

export default Dock;
