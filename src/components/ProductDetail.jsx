import { XCircleIcon } from "@heroicons/react/24/outline";

const ProductDetail = () => {
  return (
    <aside
      className="
        w-[360px]
        h-[calc(100vh-68px)]
        flex
        flex-col
        fixed right-0 top-[68px]
        border border-black
        rounded-lg
        bg-white
      "
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <button className="w-8 h-8">
          <XCircleIcon />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;