import ImageSkeleton from "@/components/ui/ImageSkeleton";
import { customScrollbar } from "@/lib/scrollbar";
import { type Project } from "@/data/finder";

const ProjectPage = ({ project }: { project: Project }) => (
  <div
    className={`h-full bg-background overflow-auto py-10 ${customScrollbar}`}
  >
    {/* Hero Header */}
    <div className="relative flex flex-col items-center justify-center text-center">
      <div className="mb-4">
        <h1 className="text-4xl font-bold mb-2 drop-shadow-xl">
          {project.title}
        </h1>
        <p className="opacity-80 max-w-md mx-auto text-secondary-foreground">
          {project.desc}
        </p>
      </div>

      {/* project links */}
      <div className="flex gap-4 mb-8">
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground px-4 py-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground
            cursor-pointer transition-colors shadow-lg border border-border active:scale-90"
        >
          Demo
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black/90 text-white dark:bg-white/90 dark:text-black hover:bg-primary
            hover:text-primary-foreground transition-colors shadow-lg rounded-full
            border border-border active:scale-90 cursor-pointer"
        >
          GitHub
        </a>
      </div>
      {/* Project Screenshot */}
      <div className="relative w-200">
        <ImageSkeleton
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={`${project.title} screenshot`}
          className="aspect-video"
        />
      </div>
    </div>

    {/* Content Mockup */}
    <div className="max-w-3xl mx-auto p-8">
      <div className="flex gap-2 mb-8 justify-center">
        {project.tags.map((t) => (
          <span
            key={t}
            className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground border"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        <div className="h-4 bg-foreground/10 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-foreground/10 rounded w-full animate-pulse" />
        <div className="h-4 bg-foreground/10 rounded w-full animate-pulse" />
        <div className="h-4 bg-foreground/10 rounded w-3/4 animate-pulse" />
      </div>
    </div>
  </div>
);

export default ProjectPage;
