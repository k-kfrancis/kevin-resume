import { resumeData } from "./data/resumeData";
import "./styles.css";

function Panel ({ title, children, variant = "panel"}) {
  return (
    <section className={`panel ${variant}`}>
      <div className="panelHeader">
        <h2 className="panelTitle">{title}</h2>
      </div>
      <div className="panelBody">{children}</div>
    </section>
  )
}

function Chips({ items }) {
  return(
    <div className="chips">
      {items.map((t) => (
        <span className="chip" key={t}>
          {t}
        </span>
      ))}
    </div>
  )
}

export default function App() {
  const d = resumeData

  return (
    <div className="page">
      <header className="hero">
        <div className="heroTop">
          <div>
            <h1 className="name">{d.name}</h1>
            <p className="title">{d.title}</p>
          </div>
          <div className="contact">
            <div>{d.contact.phone}</div>
            <div>{d.contact.email}</div>
            <div>{d.contact.location}</div>
          </div>
        </div>
        <div className="signal">
          Gotham style resume. One page. Comic panels.
        </div>
        <div className="skyline" />
      </header>

      <main className="grid">
        <Panel title="Professional Summary" variant="speech">
          <p className="bodyText">{d.summary}</p>
        </Panel>

        <Panel title="Skills">
          <div className="stack">
            {d.skills.map((s) =>(
              <div key={s.label} className="skillBlock">
                <div className="skillLabel">{s.label}</div>
                <Chips items={s.items} />
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Core Strengths">
          <ul className="list">
            {d.coreStrengths.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </Panel>

        <Panel title="Experience" variant="wide">
          <div className="stack">
            {d.experience.map((job) => (
              <article className="job" key={`${job.role}-${job.org}`}>
                <div className="jobTop">
                  <div>
                    <div className="jobRole">
                      {job.role}
                      <span className="jobOrg"> at {job.org}</span>
                    </div>
                    <div className="jobDates">{job.dates}</div>
                  </div>
                </div>
                <ul className="list">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Panel>
      </main>

      <footer className="footer">
        If you publish this publish this publicly, consider removing your phone number and personal email.
      </footer>
    </div>
  )
}