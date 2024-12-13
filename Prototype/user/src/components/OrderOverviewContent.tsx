import { Order } from "../types/order";
import { format } from "date-fns";

interface OrderOverviewContentProps {
  order: Order;
}

const OrderOverviewContent = ({ order }: OrderOverviewContentProps) => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Sender</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📅</span>
            <span>{format(new Date(order.orderDate), "EEEE, dd.MM.yyyy")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">⏰</span>
            <span>{format(new Date(order.orderDate), "HH:mm")} - {format(new Date(order.deliveryDate), "HH:mm")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📍</span>
            <span>{order.startingAddress.street}, {order.startingAddress.postalCode} {order.startingAddress.city}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Consignee</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📅</span>
            <span>{format(new Date(order.deliveryDate), "EEEE, dd.MM.yyyy")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">⏰</span>
            <span>{format(new Date(order.deliveryDate), "HH:mm")} - {format(new Date(order.deliveryDate), "HH:mm")}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📍</span>
            <span>{order.deliveryAddress.street}, {order.deliveryAddress.postalCode} {order.deliveryAddress.city}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Goods</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📦</span>
            <span>{order.goods.quantity} {order.goods.type}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">⚖️</span>
            <span>{order.goods.weight}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📏</span>
            <span>{order.goods.size}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Contact</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-500">👤</span>
            <span>{order.contact.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">🏢</span>
            <span>{order.contact.company}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">📧</span>
            <span>{order.contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOverviewContent;