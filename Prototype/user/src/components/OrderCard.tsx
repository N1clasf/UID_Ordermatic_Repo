import { Order } from "../types/order";
import { useNavigate } from "react-router-dom";

interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const navigate = useNavigate();

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500";
      case "in-transit":
        return "bg-blue-500";
      case "delivered":
        return "bg-green-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      onClick={() => navigate(`/order/${order.id}`)}
      className="bg-white p-4 rounded-lg shadow-sm mb-3 cursor-pointer"
    >
      <div className="flex justify-between items-center mb-2">
        <div>
          <span className="font-medium">{order.goods.type}</span>
          <div className="text-sm text-gray-500">
            Order No: {order.id}
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs text-white ${getStatusColor(order.status)}`}>
          {order.status}
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div>{order.startingAddress.city}</div>
        <div>→</div>
        <div>{order.deliveryAddress.city}</div>
      </div>
    </div>
  );
};

export default OrderCard;