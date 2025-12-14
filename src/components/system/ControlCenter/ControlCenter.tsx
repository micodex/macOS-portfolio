import { Controls } from "./controls.config";

import {
  CircularControl,
  WideControl,
  SliderControl,
  MusicControl,
} from "./ControlWidgets";

const ControlCenter = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed top-14 right-4 w-76 z-100 animate-in
        slide-in-from-top-4 fade-in duration-200 select-none
        ${isOpen ? "visible" : "hidden"}
      `}
    >
      {/* bento grid */}
      <div className="grid grid-cols-4 gap-2">
        {Controls.map((control) => {
          const spanClass = `${control.colSpan || "col-span-1"} ${
            control.rowSpan || ""
          }`; // example 'col-span-2 row-span-2' for music control

          return (
            <div
              key={control.id}
              className={`${spanClass} flex justify-center`}
            >
              {control.type === "circular" && (
                <CircularControl data={control} />
              )}
              {control.type === "wide" && <WideControl data={control} />}
              {control.type === "slider" && <SliderControl data={control} />}
              {control.type === "music" && <MusicControl />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ControlCenter;
