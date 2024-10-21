import { Children, useState } from "react";
import "./Tabs.css";

const Tabs = ({
  Tabs = [],
  children,
  color = "#cbdce1",
  style = {},
  className = "",
}) => {
  const [currentTab, setCurrentTab] = useState(0);
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
              onClick={() => setCurrentTab(index)}
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
