import { CalendarDaysIcon } from "@heroicons/react/20/solid";
import { ShoppingBagIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const OrdersCard = ({ orderInfo }) => {
  const { totalPrice, totalProducts } = orderInfo;

  return (
    <div 
      className="
        w-80 
        flex justify-between items-center 
        p-4 
        rounded-lg
        border border-black
      "
    >
      <p className="w-full flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-black">
            <CalendarDaysIcon className="w-6 h-6"/>
            <span className="font-light">01.02.23</span> 
          </div>
          
          <div className="flex items-center gap-1.5 text-black">
            <ShoppingBagIcon className="w-6 h-6"/>
            <span className="font-light">{totalProducts} articles</span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-2xl font-medium">${totalPrice}</span>
          <ChevronRightIcon className="w-6 h-6 text-black"/>
        </div>
      </p>
    </div>
  );
};

export default OrdersCard;