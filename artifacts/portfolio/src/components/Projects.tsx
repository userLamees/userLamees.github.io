import { FadeIn } from "./FadeIn";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Jasmine",
    type: "Graduation Project",
    date: "December 2025",
    description: "An AI-powered mobile application for skin condition assessment. It helps users analyze their skin health using image recognition and delivers tailored care recommendations, bridging healthcare and technology for everyday users.",
    technologies: ["SwiftUI", "AI/ML", "iOS", "Image Recognition"],
    link: "#"
  },
  {
    title: "Naadek",
    type: "Hackathon Winner",
    date: "April 2025",
    description: "First place winner at the University Solutions Hackathon. An integrated student engagement platform for club discovery and task management, heavily focused on UI/UX best practices to enhance student connectivity.",
    technologies: ["UI/UX", "Figma", "System Design"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 bg-card">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Selected Works." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <a 
                href={project.link}
                className="group block h-full p-8 rounded-2xl bg-secondary/30 hover:bg-secondary/80 border border-transparent hover:border-border transition-all duration-500"
                data-testid={`project-card-${project.title.toLowerCase()}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xs font-mono tracking-wider text-primary uppercase mb-2 block">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-serif font-medium text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                
                <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 rounded-full bg-background border border-border/50 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </FadeIn>
          ))}
          
          <FadeIn delay={0.2}>
            <div className="h-full min-h-[300px] flex items-center justify-center p-8 rounded-2xl border border-dashed border-border/60 bg-transparent">
              <div className="text-center">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/30 mx-auto mb-4 animate-pulse"></div>
                <p className="text-muted-foreground font-medium">More works brewing...</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
