import React, { useEffect, useState } from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import Breadcrumbs from "../../menu/BreadCrumbs";
import { products } from "../../../../data/products";
import data from "../../../../data/SingleProduct.json";
import SingleProductTabs from "./SingleProductTabs";
import ReactStars from "react-rating-stars-component";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductDetailsSection = () => {
  const breadcrumbs = [
    { href: "/", label: "Home", active: false },
    { href: "/product-detail", label: "Product Detail", active: true },
  ];

  // const initialColor = data.product.result.item.sku.props.find(
  //   (prop) => prop.name === "Color"
  // ).values[0].propTips;

  // const initialBundle = data.product.result.item.sku.props.find(
  //   (prop) => prop.name === "Bundle"
  // ).values[0].propTips;

  const getDefaultProp = (propName) => {
    const prop = data.product.result.item.sku.props.find(
      (prop) => prop.name === propName
    );
    return prop ? prop.values[0].propTips : null;
  };

  const initialColor = getDefaultProp("Color");
  const initialBundle = getDefaultProp("Bundle");

  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedBundle, setSelectedBundle] = useState(initialBundle);
  const [selectedSku, setSelectedSku] = useState("");
  const [mainImage, setMainImage] = useState(products[0].item.image);

  useEffect(() => {
    if (initialColor || initialBundle) {
      updateSelectedSku(initialColor, initialBundle);
    }
  }, []);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    updateSelectedSku(color, selectedBundle);
  };

  const handleBundleClick = (bundle) => {
    setSelectedBundle(bundle);
    updateSelectedSku(selectedColor, bundle);
  };

  const updateSelectedSku = (color, bundle) => {
    const matchingSku = data.product.result.item.sku.base.find((item) => {
      const props = item.skuAttr.split(";");
      const colorMatch = color
        ? props.some((prop) => {
            const [key, value] = prop.split("#");
            return value === color;
          })
        : true;
      const bundleMatch = bundle
        ? props.some((prop) => {
            const [key, value] = prop.split("#");
            return value === bundle;
          })
        : true;
      return colorMatch && bundleMatch;
    });

    setSelectedSku(matchingSku);
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  //for star rating
  const options = {
    edit: false,
    value: data.product.result.reviews.averageStar,
    isHalf: true,
    filledIcon: <BsStarFill size={18} />,
    halfIcon: <BsStarHalf size={18} />,
    emptyIcon: <BsStar size={18} color="gold" />,
  }; //end rating

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <div class="font-sans bg-gray-100">
        <div class="p-6 lg:max-w-[1600px]  max-w-4xl mx-auto">
          <div class="grid items-start grid-cols-1 lg:grid-cols-6 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
            <div class="lg:col-span-3 w-full lg:sticky top-0 text-center flex justify-center items-center">
              <div class="px-4 py-10 w-[75%] flex justify-center  order-2 rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                <img
                  src={mainImage}
                  alt="Product"
                  class="rounded object-cover"
                />
              </div>

              <div class=" flex flex-col  max-h-[450px] overflow-scroll w-1/4 ">
                {data.product.result.item.images.map((image, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]"
                    onClick={() => handleThumbnailClick(image)}
                  >
                    <img
                      src={image}
                      alt="Product2"
                      class="w-24 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div class="lg:col-span-3 ">
              <div className="flex  items-center">
                <h2 class="text-2xl font-extrabold text-black text-[26px]">
                  {products[0].item.title}
                </h2>
                <span></span>
              </div>

              <div className="flex mt-3  border-blue-900 gap-x-2 items-center">
                <ReactStars {...options} />
                <p className="text-xs dark:text-gray-400 ">
                  ({data.product.result.reviews.count} customer reviews)
                </p>
              </div>

              <div class="flex flex-wrap gap-x-2 mt-4 items-center">
                <p class="text-[##2D56FF] text-3xl font-bold">
                  {selectedSku && selectedSku.price}
                </p>
              </div>
              {initialColor && (
                <div className="">
                  <div className="mt-4">
                    <p className="font-bold ">Select Color:</p>
                    <div className="flex flex-wrap gap-2">
                      {data.product.result.item.sku.props
                        .find((prop) => prop.name === "Color")
                        .values.map((value) => (
                          <button
                            className=" hover:border-blue-700 text-nowrap rounded-md  border-2 py-2 px-4 gap-x-2"
                            key={value.vid}
                            onClick={() => handleColorClick(value.propTips)}
                            style={{
                              backgroundColor:
                                selectedColor === value.propTips
                                  ? "lightblue"
                                  : "white",
                            }}
                          >
                            {value.name}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {initialBundle && (
                <div>
                  <div className="mt-4">
                    <p className="font-bold">Select Bundle:</p>
                    <div className="flex flex-wrap gap-2">
                      {data.product.result.item.sku.props
                        .find((prop) => prop.name === "Bundle")
                        .values.map((value) => (
                          <button
                            className=" hover:border-blue-700 rounded-md  border-2 py-2 px-4 gap-x-2"
                            key={value.vid}
                            onClick={() => handleBundleClick(value.propTips)}
                            style={{
                              backgroundColor:
                                selectedBundle === value.propTips
                                  ? "lightblue"
                                  : "white",
                            }}
                          >
                            {value.name}
                          </button>
                        ))}
                    </div>
                  </div>
                </div>
              )}

              {/* <div className="flex justify-start mt-4">
                <div className="flex gap-x-3 justify-center items-center rounded-xl p-2">
                  <span>Fire</span>
                  <div className="flex flex-col justify-center items-center">
                    <span className="font-bold">12</span>
                    <span>Days</span>
                  </div>
                  <span className="h-6 text-red-700  w-[1px]"></span>

                  <div className="flex flex-col">
                    <span className="font-bold">12</span>
                    <span>Hours</span>
                  </div>
                  <span className="h-6 text-red-700  w-[1px]"></span>

                  <div className="flex flex-col">
                    <span className="font-bold">12</span>
                    <span>Min</span>
                  </div>
                  <span className="h-6 text-red-700 w-[1px]"></span>

                  <div className="flex flex-col">
                    <span className="font-bold">12</span>
                    <span>Sec</span>
                  </div>
                </div>
              </div> */}

              {/* <div class="flex mt-6 items-center justify-between">
                <div class="flex bg-white">
                  <span class="mr-3">Color</span>
                  <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>

                <div class="flex items-center justify-center gap-x-2 custom-checkbox">
                  <input type="checkbox" id="accessories" />
                  <label for="accessories" class="cursor-pointer ">
                    Add Accessories
                  </label>
                </div>
              </div> */}

              <div className="flex gap-x-3 mt-6 items-center">
                <span>quantity</span>
                <div className="flex gap-x-2 items-center">
                  <CiSquarePlus size={35} />
                  <span>1</span>
                  <CiSquareMinus size={35} />
                </div>
              </div>

              <div class="flex flex-wrap gap-4 mt-10">
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-3 bg-blue-700 text-white text-sm font-semibold rounded-full"
                >
                  Buy now
                </button>
                <button
                  type="button"
                  class="min-w-[200px] px-4 py-2.5 border  bg-transparent hover:bg-gray-50  text-sm font-semibold rounded-full"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      <SingleProductTabs data={data.product} />
    </>
  );
};

export default ProductDetailsSection;
