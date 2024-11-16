import { useEffect, useState } from "react";

export default function CursorFollower() {
  // State to hold cursor position
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update position state when mouse moves
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({
        x: event.clientX, // Add scroll position
        y: event.clientY, // Add scroll position
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transition: "transform 3s ease-in-out",
        transform: "translate(-50%, -50%)", // Center the follower
      }}
    ></div>
  );
}
