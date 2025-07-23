
import React from "react";
import "./App.css";
import PhotoCard from "./components/PhotoCard";

const flowers = [
  { title: "Rose", image: "/images/rose.jpg" },
  { title: "Sunflower", image: "/images/sunflower.jpg" },
  { title: "Tulip", image: "/images/tulip.jpg" },
  { title: "Daisy", image: "/images/daisy.jpg" },
  { title: "Lily", image: "/images/lily.jpg" },
  { title: "Lotus", image: "/images/lotus.jpg" },
  { title: "Jasmine", image: "/images/jasmine.jpg" },
  { title: "Orchid", image: "/images/orchid.jpg" },
  { title: "Blueweed", image: "/images/blueweed.jpg" },
  { title: "PeacockFlower", image: "/images/peacockflower.jpg" },
  { title: "Hydrangea", image: "/images/hydrangea.jpg" },
  { title: "Hibiscus", image: "/images/hibiscus.jpg" },
  { title: "Marigold", image: "/images/marigold.jpg" },
  { title: "Bluebell", image: "/images/bluebell.jpg" }
];


function App() {
  return (
    <div className="gallery-container">
      <h1>🌸 Flower Gallery 🌼</h1>
      <div className="gallery-grid">
        {flowers.map((flower, index) => (
          <PhotoCard key={index} title={flower.title} image={flower.image} />
        ))}
      </div>
    </div>
  );
}

export default App;
