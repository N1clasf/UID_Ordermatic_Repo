import React, { useState } from 'react';

type Order = {
  id: number;
  status: 'new' | 'approved' | 'pending' | 'delivered';
  company: string;
  deliveryObject: {
    name: string;
    weight: string;
    materials: string;
  };
  route: string[];
};

const orders: Order[] = [
  { id: 5211, status: 'new', company: 'Maxmustermann GmbH', deliveryObject: { name: 'Heating Oil', weight: '5t', materials: 'Oil Hazard Lvl:2' }, route: ['Point A', 'Point B', 'Point C'] },
  { id: 5212, status: 'new', company: 'Example GmbH', deliveryObject: { name: 'Diesel', weight: '2t', materials: 'Oil Hazard Lvl:1' }, route: ['Point A', 'Point D'] },
  // Add more sample orders here
];

const OrderPage: React.FC = () => {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(orders[0]);

  const handleOrderClick = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleConfirm = () => {
    alert('Order confirmed!');
  };

  const handleDecline = () => {
    alert('Order declined!');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Orders List */}
      <div className="w-1/4 bg-white shadow-md">
        <h2 className="text-xl font-bold p-4 border-b">Orders</h2>
        <ul>
          {orders.map((order) => (
            <li
              key={order.id}
              className={`p-4 border-b cursor-pointer ${
                selectedOrder?.id === order.id ? 'bg-gray-200' : ''
              }`}
              onClick={() => handleOrderClick(order)}
            >
              <p>Order: {order.id}</p>
              <p>Status: {order.status}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Order Details */}
      <div className="w-2/4 p-6">
        {selectedOrder ? (
          <div>
            <h3 className="text-xl font-bold mb-4">Order: {selectedOrder.id}</h3>
            <p className="mb-2">
              <strong>Company:</strong> {selectedOrder.company}
            </p>
            <p className="mb-2">
              <strong>Delivery Object:</strong>
              <br />
              Name: {selectedOrder.deliveryObject.name}
              <br />
              Weight: {selectedOrder.deliveryObject.weight}
              <br />
              Materials: {selectedOrder.deliveryObject.materials}
            </p>
            <p>
              <strong>Details:</strong> Add additional info here.
            </p>
          </div>
        ) : (
          <p>No order selected.</p>
        )}
      </div>

      {/* Route and Actions */}
      <div className="w-1/4 bg-white shadow-md p-6">
        {selectedOrder && (
          <>
            <h4 className="text-xl font-bold mb-4">Route</h4>
            <ul className="mb-4">
              {selectedOrder.route.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex space-x-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={handleDecline}
              >
                Decline
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderPage;