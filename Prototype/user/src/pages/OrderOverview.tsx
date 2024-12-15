import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { mockOrders } from "../data/mockData";
import { cn } from "@/lib/utils";

const OrderOverview = () => {
  const { orderId } = useParams();
  const order = mockOrders.find(o => o.id === orderId) || mockOrders[0];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-transit":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto border-x">
      <Header showBack />
      
      <div className="p-4">
      <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Order #{order.id}</h1>
          <span className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            getStatusColor(order.status)
          )}>
            {order.status}
          </span>
        </div>
        <div className="bg-white rounded-lg shadow-sm mb-4">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Sender</h2>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📅</span>
                <span>{new Date(order.orderDate).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📍</span>
                <span>{order.startingAddress.street}, {order.startingAddress.postalCode} {order.startingAddress.city}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-4">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Consignee</h2>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📅</span>
                <span>{new Date(order.deliveryDate).toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500">📍</span>
                <span>{order.deliveryAddress.street}, {order.deliveryAddress.postalCode} {order.deliveryAddress.city}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm mb-4">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Goods</h2>
            <div className="mt-2 space-y-2">
              <div>{order.goods.quantity} {order.goods.type}</div>
              <div className="text-gray-600">{order.goods.weight}</div>
              <div className="text-gray-600">{order.goods.size}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-4">
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className="mt-2 space-y-2">
              <div>{order.contact.name}</div>
              <div className="text-gray-600">{order.contact.company}</div>
              <div className="text-gray-600">{order.contact.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOverview;