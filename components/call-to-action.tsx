import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import styles from "./call-to-action.module.css";
const CallToAction: NextPage = () => {
  return (
    <section className={styles.callToAction} id="callAction">
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
          <div className={styles.card}>
            <div className={styles.paragraphContainer}>
              <div className={styles.headline}>
                Welcome to your room sharing platform that which You can find
                places and stay with hotels and home-stays ranked by travellers.
                What fun could we have more than having roommate with similar
                interest.
              </div>
              <div className={styles.paragraph}>
                <p className={styles.letUsHelp}>
                  Let us help you take you from zero to serious business and
                  beyond.
                </p>
                <p className={styles.letUsHelp}>
                  {" "}
                  Our no-strings attached free trial lets you test our product
                  today.
                </p>
              </div>
            </div>
            <div className={styles.button}>
              <Button type="default" size="large" shape="round">
                Get started
              </Button>
              <div className={styles.button1}>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder101.svg"
                />
                <div className={styles.text}>Log in</div>
                <img
                  className={styles.placeholderIcon}
                  alt=""
                  src="/placeholder111.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
