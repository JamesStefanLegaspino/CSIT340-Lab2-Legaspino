import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Projects I've worked on." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="A component-based version of my personal page, built to practice React structure, props, and Tailwind styling."
          tech="React · Tailwind CSS"
          link="https://github.com/JamesStefanLegaspino"
        />
        <ProjectCard
          year="2025"
          title="QuickContacts"
          description="QuickContacts is a simple app for storing and managing personal contact information. It provides a straightforward platform for users to keep track of their contacts, categorize them into groups, and access them easily through a secure web interface."
          tech="HTML · CSS · JavaScript · Java"
          link="https://github.com/JamesStefanLegaspino"
        />
      </div>
    </section>
  )
}