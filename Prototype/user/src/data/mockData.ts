import { Order } from "../types/order";

export var mockOrders: Order[] = [
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
  },
  {
    id: "985123",
    orderDate: "2024-02-10T10:30:00",
    deliveryDate: "2024-02-12T14:00:00",
    startingAddress: {
      street: "Industriestraße 15",
      city: "Munich",
      postalCode: "80339",
      country: "Germany"
    },
    deliveryAddress: {
      street: "Hauptplatz 8",
      city: "Nuremberg",
      postalCode: "90402",
      country: "Germany"
    },
    goods: {
      type: "Automotive Parts",
      size: "150 x 100 x 75 cm",
      weight: "120 kg",
      quantity: 4
    },
    contact: {
      name: "Lisa Wagner",
      company: "AutoTech GmbH",
      email: "l.wagner@autotech.de"
    },
    status: "pending"
  },
  {
    id: "985234",
    orderDate: "2024-02-15T09:15:00",
    deliveryDate: "2024-02-17T16:30:00",
    startingAddress: {
      street: "Werftstraße 9",
      city: "Hamburg",
      postalCode: "20457",
      country: "Germany"
    },
    deliveryAddress: {
      street: "Schillerstraße 5",
      city: "Leipzig",
      postalCode: "04109",
      country: "Germany"
    },
    goods: {
      type: "Industrial Equipment",
      size: "220 x 180 x 90 cm",
      weight: "350 kg",
      quantity: 1
    },
    contact: {
      name: "Marcus Klein",
      company: "IndustrieWerk GmbH",
      email: "m.klein@industriewerk.de"
    },
    status: "in-transit"
  }
];

export const startOrder: Order[] = [
  {
    id: "984553",
    orderDate: "2024-12-17T08:30:00",
    deliveryDate: "2024-12-27T17:00:00",
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
    status: "pending"
  }
]

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
    content: "I'll help you with that. Do you want to use your standard adress in Ingolstadt?"
  },
  {
    role: "user",
    content: "Yes and the package should be send to Gieslastraße 5, 80802 München"
  },
  {
    role: "assistant",
    content: "Thank you. And what's the exact dimensions and weight of the send items?"
  },
  {
    role: "user",
    content: "The send items are 2 satellite parts weighing 280kg and has a width of 240 a height of 160 and depth of 85"
  },
  {
    role: "assistant",
    content: "Alright, i will assume centimeters. Also I will use the contact data from the reciever adress which was Satfix GmbH. Is this correct"
  },
  {
    role: "user",
    content: "This is correct"
  },
  {
    role: "assistant",
    content: "Great, here is a order summary"
  }
];
