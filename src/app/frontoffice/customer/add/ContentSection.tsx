import TabSwitcher from "@/components/TabSwitcher";
import styles from "./index.module.scss";
import CustomerDetails from "./component/CustomerDetails";
import RelatedParty from "./component/RelatedParty";
import OtherRelatedParties from "./component/OtherRelatedParties";
import { useMemo, useState } from "react";
export default function ContentSection() {
  const [swipeIndex, setSwipeIndex] = useState(1);
  return (
    <main>
      <TabSwitcher
        initialTabIndex={swipeIndex}
        tabItems={useMemo(
          () => [
            {
              label: "Customer Details",
              component: <CustomerDetails />,
            },
            {
              label: "Related Party",
              component: <RelatedParty />,
            },
            {
              label: "Other Related Parties",
              component: <OtherRelatedParties />,
            },
          ],
          []
        )}
      />
    </main>
  );
}
