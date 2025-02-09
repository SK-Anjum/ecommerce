"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

interface Product {
  title: string;
  id: string;
  price: string;
  description: string;
  dicountPercentage: string;
  tags: string;
  isNew: boolean;
  productImage?: string; // Made optional to avoid errors
}

const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    title, _id, price, description,
    dicountPercentage, tags, isNew,
    "productImage": productImage.asset._ref  
  }`;

  return await client.fetch(query);
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);



  function TruncatedText({ description }: { description: string }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 100; // Limit for truncation
  
    return (
      <p className="text-gray-600">
        {isExpanded ? description : `${description.substring(0, maxLength)}...`}
        {description.length > maxLength && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-500 ml-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )} 
      </p>
    );
  }
  
  
  return (
    <div className="container mx-auto px-4 py-1">
      <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md p-4 bg-white"
          >
            <img
              src={product.productImage ? urlFor(product.productImage).width(300).url() : "/placeholder.jpg"}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600"> <TruncatedText description={product.description} /></p>
            <p className="text-lg font-bold mt-2">
              ${product.price}{" "}
              <span className="text-red-500 text-sm">
                (-{product.dicountPercentage}%)
              </span>
            </p>
            <div className="flex items-center gap-2 mt-2">
              {product.tags && (
                <span className="bg-blue-200 text-blue-800 text-xs px-2 py-1 rounded">
                  {product.tags}
                </span>
              )}
              {product.isNew && (
                <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded">
                  New
                </span>
              )}
            </div>
            <button className="mt-4 w-full bg-black text-white py-2 rounded-lg">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
