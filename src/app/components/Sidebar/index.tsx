export const Sidebar = ({ setSelectedComponent, components }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: 200,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      {components.map((component) => (
        <p
          key={component.id}
          style={{
            color: "black",
            border: "1px solid black",
            width: "100%",
            padding: 8,
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={() => setSelectedComponent(component.id)}
        >
          {component.name}
        </p>
      ))}
    </div>
  );
};
