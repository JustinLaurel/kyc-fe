import HeaderSection from "./HeaderSection";
import SearchSection from "./SearchSection";
import styles from "./index.module.scss";

export default function FoApplication() {
  return (
    <main className={styles.foListingPage}>
      <HeaderSection />
      <SearchSection />
    </main>
  )
}
