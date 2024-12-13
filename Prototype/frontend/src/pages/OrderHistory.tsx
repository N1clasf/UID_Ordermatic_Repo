import { useState } from "react";
import { Filter } from "lucide-react";
import Header from "../components/Header";
import OrderCard from "../components/OrderCard";
import { FilterDialog } from "../components/FilterDialog";
import { mockOrders } from "../data/mockData";
import { Order } from "../types/order";
import { Button } from "../components/ui/button";

const OrderHistory = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(mockOrders);

  const handleApplyFilters = (filters: {
    search: string;
    status: string;
    orderDateStart: string;
    orderDateEnd: string;
    deliveryDateStart: string;
    deliveryDateEnd: string;
  }) => {
    let filtered = mockOrders;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.id.toLowerCase().includes(searchLower) ||
          order.contact.name.toLowerCase().includes(searchLower)
      );
    }

    if (filters.status) {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    if (filters.orderDateStart) {
      filtered = filtered.filter(
        (order) => new Date(order.orderDate) >= new Date(filters.orderDateStart)
      );
    }

    if (filters.orderDateEnd) {
      filtered = filtered.filter(
        (order) => new Date(order.orderDate) <= new Date(filters.orderDateEnd)
      );
    }

    if (filters.deliveryDateStart) {
      filtered = filtered.filter(
        (order) => new Date(order.deliveryDate) >= new Date(filters.deliveryDateStart)
      );
    }

    if (filters.deliveryDateEnd) {
      filtered = filtered.filter(
        (order) => new Date(order.deliveryDate) <= new Date(filters.deliveryDateEnd)
      );
    }

    setFilteredOrders(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showBack />
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">My Orders</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowFilter(true)}
          >
            <Filter className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-3">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>

      <FilterDialog
        open={showFilter}
        onOpenChange={setShowFilter}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default OrderHistory;