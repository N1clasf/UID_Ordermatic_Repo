import { Order } from "../types/order";

export const mockOrders: Order[] = [
  {
    id: "984553",
    orderDate: "2024-01-25T08:30:00",
    deliveryDate: "2024-01-27T17:00:00",
    startingAddress: {
      street: "Gieslastraße 5",
      city: "München",
      postalCode: "80802",
      country: "Germany"
    },
    deliveryAddress: {
      street: "Ludwigstraße 14",
      city: "Ingolstadt",
      postalCode: "85049",
      country: "Germany"
    },
    goods: {
      type: "Satellite parts",
      size: "240 x 160 x 85 cm",
      weight: "280 kg",
      quantity: 2
    },
    contact: {
      name: "Clara Miller",
      company: "SatFix GmbH",
      email: "clara.miller@satpa.com"
    },
    status: "in-transit"
  },
  {
    id: "984456",
    orderDate: "2024-01-24T14:15:00",
    deliveryDate: "2024-01-26T12:00:00",
    startingAddress: {
      street: "Hauptstraße 22",
      city: "Stuttgart",
      postalCode: "70173",
      country: "Germany"
    },
    deliveryAddress: {
      street: "Industrieweg 8",
      city: "Cologne",
      postalCode: "50667",
      country: "Germany"
    },
    goods: {
      type: "Machine Parts",
      size: "180 x 120 x 60 cm",
      weight: "150 kg",
      quantity: 1
    },
    contact: {
      name: "Martin Weber",
      company: "TechPro GmbH",
      email: "m.weber@techpro.de"
    },
    status: "pending"
  },
  {
    id: "984789",
    orderDate: "2024-02-01T09:00:00",
    deliveryDate: "2024-02-03T15:30:00",
    startingAddress: {
      street: "Berliner Allee 45",
      city: "Berlin",
      postalCode: "10115",
      country: "Germany"
    },
    deliveryAddress: {
      street: "Hafenstraße 12",
      city: "Hamburg",
      postalCode: "20457",
      country: "Germany"
    },
    goods: {
      type: "Electronics",
      size: "120 x 80 x 60 cm",
      weight: "75 kg",
      quantity: 3
    },
    contact: {
      name: "Sarah Schmidt",
      company: "TechCorp GmbH",
      email: "s.schmidt@techcorp.de"
    },
    status: "delivered"
  },
  {
    id: "984901",
    orderDate: "2024-02-05T11:20:00",
    deliveryDate: "2024-02-07T16:45:00",
    startingAddress: {
      street: "Münchener Str. 78",
      city: "Frankfurt",
      postalCode: "60329",
      country: "Germany"
    },
    deliveryAddress: {
      street: "Rheinstraße 25",
      city: "Düsseldorf",
      postalCode: "40213",
      country: "Germany"
    },
    goods: {
      type: "Medical Equipment",
      size: "200 x 150 x 100 cm",
      weight: "180 kg",
      quantity: 1
    },
    contact: {
      name: "Thomas Müller",
      company: "MedTech Solutions",
      email: "t.mueller@medtech.de"
    },
    status: "cancelled"
  }
];

export const mockConversation = [
  {
    role: "assistant",
    content: "Hello! I'm here to help you with your logistics order. Could you tell me about what you need to ship?"
  },
  {
    role: "user",
    content: "I need to ship some satellite parts from Munich to Ingolstadt"
  },
  {
    role: "assistant",
    content: "I'll help you with that. Could you please specify the pickup address in Munich?"
  },
  {
    role: "user",
    content: "Gieslastraße 5, 80802 München"
  },
  {
    role: "assistant",
    content: "Thank you. And what's the delivery address in Ingolstadt?"
  }
];