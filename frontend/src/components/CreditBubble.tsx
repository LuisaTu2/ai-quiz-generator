import { useEffect, useState } from "react";

export default function CreditBubble() {
  const [show, setShow] = useState(false); // for initial pop-up
  const [collapsed, setCollapsed] = useState(false); // for emoji state

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000); // initial show after 2s
    return () => clearTimeout(timer);
  }, []);

  // Auto collapse after 5s
  useEffect(() => {
    if (show) {
      const collapseTimer = setTimeout(() => setCollapsed(true), 5000);
      return () => clearTimeout(collapseTimer);
    }
  }, [show]);

  const handleClick = () => {
    setCollapsed(!collapsed); // toggle expanded/collapsed
    const newTab = window.open("http://findingLuisa.com", "_blank");
    if (newTab) newTab.blur();       // remove focus from the new tab
    window.focus();                   // bring focus back to your app
  };

  return (
    <div
      onClick={handleClick}
      className="credit-bubble"
      style={{
        position: "fixed",
        right: collapsed ? "10px" : "10px",
        bottom: "20px",
        // width: "50px",
        width: collapsed ? "30px" : "50px",
        // height: "50px",
        height: collapsed ? "30px" : "50px",
        borderRadius: "50%",
        // borderRadius: collapsed ? "50%" : "40px 0 0 40px",
        backgroundColor: "rgba(224, 200, 200, 0.8)",
        color: "#fff",
        // display: "flex",
        // alignItems: "right",
        textAlign: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 1s ease",
        overflow: "hidden",
        fontSize: collapsed ? "20px" : "15px",
        padding: collapsed ? "0px" : "10px",
        opacity: collapsed ? "50%" : "100%",
      }}
    >
      {collapsed ? "🍁" : `made in 🍁`}
    </div>
  );
}


// right: collapsed ? "0px" : "10px",
// width: collapsed ? "50px" : "200px",
// height: collapsed ? "40px" : "200px",
// borderRadius: "50%",
// // borderRadius: collapsed ? "50%" : "40px 0 0 40px",
// fontSize: collapsed ? "16px" : "1rem",
