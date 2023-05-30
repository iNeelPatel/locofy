import type { NextPage } from "next";
import styles from "./index.module.css";
const RoomStaysSearch: NextPage = () => {
  return (
    <div className={styles.roomStaysSearch}>
      <div className={styles.pageHeaderParent}>
        <div className={styles.pageHeader}>
          <div className={styles.container}>
            <div className={styles.textInputContainer}>
              <div className={styles.companyLogo}>
                <img className={styles.unionIcon} alt="" src="/union.svg" />
                <img className={styles.totelIcon} alt="" src="/totel.svg" />
              </div>
              <div className={styles.textInput}>
                <div className={styles.button}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.text}>Rooms</div>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className={styles.button1}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.text}>Looking for Roommate</div>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
                <div className={styles.button2}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.text}>Company</div>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/chevron-down.svg"
                  />
                </div>
                <div className={styles.button2}>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                  <div className={styles.text}>Help</div>
                  <img
                    className={styles.placeholderIcon}
                    alt=""
                    src="/placeholder.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.button4}>
              <div className={styles.button5}>
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/placeholder1.svg"
                />
                <div className={styles.text4}>Manage Listings</div>
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/placeholder1.svg"
                />
              </div>
              <div className={styles.avatar}>
                <img
                  className={styles.statusIcon}
                  alt=""
                  src="/status-icon.svg"
                />
              </div>
            </div>
            <div className={styles.button6}>
              <img className={styles.menuIcon} alt="" src="/menu.svg" />
            </div>
          </div>
          <div className={styles.headerDropdownList}>
            <div className={styles.horizontalContainer}>
              <div className={styles.navbarDropdownList}>
                <div className={styles.iconPlaceholder}>
                  <img className={styles.icon} alt="" src="/icon.svg" />
                </div>
                <div className={styles.container1}>
                  <div className={styles.academy}>Academy</div>
                  <div className={styles.noMatterWhat}>
                    No matter what kind of home you have to share, you can
                    increase your earnings.
                  </div>
                  <div className={styles.button7}>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text4}>Button</div>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/arrow-right.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.navbarDropdownList}>
                <div className={styles.iconPlaceholder}>
                  <img className={styles.icon} alt="" src="/icon1.svg" />
                </div>
                <div className={styles.container1}>
                  <div className={styles.academy}>Resources</div>
                  <div className={styles.noMatterWhat}>
                    No matter what kind of home you have to share, you can
                    increase your earnings.
                  </div>
                  <div className={styles.button7}>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text4}>Button</div>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/arrow-right.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.navbarDropdownList}>
                <div className={styles.iconPlaceholder}>
                  <img className={styles.icon} alt="" src="/icon2.svg" />
                </div>
                <div className={styles.container1}>
                  <div className={styles.academy}>Guides</div>
                  <div className={styles.noMatterWhat}>
                    No matter what kind of home you have to share, you can
                    increase your earnings.
                  </div>
                  <div className={styles.button7}>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text4}>Button</div>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/arrow-right.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.navbarDropdownList}>
                <div className={styles.iconPlaceholder}>
                  <img className={styles.icon} alt="" src="/icon3.svg" />
                </div>
                <div className={styles.container1}>
                  <div className={styles.academy}>Design</div>
                  <div className={styles.noMatterWhat}>
                    No matter what kind of home you have to share, you can
                    increase your earnings.
                  </div>
                  <div className={styles.button7}>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder2.svg"
                    />
                    <div className={styles.text4}>Button</div>
                    <img
                      className={styles.icon}
                      alt=""
                      src="/arrow-right.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.ctaSection}>
              <div className={styles.button11}>
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/placeholder3.svg"
                />
                <div className={styles.text4}>Contact Us</div>
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/placeholder3.svg"
                />
              </div>
              <div className={styles.button11}>
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/placeholder3.svg"
                />
                <div className={styles.text4}>Info</div>
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/placeholder3.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.webModalWrapper}>
          <div className={styles.webModal}>
            <div className={styles.mobileInputFieldParent}>
              <div className={styles.mobileInputField}>
                <div className={styles.where}>Where</div>
                <div className={styles.mobileInputField1}>
                  <div className={styles.label}>Label</div>
                  <div className={styles.input}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/placeholder4.svg"
                    />
                    <div className={styles.text11}>Minamiuonuma, Niigata</div>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar.svg"
                    />
                  </div>
                  <div className={styles.hintText}>Hint text</div>
                </div>
              </div>
              <div className={styles.mobileInputField2}>
                <div className={styles.from}>From</div>
                <div className={styles.mobileInputFieldGroup}>
                  <div className={styles.mobileInputField3}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input1}>
                      <img
                        className={styles.calendarIcon}
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className={styles.link}>04/13/2023</div>
                      <img
                        className={styles.menuIcon}
                        alt=""
                        src="/calendar.svg"
                      />
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                  <div className={styles.mobileInputField4}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input1}>
                      <img
                        className={styles.calendarIcon}
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className={styles.link}>None</div>
                      <img
                        className={styles.timeloadingIcon}
                        alt=""
                        src="/timeloading.svg"
                      />
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                </div>
              </div>
              <div className={styles.mobileInputField5}>
                <div className={styles.from}>Until</div>
                <div className={styles.mobileInputFieldContainer}>
                  <div className={styles.mobileInputField3}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input1}>
                      <img
                        className={styles.calendarIcon}
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className={styles.link}>04/13/2023</div>
                      <img
                        className={styles.menuIcon}
                        alt=""
                        src="/calendar.svg"
                      />
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                  <div className={styles.mobileInputField7}>
                    <div className={styles.label}>Label</div>
                    <div className={styles.input1}>
                      <img
                        className={styles.calendarIcon}
                        alt=""
                        src="/placeholder4.svg"
                      />
                      <div className={styles.link}>None</div>
                      <img
                        className={styles.timeloadingIcon}
                        alt=""
                        src="/timeloading.svg"
                      />
                    </div>
                    <div className={styles.hintText}>Hint text</div>
                  </div>
                </div>
              </div>
              <div className={styles.button13}>
                <div className={styles.buttonContent}>
                  <div className={styles.text16}>Search</div>
                </div>
              </div>
              <div className={styles.button14}>
                <img
                  className={styles.zoomsearchIcon}
                  alt=""
                  src="/zoomsearch.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.filters}>
          <div className={styles.left}>
            <div className={styles.button5}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Price</div>
              <img className={styles.icon} alt="" src="/chevrondown.svg" />
            </div>
            <div className={styles.button5}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Type of place</div>
              <img className={styles.icon} alt="" src="/chevrondown.svg" />
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.right}>
            <div className={styles.button17}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Free Cancellation</div>
              <img
                className={styles.filterIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.button18}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Wifi</div>
              <img
                className={styles.filterIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.button19}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Air conditioning</div>
              <img
                className={styles.filterIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.button18}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Washer</div>
              <img
                className={styles.filterIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.button18}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Dryer</div>
              <img
                className={styles.filterIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.button22}>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Free Parking</div>
              <img
                className={styles.filterIcon}
                alt=""
                src="/chevrondown.svg"
              />
            </div>
            <div className={styles.button18}>
              <img className={styles.icon} alt="" src="/filter.svg" />
              <div className={styles.text4}>Filter</div>
              <img className={styles.filterIcon} alt="" src="/filter.svg" />
            </div>
          </div>
          <div className={styles.button24}>
            <img className={styles.chevronDownIcon} alt="" src="/map.svg" />
            <div className={styles.text4}>Show In Map</div>
            <img className={styles.filterIcon} alt="" src="/filter1.svg" />
          </div>
        </div>
        <div className={styles.blogPost}>
          <div className={styles.container5}>
            <div className={styles.contentParent}>
              <div className={styles.content}>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star1.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder1.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-21@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star2.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star3.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder5.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star1.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder1.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-21@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star2.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star3.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder5.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star4.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star5.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder1.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-21@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star6.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star7.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder5.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-2@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star4.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star5.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder1.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.blogBase}>
                  <img
                    className={styles.blogBaseChild}
                    alt=""
                    src="/rectangle-21@2x.png"
                  />
                  <div className={styles.verticalContainer}>
                    <div className={styles.button25}>
                      <div className={styles.frameParent}>
                        <div className={styles.hotelAssenzioParent}>
                          <div className={styles.hotelAssenzio}>
                            Hotel Assenzio
                          </div>
                          <div className={styles.button26}>
                            <img
                              className={styles.icon}
                              alt=""
                              src="/star6.svg"
                            />
                            <div className={styles.text4}>4.2</div>
                            <img
                              className={styles.filterIcon}
                              alt=""
                              src="/star7.svg"
                            />
                          </div>
                        </div>
                        <div className={styles.apr2022Parent}>
                          <div className={styles.div}>25 Apr 2022</div>
                          <div className={styles.div}>-</div>
                          <div className={styles.div}>28 Apr 2022</div>
                        </div>
                      </div>
                      <div className={styles.textInput1}>
                        <div className={styles.butHappyTo}>
                          But happy to move in with more than that, I’m super
                          easy going and tidy.
                        </div>
                      </div>
                    </div>
                    <div className={styles.button27}>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/placeholder5.svg"
                      />
                      <div className={styles.text28}>$32 / Day</div>
                      <img
                        className={styles.filterIcon}
                        alt=""
                        src="/arrowright1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pagination}>
              <div className={styles.paginationBase}>
                <img
                  className={styles.arrowleftIcon}
                  alt=""
                  src="/arrowleft.svg"
                />
              </div>
              <div className={styles.paginationBase1}>
                <div className={styles.div}>1</div>
              </div>
              <div className={styles.paginationBase1}>
                <div className={styles.div}>2</div>
              </div>
              <div className={styles.paginationBase1}>
                <div className={styles.div}>...</div>
              </div>
              <div className={styles.paginationBase4}>
                <div className={styles.div}>6</div>
              </div>
              <div className={styles.paginationBase1}>
                <div className={styles.div}>7</div>
              </div>
              <div className={styles.paginationBase}>
                <img
                  className={styles.arrowleftIcon}
                  alt=""
                  src="/arrowright2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.content2}>
            <div className={styles.container6}>
              <div className={styles.ofTheIndustry}>1% OF THE INDUSTRY</div>
              <div className={styles.card}>
                <div className={styles.paragraphContainer}>
                  <div className={styles.headline}>
                    Welcome to your room sharing platform that which You can
                    find places and stay with hotels and home-stays ranked by
                    travellers. What fun could we have more than having roommate
                    with similar interest.
                  </div>
                  <div className={styles.paragraph}>
                    <p className={styles.letUsHelp}>
                      Let us help you take you from zero to serious business and
                      beyond.
                    </p>
                    <p className={styles.letUsHelp}>
                      {" "}
                      Our no-strings attached free trial lets you test our
                      product today.
                    </p>
                  </div>
                </div>
                <div className={styles.button49}>
                  <div className={styles.button50}>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder6.svg"
                    />
                    <div className={styles.text4}>Get started</div>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder6.svg"
                    />
                  </div>
                  <div className={styles.button51}>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                    <div className={styles.text4}>Log in</div>
                    <img
                      className={styles.filterIcon}
                      alt=""
                      src="/placeholder3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.links}>
            <div className={styles.table}>
              <div className={styles.verticalContainer8}>
                <div className={styles.footerLinks}>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder7.svg"
                  />
                  <div className={styles.features}>Products</div>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder7.svg"
                  />
                </div>
                <div className={styles.verticalContainer9}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                    <div className={styles.link}>Features</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                    <div className={styles.link}>Integrations</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                    <div className={styles.link}>Enterprise</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                    <div className={styles.link}>Solutions</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder8.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalContainer8}>
                <div className={styles.footerLinks5}>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder9.svg"
                  />
                  <div className={styles.features}>Products</div>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder9.svg"
                  />
                </div>
                <div className={styles.verticalContainer9}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                    <div className={styles.link}>Features</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                    <div className={styles.link}>Integrations</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                    <div className={styles.link}>Enterprise</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                    <div className={styles.link}>Solutions</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder10.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalContainer8}>
                <div className={styles.footerLinks}>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder11.svg"
                  />
                  <div className={styles.features}>Resources</div>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder11.svg"
                  />
                </div>
                <div className={styles.verticalContainer9}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                    <div className={styles.link}>Partners</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                    <div className={styles.link}>Developers</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                    <div className={styles.link}>Community</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                    <div className={styles.link}>Apps</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder12.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalContainer8}>
                <div className={styles.footerLinks5}>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder13.svg"
                  />
                  <div className={styles.features}>Company</div>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder13.svg"
                  />
                </div>
                <div className={styles.verticalContainer9}>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder14.svg"
                    />
                    <div className={styles.link}>About Us</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder14.svg"
                    />
                  </div>
                  <div className={styles.footerLinks}>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder14.svg"
                    />
                    <div className={styles.link}>Careers</div>
                    <img
                      className={styles.placeholderIcon35}
                      alt=""
                      src="/placeholder14.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.verticalContainer8}>
                <div className={styles.footerLinks}>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder15.svg"
                  />
                  <div className={styles.features}>Mobile app</div>
                  <img
                    className={styles.placeholderIcon35}
                    alt=""
                    src="/placeholder15.svg"
                  />
                </div>
                <div className={styles.verticalContainer13}>
                  <img className={styles.frameIcon} alt="" src="/frame.svg" />
                  <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.content3}>
              <div className={styles.companyLogo1}>
                <div className={styles.companyLogo2}>
                  <img className={styles.unionIcon1} alt="" src="/union1.svg" />
                  <img className={styles.totelIcon} alt="" src="/totel1.svg" />
                </div>
              </div>
              <div className={styles.lookscoutAllRights}>
                © 2023 Totel. All Rights Reserved.
              </div>
              <div className={styles.socialIcons}>
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo.svg"
                />
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo1.svg"
                />
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo2.svg"
                />
                <img
                  className={styles.menuIcon}
                  alt=""
                  src="/social-platforms-logo3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomStaysSearch;
