export interface Order {
  id: string;
  orderDate: string;
  deliveryDate: string;
  startingAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  deliveryAddress: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  goods: {
    type: string;
    size: string;
    weight: string;
    quantity?: number;
  };
  contact: {
    name: string;
    company: string;
    email: string;
  };
  status: "pending" | "in-transit" | "delivered" | "cancelled";
}