export const categories = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Men Clothing" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Women Clothing" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Kids Clothing" }
  ];
  
  export function getCategories() {
    return categories.filter(c => c);
  }