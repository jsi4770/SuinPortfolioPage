import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import {
  getProjects,
  getAcademics,
  getActivities,
  getAllTechStack,
} from '@/utils/dataLoader';
import siteConfig from '../../data/config/site.json';
import socialConfig from '../../data/config/social.json';

export default function HomePage() {
  const projects = getProjects();
  const academics = getAcademics();
  const activities = getActivities();
  const techStack = getAllTechStack();
  const allItems = [...projects, ...academics, ...activities];

  return (
    <>
      <Hero site={siteConfig} email={socialConfig.email} />
      <ProjectGrid
        items={projects}
        type="projects"
        titleKey="sections.projects"
        id="projects"
      />
      <ProjectGrid
        items={academics}
        type="academics"
        titleKey="sections.academics"
        id="academics"
      />
      <ProjectGrid
        items={activities}
        type="activities"
        titleKey="sections.activities"
        id="activities"
      />
      <About techStack={techStack} allItems={allItems} social={socialConfig} />
    </>
  );
}
