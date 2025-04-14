import Skeleton from "react-loading-skeleton";

const ITEMS_PER_PAGE = 8;

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[...Array(ITEMS_PER_PAGE)].map((_, index) => (
      <div key={index} className="group relative rounded-2xl border border-gray-100 overflow-hidden">
        {/* Product Image Skeleton */}
        <div className="aspect-square p-6 flex items-center justify-center">
          <Skeleton height={320} width={320} className="rounded-lg" />
        </div>

        {/* Product Info Skeleton */}
        <div className="p-6">
          {/* Title Skeleton */}
          <div className="mb-2">
            <Skeleton count={2} height={20} className="mb-1" />
          </div>

          {/* Rating & Prime Skeleton */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <Skeleton width={80} height={16} />
            </div>
            <Skeleton width={60} height={16} />
          </div>

          {/* Price Skeleton */}
          <div className="flex items-baseline gap-2 mb-4">
            <Skeleton width={80} height={32} />
            <Skeleton width={60} height={16} />
          </div>

          {/* Button Skeleton */}
          <Skeleton height={48} className="rounded-xl" />
        </div>
      </div>
    ))}
  </div>
);

export default LoadingSkeleton;
