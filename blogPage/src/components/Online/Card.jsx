import React, { useState } from "react";
import ClothsData from "../Online/third45"; // Adjust path if needed

const Cloths = () => {
  const { Datacategories } = ClothsData;

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categoryNames = Object.keys(Datacategories);

  // Filter categories to show
  const filteredData =
    selectedCategory === "all"
      ? Datacategories
      : { [selectedCategory]: Datacategories[selectedCategory] };

  return (
    <div style={{ padding: "20px" }}>
      {/* Dropdown Menu */}
      <label htmlFor="category" style={{ fontWeight: "bold", marginRight: "10px" }}>
        Select Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        style={{ padding: "5px 10px", marginBottom: "20px" }}
      >
        <option value="all">All</option>
        {categoryNames.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Render Items */}
      {Object.entries(filteredData).map(([categoryName, items]) => (
        <div class="m-4" key={categoryName}>
            <div class="mt-6  grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">

            {items.map((item) => (
              <div key={item.id}>
               <div class="group relative w-full rounded-md ">
                <img src={item.url}alt={item.dress_name}  class="aspect-square h-[450px] w-full rounded-md h  bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-90"/></div>

                  <h3 class="text-sm text-blue-700">
                 <a href="#">
                 <span aria-hidden="true" class="absolute inset-0"></span>
                   {item.title}
                 </a>
               </h3>

                <p  class="mt-1 text-sm text-gray-500">{item.dress_name}</p>
                <p class="text-sm font-medium text-gray-900">Price: ${item.price}</p>
                <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="1 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="2 star" defaultChecked />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="3 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="4 star" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" aria-label="5 star" />
</div>
              </div>
           
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cloths;
