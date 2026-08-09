import { useState } from "react";
import { SOCIAL_LINKS } from "@/data/mail";
import { customScrollbar } from "@/lib/scrollbar";
import { Bold, ChevronDown, Italic, Paperclip, Underline } from "lucide-react";
import SideBar from "../ui/SideBar";

const MailApp = () => {
  const [activeTab, setActiveTab] = useState("email");
  return (
    <div className="flex h-full window-backdrop">
      {/* sidebar */}
      <SideBar
        list={SOCIAL_LINKS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {/* main content */}
      <div className="flex-1 flex flex-col bg-background">
        {/* header */}
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center py-1.5 border-b">
            <span className="text-secondary-foreground w-16 text-sm text-right pr-4 font-medium">
              To:
            </span>
            <div className="bg-primary text-primary-foreground px-2 py-0.5 rounded text-sm flex items-center gap-1">
              <span>Developer</span>
              <ChevronDown size={12} />
            </div>
          </div>

          <div className="flex items-center py-1.5 border-b">
            <span className="text-secondary-foreground w-16 text-sm text-right pr-4 font-medium">
              Cc:
            </span>
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="flex-1 outline-none text-sm text-foreground placeholder-muted-foreground bg-transparent"
            />
          </div>

          <div className="flex items-center py-1.5 border-b">
            <span className="text-secondary-foreground w-16 text-sm text-right pr-4 font-medium">
              Subject:
            </span>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              className="flex-1 outline-none text-sm text-foreground placeholder-muted-foreground bg-transparent"
            />
          </div>

          <div className="flex items-center py-1.5">
            <span className="text-secondary-foreground w-16 text-sm text-right pr-4 font-medium">
              From:
            </span>
            <span className="text-muted-foreground text-sm">
              guest@icloud.com
            </span>
          </div>
        </div>

        {/* Formatting Bar */}
        <div className="px-6 py-2 bg-card text-card-foreground border-b flex items-center gap-4">
          <select className="bg-transparent text-xs font-medium outline-none">
            <option>Helvetica</option>
            <option>San Francisco</option>
          </select>

          <div className="h-4 w-px bg-border"></div>
          <Bold size={14} className="cursor-pointer hover:text-primary" />
          <Italic size={14} className="cursor-pointer hover:text-primary" />
          <Underline size={14} className="cursor-pointer hover:text-primary" />
          <div className="h-4 w-1px bg-gray-300"></div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Paperclip size={14} />
            <span className="text-xs">Attach</span>
          </div>
        </div>

        {/* Body - text area */}
        <div className="flex-1 p-6 overflow-hidden bg-muted">
          <textarea
            name="message"
            placeholder="Hi there,&#10;&#10;I'd love to discuss a potential collaboration..."
            className={`w-full h-full resize-none outline-none  placeholder:text-muted-foreground text-base leading-relaxed font-sans ${customScrollbar}`}
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default MailApp;
