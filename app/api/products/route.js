import fs from "fs";
import path from "path";

export function getProduct(id) {  // It accepts an optional parameter id. If provided, the function returns the product with the corresponding id.

  const filePath = path.join(process.cwd(), "products.json");
  const fileContent = fs.readFileSync(filePath, "utf8");
  const products = JSON.parse(fileContent);

//   If an id is provided, products.find() is used to search through the array of products to find the one with a matching id. The parseInt(id) converts the id to an integer to ensure proper comparison since id might be passed as a string.
// If no id is provided, the function returns the entire products array.

  if (id) {
    return products.find(product => product.id === parseInt(id));
  }

  return products;
}
