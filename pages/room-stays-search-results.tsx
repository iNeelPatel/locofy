import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import Header from "../components/header";
import FrameComponent from "../components/frame-component";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import styles from "./room-stays-search-results.module.css";
const RoomStaysSearchResults: NextPage = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.roomStaysSearchResults}>
      <Header />
      <main className={styles.frameParent}>
        <FrameComponent />
        <section className={styles.blogPost} id="blog">
          <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
          <div className={styles.filters}>
            <div className={styles.left}>
              <Button type="default" size="middle" shape="round">
                Price
              </Button>
              <Button type="default" size="middle" shape="round">
                Type of place
              </Button>
            </div>
            <div className={styles.divider} />
            <div className={styles.right}>
              <Button type="default" size="middle" shape="round">
                Free Cancellation
              </Button>
              <Button type="default" size="middle" shape="round">
                Wifi
              </Button>
              <Button type="default" size="middle" shape="round">
                Air conditioning
              </Button>
              <Button type="default" size="middle" shape="round">
                Washer
              </Button>
              <Button type="default" size="middle" shape="round">
                Dryer
              </Button>
              <Button type="default" size="middle" shape="round">
                Free Parking
              </Button>
              <Button type="default" size="middle" shape="round">
                Filter
              </Button>
            </div>
            <div className={styles.buttonWrapper}>
              <Button type="default" size="middle" shape="round">
                Show In Map
              </Button>
            </div>
          </div>
          <div className={styles.contentParent} data-animate-on-scroll>
            <div className={styles.content}>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-25@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star16.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star17.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder71.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-211@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star16.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star17.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder81.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-221@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star21.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star31.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder81.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-231@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star41.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star51.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder91.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright21.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content1}>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-25@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star16.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star17.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder71.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-211@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star16.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star17.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder81.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-221@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star21.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star31.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder81.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-231@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star41.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star51.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder91.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright21.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.content1}>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-25@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star16.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star17.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder71.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright5.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-211@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star16.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star17.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder81.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright11.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-221@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star21.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star31.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder81.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.blogBase}>
                <img
                  className={styles.blogBaseChild}
                  alt=""
                  src="/rectangle-231@2x.png"
                />
                <div className={styles.verticalContainer}>
                  <div className={styles.button}>
                    <div className={styles.frameGroup}>
                      <div className={styles.hotelAssenzioParent}>
                        <div className={styles.hotelAssenzio}>
                          Hotel Assenzio
                        </div>
                        <div className={styles.button1}>
                          <img
                            className={styles.starIcon}
                            alt=""
                            src="/star41.svg"
                          />
                          <div className={styles.text}>4.2</div>
                          <img
                            className={styles.placeholderIcon}
                            alt=""
                            src="/star51.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.apr2022Parent}>
                        <div className={styles.div}>25 Apr 2022</div>
                        <div className={styles.div}>-</div>
                        <div className={styles.div}>28 Apr 2022</div>
                      </div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.butHappyTo}>
                        But happy to move in with more than that, I’m super easy
                        going and tidy.
                      </div>
                    </div>
                  </div>
                  <div className={styles.button2}>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/placeholder91.svg"
                    />
                    <div className={styles.text1}>$32 / Day</div>
                    <img
                      className={styles.placeholderIcon}
                      alt=""
                      src="/arrowright21.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Button type="default" size="middle" shape="round">
                Load More
              </Button>
            </div>
          </div>
        </section>
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
};

export default RoomStaysSearchResults;
