"use client";
import styles from "./page.module.css";
import { Rating } from "./components/Rating";
import { Calendar } from "./components/Calendar";
import { Sidebar } from "./components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState(0);
  const components = [
    { id: 0, component: <Rating stars={7} />, name: "RATING" },
    { id: 1, component: <Calendar />, name: "CALENDAR" },
  ];

  const renderComponent = components.filter(
    (c) => c.id === selectedComponent
  )[0];
  return (
    <main style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar
        setSelectedComponent={setSelectedComponent}
        components={components}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        {renderComponent.component}
      </div>
    </main>
  );
}
