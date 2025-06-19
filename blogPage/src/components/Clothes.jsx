import React from "react";
import  clothingData from "../../src/ConstData/ClothesData"

const Cloths = () => {
  const { categories } = clothingData;

  return (
    <div>
      {Object.entries(categories).map(([categoryName, items]) => (
        <div key={categoryName}>
          <h5 style={{ textTransform: 'capitalize' }}>{categoryName}</h5>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            {items.map((item) => (
              <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
                <img src={item.image_url} alt={item.title} style={{ width: "100%", height: "auto" }} />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cloths;
