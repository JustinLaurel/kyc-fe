import TabSwitcher from "@/components/TabSwitcher"
import styles from "./page.module.scss"
import CustomerDetails from "./component/CustomerDetails"
import Ubo from "./component/Ubo"
import OtherRelatedParties from "./component/OtherRelatedParties"
export default function ContentSection() {
  return (
    <main>
      <TabSwitcher
        tabItems={[
          {
            label: "Customer Details",
            component: <CustomerDetails />,
          },
          {
            label: "UBO",
            component: <Ubo />,
          },
          {
            label: "Other Related Parties",
            component: <OtherRelatedParties />,
          },
        ]}
      />
    </main>
  )
}