// data
import { NOTE_LINKS } from "@/data/note";

// image import
import ProfileImg from "@/assets/images/profile.jpg";

// style
import * as motion from "motion/react-client";
import { customScrollbar } from "@/lib/scrollbar";

// ui
import ImageSkeleton from "../ui/ImageSkeleton";

const NoteApp = () => {
  return (
    <div
      className={`relative h-full p-6 bg-background/80
      window-backdrop overflow-y-scroll ${customScrollbar}`}
    >
      <span className="mb-4 block text-sm text-center text-muted-foreground">
        Wed, 2025 Dec 10, 1:43 PM
      </span>

      <h2 className="mb-6 font-bold text-2xl">Profile</h2>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <ImageSkeleton
            src={ProfileImg}
            alt="profile picture"
            className="select-none opacity-89 w-full aspect-square"
          />
        </div>
        <span className="mt-2 font-semibold">Milad Gharibi</span>
        <span className="text-sm text-muted-foreground">
          Front-End Developer
        </span>
        <div className="mt-4 flex gap-10">
          {NOTE_LINKS.map(({ icon: Icon, url }) => (
            <motion.a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.8 }}
            >
              {<Icon size={30} />}
            </motion.a>
          ))}
        </div>
      </div>

      {/* seperator */}
      <div className="my-6 border-b-3 border-dotted border-gray-500"></div>

      <section>
        <h3 className="text-lg font-bold">About me</h3>
        <p className="mt-2">
          I&apos;m a self-taught{" "}
          <b className="underline decoration-wavy decoration-yellow-600">
            web developer
          </b>{" "}
          focused on creating clean, fast, and modern web experiences. I enjoy
          turning ideas into functional products with attention to detail.
          <br></br>
          <br></br>I work mainly with <mark>React</mark>, <mark>Next.js</mark>{" "}
          <b>TypeScript</b>, and <b>Tailwind CSS</b> .I love learning new tools
          and improving my craft every day. Currently building real-world
          projects to sharpen my skills.
        </p>
      </section>
    </div>
  );
};

export default NoteApp;
