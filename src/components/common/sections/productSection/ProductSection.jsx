import React from "react";
import Product1 from "../../../../assets/Product (1).png";
import Product2 from "../../../../assets/Product (2).png";
import Product3 from "../../../../assets/Product (3).png";
import Product4 from "../../../../assets/Product (4).png";
import Product5 from "../../../../assets/Product (5).png";
import Product6 from "../../../../assets/Product (6).png";
import Product7 from "../../../../assets/Product (7).png";
import Product8 from "../../../../assets/Product (8).png";
import ProductCard from "../../cards/ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 4,
      numReviews: 2,
      salePrice: 32.99,
      originalPrice: 102.99,
      imageUrl: Product1,
    },
    {
      id: 2,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 5,
      numReviews: 14,
      salePrice: 14.99,
      originalPrice: 120.99,
      imageUrl: Product2,
    },
    {
      id: 3,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 3,
      numReviews: 20,
      salePrice: 54.99,
      originalPrice: 102.99,
      imageUrl: Product3,
    },
    {
      id: 4,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 1,
      numReviews: 80,
      salePrice: 67.99,
      originalPrice: 102.99,
      imageUrl: Product4,
    },
    {
      id: 5,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 5,
      numReviews: 50,
      salePrice: 12.99,
      originalPrice: 109.99,
      imageUrl: Product5,
    },
    {
      id: 6,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 2,
      numReviews: 43,
      salePrice: 56.99,
      originalPrice: 102.99,
      imageUrl: Product6,
    },
    {
      id: 1,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 5,
      numReviews: 12,
      salePrice: 36.99,
      originalPrice: 99.99,
      imageUrl: Product7,
    },
    {
      id: 1,
      name: "Sispaere",
      description: "Lorem ipsum dolor sit amet. Et asperiores autem qui",
      rating: 5,
      numReviews: 120,
      salePrice: 54,
      originalPrice: 102.99,
      imageUrl: Product8,
    },
  ];

  return (
    <div className="mx-10 mt-40 mb-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-[48px] max-w-[1400px] mx-auto mt-6 font-bold text-[#7b49b4]">
          Best Sellers
        </h2>
        <div className="w-32 h-2 bg-[#B275F7] mt-2 rounded-md"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-5  ">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Products;
