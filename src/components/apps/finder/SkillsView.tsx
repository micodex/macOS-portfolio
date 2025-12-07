import { MY_SKILLS } from "@/data/finder";

const SkillsView = () => {
  return (
    <div className="space-y-6">
      {MY_SKILLS.map(({ category, skills }) => (
        <div key={category}>
          <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
            {category}
          </h3>

          {/* skills in a category */}
          <div className="grid grid-cols-7">
            {skills.map(({ label, icon, level }) => (
              <div
                key={label}
                className="group flex flex-col gap-2 items-center p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="w-16">
                  <img
                    draggable={false}
                    src={`src/assets/files/${icon}`}
                    alt={`${label} icon`}
                  />
                </div>
                <div className="text-sm font-medium text-gray-700 text-center">
                  <span className="block group-hover:text-blue-600">
                    {label}
                  </span>
                  <span className="text-xs text-gray-400">{level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsView;
