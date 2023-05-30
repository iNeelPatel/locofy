import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import styles from "./header.module.css";
const Header: NextPage = () => {
  return (
    <nav className={styles.pageHeader}>
      <div className={styles.container}>
        <div className={styles.textInputContainer}>
          <div className={styles.companyLogo}>
            <img className={styles.unionIcon} alt="" src="/union2.svg" />
            <img className={styles.totelIcon} alt="" src="/totel2.svg" />
          </div>
          <div className={styles.textInput}>
            <a className={styles.button}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
              <div className={styles.text}>Rooms</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
            </a>
            <a className={styles.button1}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
              <div className={styles.text}>Looking for Roommate</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
            </a>
            <a className={styles.button2}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
              <div className={styles.text}>Company</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
              <img
                className={styles.chevronDownIcon}
                alt=""
                src="/chevron-down1.svg"
              />
            </a>
            <a className={styles.button2}>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
              <div className={styles.text}>Help</div>
              <img
                className={styles.placeholderIcon}
                alt=""
                src="/placeholder23.svg"
              />
            </a>
          </div>
        </div>
        <div className={styles.button4}>
          <Button type="dashed" size="middle" shape="round">
            Manage Listings
          </Button>
          <div className={styles.avatar}>
            <img className={styles.statusIcon} alt="" src="/status-icon1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.headerDropdownList}>
        <div className={styles.horizontalContainer}>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src="/icon6.svg" />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Academy</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button5}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src="/placeholder110.svg"
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src="/arrow-right1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src="/icon11.svg" />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Resources</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button5}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src="/placeholder24.svg"
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src="/arrow-right1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src="/icon21.svg" />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Guides</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button5}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src="/placeholder31.svg"
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src="/arrow-right1.svg" />
              </div>
            </div>
          </div>
          <div className={styles.navbarDropdownList}>
            <div className={styles.iconPlaceholder}>
              <img className={styles.icon} alt="" src="/icon31.svg" />
            </div>
            <div className={styles.container1}>
              <div className={styles.academy}>Design</div>
              <div className={styles.noMatterWhat}>
                No matter what kind of home you have to share, you can increase
                your earnings.
              </div>
              <div className={styles.button5}>
                <img
                  className={styles.placeholderIcon8}
                  alt=""
                  src="/placeholder41.svg"
                />
                <div className={styles.text4}>Button</div>
                <img className={styles.icon} alt="" src="/arrow-right11.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaSection}>
          <div className={styles.button9}>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder51.svg"
            />
            <div className={styles.text4}>Contact Us</div>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder51.svg"
            />
          </div>
          <div className={styles.button9}>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder51.svg"
            />
            <div className={styles.text4}>Info</div>
            <img
              className={styles.placeholderIcon8}
              alt=""
              src="/placeholder61.svg"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
