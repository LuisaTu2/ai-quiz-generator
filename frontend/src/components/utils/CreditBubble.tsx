import { useEffect, useState } from "react";

export default function CreditBubble() {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCollapsed(true), 5000); // initial show after 2s
    return () => clearTimeout(timer);
  }, []);


  const handleClick = () => {
    setCollapsed(false); // toggle expanded/collapsed
    setTimeout(() => setCollapsed(true), 5000);
    const newTab = window.open("http://findingLuisa.com", "_blank");
    if (newTab) newTab.blur();       // remove focus from the new tab
    window.focus();                   // bring focus back to your app
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setCollapsed(false)}
      onMouseLeave={() => setCollapsed(true)}
      className="credit-bubble"
      style={{
        position: "fixed",
        right: collapsed ? "40px" : "10px",
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
        placeContent: "center",
        cursor: "pointer",
        transition: "all 1s ease",
        overflow: "hidden",
        fontSize: collapsed ? "20px" : "13px",
        padding: collapsed ? "0px" : "8px",
        opacity: collapsed ? "80%" : "100%",
      }}
    >
      {collapsed ? "🍁" : `made in 🍁`}
    </div>
  );
}
