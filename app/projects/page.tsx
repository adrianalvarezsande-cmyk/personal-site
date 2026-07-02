import type { Metadata } from 'next'
import { PageFade } from '@/components/page-fade'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Academic work and research by Adrián Álvarez.',
}

const projects = [
  {
    title: 'When Machines Learn to Agree',
    context: 'Academic Research Writing · AUC · May 2026',
    pdf: '/projects/algorithmic-collusion.pdf',
    description:
      'A literature review on algorithmic pricing and tacit collusion — the idea that AI pricing systems can learn to sustain prices above competitive levels without any communication between the firms that deploy them. I tried to show that the learning mechanism, the market conditions that enable it, and the detection problem are not three separate issues but the same interlocking one. For my Capstone I want to go deeper on the detection side, because that\'s where the real gap in the literature is.',
  },
  {
    title: 'Europe\'s AI Regulation Problem',
    context: 'Advanced Macroeconomics · AUC · May 2026',
    pdf: '/projects/eu-ai-regulation.pdf',
    description:
      'An essay arguing that the EU AI Act\'s compliance costs aren\'t well calibrated to firm size, and that this has macroeconomic consequences the policy debate mostly ignores. I worked through the Solow growth model, the government budget constraint, and the Taylor Rule to show how regulatory drag on AI adoption affects productivity and fiscal sustainability. There\'s a note at the end where I try to fix an argument the professor challenged during the presentation.',
  },
  {
    title: 'Global Data Privacy Regulations and Machine Learning',
    context: 'Data Ethics · AUC',
    pdf: '/projects/data-ethics-report.pdf',
    description:
      'A report on how GDPR, CCPA, and China\'s PIPL affect the way machine learning systems get built. I started with the Meta fine as an entry point — a billion-euro penalty for what was essentially a routine engineering decision — and traced how these frameworks developed and what they actually require of developers in practice. The consent section compares how differently the three frameworks approach the same problem.',
  },
  {
    title: 'GPU Demand Growth and Semiconductor Shortages',
    context: 'Mathematical Methods · AUC',
    pdf: '/projects/gpu-semiconductors.pdf',
    description:
      'A group project modeling NVIDIA\'s revenue growth using exponential functions and analyzing the semiconductor shortage during COVID-19. More quantitative than the others — we modeled demand curves, calculated growth rates, and built a forecast error model to show how badly the industry misjudged demand. A bit rougher, but it shows the kind of applied mathematics from the first year.',
  },
]

export default function ProjectsPage() {
  return (
    <PageFade>
      <section className="mx-auto max-w-5xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12">
        <p className="text-label uppercase tracking-widest text-ink-muted mb-12">
          Projects
        </p>

        <div className="max-w-prose">
          {projects.map((project, index) => (
            <div key={project.title}>
              {/* Entry */}
              <div className="py-10">
                {/* Context label */}
                <p className="text-label uppercase tracking-widest text-ink-muted italic mb-3">
                  {project.context}
                </p>

                {/* Title */}
                <h2 className="text-base font-medium text-ink mb-4">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-base text-ink-muted leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Download link */}
                <a
                  href={project.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-small text-ink-muted transition-opacity duration-150 hover:opacity-60"
                >
                  Download PDF
                  <span className="transition-transform duration-150 group-hover:translate-x-0.75">&nbsp;→</span>
                </a>
              </div>

              {/* Divider between entries, not after the last */}
              {index < projects.length - 1 && (
                <div className="border-t border-line" />
              )}
            </div>
          ))}
        </div>
      </section>
    </PageFade>
  )
}
