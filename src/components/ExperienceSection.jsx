import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

export default function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2026 – Present"
          title="Capstone Project"
          place="Cebu Institute of Technology – University"
          description="Co-developing a web-based Agile task management system that improves task visibility, prioritization, and collaboration for Agile teams."
        />
        <TimelineItem
          period="2021"
          title="Junior High School"
          place="Saint Francis Academy, Balamban, Cebu"
          description="Built my first 'About Me' webpage using pure HTML, which sparked my interest in web development."
        />
      </ol>
    </section>
  )
}