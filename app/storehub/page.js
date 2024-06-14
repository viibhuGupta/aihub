import React from "react";
import { getCategories } from "../api/categories/route";
import { getProduct } from "../api/products/route";
import CategoryListing from "@/components/CategoryListing";
import ProductListing from "@/components/ProductListing";

const Page = async () => {
  const categories = await getCategories();
  // console.log(categories)

  const products = await getProduct();
  // console.log(products)

  const allTelevision = products.filter((product) => {
    return product.category_id == 1;
  });

  const allMobiles = products.filter((product) => {
    return product.category_id == 2;
  });

  const allClothes = products.filter((product) => {
    return product.category_id == 3;
  });

  const allFurniture = products.filter((product) => {
    return product.category_id == 4;
  });
  return (
    <div className="flex flex-col gap-[1rem]">
      <CategoryListing data={categories} title="Category of Products " />

      <ProductListing data={allTelevision} title="Televisions" />

      <ProductListing data={allMobiles} title="Mobiles" />

      <ProductListing data={allClothes} title="Clothes" />

      <ProductListing data={allFurniture} title="Furniture" />
      <ProductListing data={products} title="All Products" />
    </div>
  );
};

export default Page;
