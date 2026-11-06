import { GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Featured } from "@/components/featured";
import { WorkGrid } from "@/components/work-grid";
import { Pipeline } from "@/components/pipeline";
import { Reveal } from "@/components/reveal";
import { CopyEmail } from "@/components/copy-email";
import { certifications, education, experience, person, skills } from "@/content";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Featured />
        <Pipeline />
        <WorkGrid />

        <section id="experience" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Experience</h2>
              <p className="mt-6 font-display text-xl font-semibold">{experience.role}</p>
              <p className="mt-1 text-muted">
                {experience.company}, {experience.about}
              </p>
              <p className="mt-1 font-mono text-sm text-muted">{experience.dates}</p>
            </Reveal>
            <ul className="grid gap-8">
              {experience.points.map((p, i) => (
                <Reveal as="li" key={p.lead} delay={i * 0.04} className="text-lg leading-relaxed text-muted">
                  <span className="font-semibold text-fg">{p.lead}</span> {p.text}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Toolkit</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {skills.map((s, i) => (
              <Reveal key={s.group} delay={(i % 2) * 0.04}>
                <h3 className="font-semibold">{s.group}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li key={item} className="list-none rounded-full bg-surface px-3 py-1.5 text-sm text-muted ring-1 ring-border">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section aria-labelledby="education" className="mx-auto max-w-6xl px-4 pt-32 sm:px-6">
          <Reveal>
            <div className="grid gap-12 rounded-xl bg-surface p-6 ring-1 ring-border sm:p-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h2 id="education" className="font-display text-2xl font-semibold tracking-tight">Education</h2>
                <div className="mt-6 grid gap-6">
                  {education.map((e) => (
                    <div key={e.degree} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <div>
                        <p className="font-semibold">{e.degree}</p>
                        <p className="text-muted">{e.school}</p>
                      </div>
                      <p className="font-mono text-sm text-muted">
                        {e.dates}, {e.grade}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight">Certifications</h2>
                <ul className="mt-6 grid gap-3">
                  {certifications.map((c) => (
                    <li key={c} className="list-none text-muted">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pt-32 pb-24 sm:px-6">
          <Reveal>
            <h2 className="max-w-[16ch] font-display text-5xl leading-[1.04] font-semibold tracking-tight text-balance sm:text-6xl">
              Hiring for a data role? Let&apos;s talk.
            </h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
              Based in Delhi. Open to roles in Bengaluru, Delhi NCR or remote.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${person.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-on-accent transition-[scale,filter] duration-[var(--duration-fast)] hover:brightness-110 active:scale-[0.97]"
              >
                <EnvelopeSimpleIcon size={16} weight="bold" />
                Email me
              </a>
              <CopyEmail email={person.email} />
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6">
          <p>{person.name}, {new Date().getFullYear()}</p>
          <div className="flex items-center gap-1">
            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid size-9 place-items-center rounded-full transition-colors duration-[var(--duration-fast)] hover:bg-surface hover:text-fg">
              <LinkedinLogoIcon size={18} weight="bold" />
            </a>
            <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid size-9 place-items-center rounded-full transition-colors duration-[var(--duration-fast)] hover:bg-surface hover:text-fg">
              <GithubLogoIcon size={18} weight="bold" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
