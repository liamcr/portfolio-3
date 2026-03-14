import {
  Masthead,
  IssueHeader,
  Headline,
  ColumnLayout,
  DropCapParagraph,
} from "../../components/newspaper";
import styles from "./page.module.css";

export default function NewspaperPage() {
  return (
    <main className={styles.page}>
      <Masthead
        title="Liam Crocket"
        tagline="Software Engineer · Builder of Things · Occasional Overthinker"
      />

      <IssueHeader
        date="Saturday, March 14, 2026"
        edition="Vol. III, No. 14"
        price="Est. Value: Priceless"
      />

      <Headline>
        Local Engineer Ships Products Faster Than Anyone Has a Right To
      </Headline>

      <ColumnLayout columns={3}>
        <DropCapParagraph>
          For the better part of a decade, Liam Crocket has been quietly
          building software that people actually use — a distinction rarer than
          it ought to be in an industry that mistakes complexity for quality. His
          work spans full-stack web applications, developer tooling, and the
          occasional side project that turns into something rather more serious
          than originally planned.
        </DropCapParagraph>

        <p className={styles.body}>
          Trained initially in computer science and later in the school of
          production incidents, Crocket has developed a particular affinity for
          systems that are fast, legible, and — critically — maintainable by
          someone other than their author. He holds strong opinions about naming
          things correctly and soft opinions about nearly everything else.
        </p>

        <p className={styles.body}>
          His preferred tools include TypeScript, React, Next.js, and whichever
          database happens to be most boring for the problem at hand. He has
          shipped mobile applications, API platforms, internal dashboards, and
          at least one thing he is not at liberty to discuss under the terms of
          an NDA he has mostly forgotten signing.
        </p>

        <Headline size="lg" centered={false}>
          On the Question of Side Projects
        </Headline>

        <p className={styles.body}>
          Observers report that Crocket maintains an unusual number of
          unfinished side projects, each begun with great enthusiasm and paused
          at approximately the point where the interesting engineering problems
          have been solved and only the tedious ones remain. He disputes this
          characterisation, calling it instead &ldquo;a portfolio of
          validated hypotheses.&rdquo;
        </p>

        <p className={styles.body}>
          Current interests include distributed systems, developer experience,
          and building tools that remove friction from the act of making things.
          He is available for interesting problems and politely declines the
          rest.
        </p>

        <Headline size="lg" centered={false}>
          Selected Works & Engagements
        </Headline>

        <p className={styles.body}>
          Among his recent engagements: a real-time collaboration platform
          serving several thousand daily users; a component design system
          adopted across three product teams; and the very portfolio page you
          are presently reading, designed in the style of a publication that
          has not existed since roughly 1842. He considers this last item the
          most technically interesting of the three.
        </p>

        <p className={styles.body}>
          Crocket is based wherever his laptop happens to be and is reachable
          through the usual channels. Response times vary inversely with how
          deeply he is currently in flow.
        </p>
      </ColumnLayout>
    </main>
  );
}
