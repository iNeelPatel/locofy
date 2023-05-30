import type { NextPage } from "next";
import "antd/dist/antd.min.css";
import { Input, DatePicker, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./frame-component.module.css";
const FrameComponent: NextPage = () => {
  return (
    <div className={styles.webModalWrapper}>
      <div className={styles.webModal}>
        <div className={styles.mobileInputFieldParent}>
          <div className={styles.mobileInputField}>
            <div className={styles.where}>Where</div>
            <div className={styles.hintText}>Hint text</div>
            <Input
              className={styles.mobileInputField1}
              type="text"
              size="middle"
              placeholder="Minamiuonuma, Niigata"
            />
          </div>
          <div className={styles.mobileInputField2}>
            <div className={styles.where}>From</div>
            <div className={styles.hintText}>Hint text</div>
            <div className={styles.mobileInputFieldGroup}>
              <Input
                className={styles.mobileInputField3}
                type="date"
                size="middle"
                placeholder="04/13/2023"
              />
              <div className={styles.mobileInputField4}>
                <div className={styles.label}>Label</div>
                <DatePicker picker="time" placeholder="None" />
                <div className={styles.hintText2}>Hint text</div>
              </div>
            </div>
          </div>
          <div className={styles.mobileInputField2}>
            <div className={styles.where}>Until</div>
            <div className={styles.hintText}>Hint text</div>
            <div className={styles.mobileInputFieldGroup}>
              <Input
                className={styles.mobileInputField3}
                type="date"
                size="middle"
                placeholder="04/13/2023"
              />
              <DatePicker picker="time" placeholder="None" />
            </div>
          </div>
          <Button
            style={{ width: "46px" }}
            type="primary"
            icon={<SearchOutlined />}
            size="middle"
            shape="round"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
