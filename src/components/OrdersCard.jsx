import { XMarkIcon } from "@heroicons/react/20/solid";

const OrdersCard = ({ orderInfo }) => {
  const { totalPrice, totalProducts } = orderInfo;

  return (
    <div className="flex justify-between items-center border border-black">
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdersCard;