import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FaEbay, FaShippingFast } from "react-icons/fa";
import watch from "/assets/watch.webp";
import headphone from "/assets/headphone.webp";
import tab from "/assets/Tab.webp";
import laptop from "/assets/laptops.webp";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const EbayProducts = () => {
  const products = [
    {
      title: "Citizen Herren Uhren Men's Calendar Green Automatic Watch 41 MM NY0121-09X",
      price: "$150.99",
      shipping: "Free delivery",
      location: "",
      rating: 5.0,
      image: "https://i.ebayimg.com/images/g/UJsAAOSwRgNniS83/s-l140.jpg",
      url: "https://www.ebay.com/itm/267126839521?_skw=wathces&epid=10075851937&hash=item3e320018e1:g:UJsAAOSwRgNniS83&itmprp=enc%3AAQAKAAAA4FkggFvd1GGDu0w3yXCmi1dizRpY68kRIqqY1V9jgEgs93aLKvNpA2tze%2FHZF777eiwPOpc33J5I8mOZfC0k86wdKAV5cYUTjJqBT5A3peWu1H6UsZ73hq4bPOYvrmyu7DbE%2BZcF9v5MhGhQIrlUNiP9kPMkuK2zzWRt3wsf7JDFiaZxUrzafL%2FwsnjwUNRJ3N1wHx7WhHk9yLT5i%2FFgNfW3hfmEow3ph3Dkb9vRixOyjNa%2BRGoL%2BtMmhQ2H0NL4LaRyIVRA0TjinM3g4uIluIZ89Dv7XuuQYO%2FRQsTgFTLn%7Ctkp%3ABk9SR5aUz_rIZQ",
      id: "320f6815-a0f6-498c-9ffd-da4b565d45cc",
    },
    {
      title: "Shinola The Runwell 41mm Green Dial Leather Strap Argonite 1069 Men's Watch",
      price: "$240.0",
      shipping: "Free delivery",
      location: "",
      rating: 5,
      image: "https://i.ebayimg.com/images/g/1F0AAOSwFohnkf~u/s-l140.jpg",
      url: "https://www.ebay.com/itm/335781262120?_skw=wathces&epid=1130997205&hash=item4e2e1f7328:g:1F0AAOSwFohnkf~u&itmprp=enc%3AAQAKAAAA4FkggFvd1GGDu0w3yXCmi1dzaz7g2kbjgBudtGM%2BeYhJBhGgGUc7SbQQ4okQPBFx8G9nwHoEbdHieA%2FFED7W%2BMy8PH2BvcVwcdk%2FXbnqBqysOlzhhUV%2Fj4R53TpV3NXq6vq8bjodvXi8pLloSfOIZErimMECwNtW3%2Fzs9ljNoBsQmhx7hFFJcvqJR5C8NAhebpDGUe2seYgUjvxPOyWdsu9a6LE0n9BopzIIosltzwJVK18VAYP2NbpgDDx0bLwNXZd8rT6VTz%2BMrSXSOugMuptoHWFANRiTn2AF6W76H1hg%7Ctkp%3ABFBMlpTP-shl",
      id: "b9862e7b-2250-42b7-9e29-f87d0239d45d",
    },
    {
      title: "Bulova Marine Star 96B396 Green Dial Stainless Steel Chronograph Men's Watch",
      price: "$162.0",
      shipping: "Free delivery",
      location: "",
      rating: 4.0,
      image: "https://i.ebayimg.com/images/g/dEwAAOSw73hn9OQ7/s-l140.jpg",
      url: "https://www.ebay.com/itm/316619810221?_skw=wathces&epid=17062110789&hash=item49b802e5ad:g:dEwAAOSw73hn9OQ7&itmprp=enc%3AAQAKAAAA4FkggFvd1GGDu0w3yXCmi1e1rXVqfYiL2BC5dPwmmxP94TqgU0CTEN5iyNTGhGpnikFqny7RMO8PfXGcGtq%2BgJLQ6KduLddUwjT2nDfRYjpeP%2BAs7f1%2F9vJHXXgPqDN5GLCCrxSADTivtgYhew1222nihqth0YJXs3EyOkLy96E4ec1HFGb3lhu24%2FY3LEEcy1WWApPpWh%2BYCsxACpAMOLpzjt00ny34WnB8VKFZ%2ByoQXYU4rDkvvHq9VhT7EpfRE4tr9DlueGQ6mjSjPe%2BrrA3Ka7EbwJ9wBNGWqqGC%2FUoh%7Ctkp%3ABk9SR5aUz_rIZQ",
      id: "c2635793-3be4-4e25-93ff-f9b5b173edd7",
    },
    {
      title: "Seiko Luxury Brand Fashion Business Casual Sports Multifunctional Chronograph Ho",
      price: "$99.0",
      shipping: "Free delivery",
      location: "",
      rating: 0,
      image: "https://i.ebayimg.com/images/g/BokAAOSwnX9nzPx~/s-l140.jpg",
      url: "https://www.ebay.com/itm/286394303071?_skw=wathces&hash=item42ae6e425f:g:BokAAOSwnX9nzPx~&itmprp=enc%3AAQAKAAAA4FkggFvd1GGDu0w3yXCmi1e28ET4Uc2msq2OCNcKi5yt80ZPAXAfic2Z8p2CMpwG6KOY5mlmGP0ZXEiuFzaYleE03AOK1CuQ9ABSIoK8g0eiz8OnHkrgb1u%2FT8MErhDPocDLS3HutdtOx0lDSw%2FwLFAY96vHfNCxPmvr2NKjwWozSdFV4YYezq0d%2FZLyt%2B1zPmBGILhDfVt6naUvSwoTc%2Fu4X3JxlQw0GVJEzFUCCjVSFDFYmgL6cS8i321obwZjcnImqSHmCh0rA1iv6XYmrMkj6YsuMRXcJe1qxC9t1tkP%7Ctkp%3ABk9SR5iUz_rIZQ",
      id: "564819b3-c5ab-4318-bb66-ce047daa8fa7",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-3">
            <FaEbay className="w-8 h-8 text-[#E53238]" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0064D2] to-[#E53238] bg-clip-text text-transparent">eBay's Products</h2>
          </div>
          <p className="text-gray-600 text-lg">Top rated products with fast & free shipping</p>
          <div className="mt-6 flex items-center gap-4">
            <Link to="/search-ebay-product" className="flex items-center gap-2 px-6 py-2.5 bg-[#0064D2] text-white rounded-full hover:bg-[#E53238] transition-all duration-300">
              <span className="font-medium">View more</span>
              <IoChevronForward className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 text-[#0064D2]">
              <FaShippingFast className="w-5 h-5" />
              <span className="font-medium">Free Shipping</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EbayProducts;
