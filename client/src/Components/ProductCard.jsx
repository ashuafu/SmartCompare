import { IoStar, IoStarHalf } from "react-icons/io5";
import { FaAmazon } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar key={`star-${i}`} className="w-4 h-4 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<IoStarHalf key="half-star" className="w-4 h-4 text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<IoStar key={`empty-star-${i}`} className="w-4 h-4 text-gray-200" />);
    }

    return stars;
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">-{product.discount}%</div>
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square p-6 flex items-center justify-center overflow-hidden relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-48 h-48 object-contain transform transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/200?text=No+Image";
          }}
        />
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-base font-medium text-gray-900 line-clamp-2 mb-2 min-h-[48px]">{product.title}</h3>

        {/* Rating & Prime */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {renderRatingStars(product.rating)}
            {product.reviews && (
              <span className="text-xs text-gray-500 ml-1 flex items-center">
                <FaRegCommentDots className="mr-1" />
                {product.reviews}
              </span>
            )}
          </div>
          {product.isPrime && (
            <div className="flex items-center gap-1 text-[#FF9900]">
              <FaAmazon className="w-4 h-4" />
              <span className="text-xs font-medium">Prime</span>
            </div>
          )}
        </div>

        {/* Shop Information */}
        {product.shop && (
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <BsShop className="mr-1.5" />
            <span className="truncate">{product.shop}</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
          {product.originalPrice > product.price && <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>}
        </div>

        {/* Add to Cart Button */}
        <button onClick={() => window.open(product.url, "_blank")} className="w-full cursor-pointer font-extrabold bg-[#FF9900] hover:bg-[#FF9900]/90 text-white py-3 rounded-xl font-medium text-sm transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
