import {
  Masthead,
  IssueHeader,
  Headline,
  DropCapParagraph,
} from "../newspaper";
import styles from "./HomeNewspaperHero.module.css";

export default function HomeNewspaperHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <Masthead
          title="Liam Crocket"
          tagline="The Independent Journal of Software & Craft"
        />

        <IssueHeader
          date="Saturday, March 14, 2026"
          edition="Vol. I — The Early Years"
          price="Est. Worth: A Good Cup of Coffee"
        />

        <Headline>
          Local Engineer Refuses to Choose Between Foundation and the Future.
        </Headline>

        <div className={styles.lede}>
          <DropCapParagraph>
            Herein is presented the professional record of one Liam Crocket, a
            practitioner of the software arts, whose journey from first
            principles to modern craft is faithfully chronicled in the pages
            that follow. Beginning with the solid foundation of the
            fundamentals — those unglamorous but essential truths upon which all
            good work is built — and proceeding through years of diligent study,
            original invention, and the occasional humbling encounter with
            production, this account arrives at last at the present day: wherein
            our subject applies the full breadth of his knowledge, in concert
            with the remarkable tools of the modern age, to the construction of
            ambitious and reliable things. The reader is invited to scroll
            onwards and judge the record for themselves.
          </DropCapParagraph>
        </div>
      </div>

      <footer className={styles.scrollCue}>↓ Continue Reading</footer>
    </section>
  );
}
