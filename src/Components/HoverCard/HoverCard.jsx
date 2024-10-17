import { useState, useRef } from "react";
import "./HoverCard.css";

const HoverCard = ({ children }) => {
  const cardRef = useRef(null); // To reference the card element
  const [bounds, setBounds] = useState(null);
  const [cardMove, setCardMove] = useState({
    rotationX: 0,
    rotationY: 0,
    rotationAngle: 0,
  });
  // Helper function to calculate distance
  const calculateDistance = (x, y) => Math.sqrt(x ** 2 + y ** 2);

  // Helper function to calculate rotation
  const calculateRotation = (center, distance) => {
    const rotationX = center.y / 100;
    const rotationY = -center.x / 100;
    const rotationAngle = Math.log(distance) * 2;
    return { rotationX, rotationY, rotationAngle };
  };

  // Function to handle mouse movement
  const handleMouseMove = (e) => {
    if (!bounds) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calculate mouse offset relative to the card
    const offsetX = mouseX - bounds.x;
    const offsetY = mouseY - bounds.y;
    const center = {
      x: offsetX - bounds.width / 2,
      y: offsetY - bounds.height / 2,
    };

    // Calculate distance and rotation values
    const distance = calculateDistance(center.x, center.y);
    const { rotationX, rotationY, rotationAngle } = calculateRotation(
      center,
      distance
    );

    setCardMove({
      rotationX,
      rotationY,
      rotationAngle,
    });
  };

  // Function to handle mouse enter (initialize bounds)
  const handleMouseEnter = () => {
    const cardBounds = cardRef.current.getBoundingClientRect();
    setBounds(cardBounds);
  };

  // Function to handle mouse leave (reset styles)
  const handleMouseLeave = () => {
    cardRef.current.style.transform = "";
    cardRef.current.style.backgroundImage = "";
  };

  return (
    <div
      ref={cardRef}
      className="hover-card"
      style={{
        transform: ` scale3d(1.07, 1.07, 1.07)
      rotate3d(${cardMove.rotationX}, ${cardMove.rotationY}, 0, ${cardMove.rotationAngle}deg)`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default HoverCard;