import Card from "@/components/Card";
import styles from "./index.module.scss";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import CustomLegendPlugin from "./CustomLegendPlugin";

export default function OverviewChart() {
  return (
    <Card
      className={styles.overviewChart}
      header={"Overview"}
      classes={{
        contentSection: styles.contentSection,
      }}
    >
      <Pie
        width={300}
        height={300}
        data={{
          labels: [
            "Draft",
            "Pending RM Approver",
            "Reopened",
            "Rejected by RM Approver",
            "Pending for Review in Net Reveal",
            "Approved by Net Reveal",
            "Rejected by Net Reveal",
          ],
          datasets: [
            {
              label: "No. of Applications",
              data: [40, 9, 15, 20, 15, 10, 29],
              backgroundColor: [
                "rgba(0, 134, 88, 0.7)",
                "rgba(0, 92, 171, 0.7)",
                "rgba(46, 187, 171, 0.7)",
                "rgba(238, 49, 36, 0.7)",
                "rgba(249, 157, 37, 0.7)",
                "rgba(186, 213, 50, 0.7)",
                "rgba(0, 172, 212, 0.7)",
              ],
              borderWidth: 4,
            },
          ],
        }}
        plugins={[CustomLegendPlugin]}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          aspectRatio: 1,
          plugins: {
            htmlLegend: {
              containerID: "legend-container",
            },
            legend: {
              display: false,
            },
          } as any,
        }}
      />
      <section className={styles.legendSection}>
        <div className={styles.totalApplications}>
          Total Applications: <span className={styles.total}>138</span>
        </div>
        <div id="legend-container"></div>
      </section>
    </Card>
  );
}
