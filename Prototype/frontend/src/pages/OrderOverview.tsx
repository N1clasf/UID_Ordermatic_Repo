import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { mockOrders } from "../data/mockData";

const OrderOverview = () => {
  const { orderId } = useParams();
  const order = mockOrders.find(o => o.id === orderId) || mockOrders[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack />
      
      <div className="p-4">
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