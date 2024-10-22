import { Children, useEffect, useState } from "react";
import "./Tabs.css";

const Tabs = ({
  Tabs = [],
  children,
  color = "#cbdce1",
  style = {},
  className = "",
  onTabChange = () => {},
  value = 0,
  isNativeMomentDisable = false,
}) => {
  const [currentTab, setCurrentTab] = useState(value);
  useEffect(() => {
    setCurrentTab(value);
  }, [value]);
  const handleChange = (index) => {
    if (isNativeMomentDisable) return;
    setCurrentTab(index);
    onTabChange(index);
  };
  return (
    <section
      className={`Tabs ${className}`}
      style={{ "--tabColor": color, ...style }}
    >
      <div className="Tabs-names">
        {Tabs.map((tab, index) => {
          return (
            <span
              key={index}
              onClick={() => handleChange(index)}
              className={`Tab-name ${currentTab === index ? "active-tab" : ""}`}
            >
              {tab}
            </span>
          );
        })}
      </div>
      <div className="Tabs-area">
        <div style={{ left: `-${currentTab * 100}%` }}>
          {Children.map(children, (child, index) => {
            return <>{child}</>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
