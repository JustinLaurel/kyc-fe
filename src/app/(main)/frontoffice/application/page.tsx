import HeaderSection from "./HeaderSection";
import SearchSection from "./SearchSection";
import styles from "./page.module.scss";

export default function FoListingPage() {
  return (
    <main className={styles.foListingPage}>
      <HeaderSection />
      <SearchSection />
    </main>
  )
}
