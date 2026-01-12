// Colors
export const colors = [
  "white",
  "black",
  "red",
  "maroon",
  "beige",
  "pink",
  "green",
  "yellow",
  "blue",
  "brown",
];

// Multi-select filters (checkbox)
export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
      { value: "brown", label: "Brown" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "XS", label: "XS" },
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
      { value: "XL", label: "XL" },
    ],
  },
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "roadster", label: "Roadster" },
    ],
  },
];

// Single-select filters (radio)
export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-499", label: "Below ₹499" },
      { value: "500-999", label: "₹500 to ₹999" },
      { value: "1000-1999", label: "₹1000 to ₹1999" },
      { value: "2000-2999", label: "₹2000 to ₹2999" },
      { value: "3000-9999", label: "Above ₹3000" },
    ],
  },
  {
    id: "discount",
    name: "Discount",
    options: [
      { value: "10", label: "10% and above" },
      { value: "20", label: "20% and above" },
      { value: "30", label: "30% and above" },
      { value: "40", label: "40% and above" },
      { value: "50", label: "50% and above" },
      { value: "60", label: "60% and above" },
      { value: "70", label: "70% and above" },
      { value: "80", label: "80% and above" },
    ],
  },
  {
    id: "rating",
    name: "Customer Rating",
    options: [
      { value: "4", label: "4★ & above" },
      { value: "3", label: "3★ & above" },
      { value: "2", label: "2★ & above" },
    ],
  },
  {
    id: "availability",
    name: "Availability",
    options: [
      { value: "inStock", label: "In Stock" },
      { value: "outOfStock", label: "Out of Stock" },
    ],
  },
];
