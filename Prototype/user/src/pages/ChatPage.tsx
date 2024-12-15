import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import { mockConversation, mockOrders, startOrder } from "../data/mockData";
import { ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import OrderOverviewContent from "../components/OrderOverviewContent";
import AnimatedCircleButton from "../components/AnimatedCircleButton";
import EditOrderForm from "../components/EditOrderForm";
import { Button } from "@/components/ui/button";
import { Order } from "@/types/order";
import { useToast } from "@/components/ui/use-toast";

const ChatPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<Order>(startOrder[0]);

  const handleCircleClick = () => {
    if (conversationStarted) {
      setMessages([]);
      setConversationStarted(false);
      setIsCollapsed(false);
    } else {
      setConversationStarted(true);
      mockConversation.forEach((message, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, message]);
        }, index * 1000);
      });
    }
  };

  const handleMenuClick = () => {
    navigate("/history");
  };

  const handleEditOrder = (updatedOrder: Order) => {
    setCurrentOrder(updatedOrder);
    toast({
      title: "Order Updated",
      description: "The order details have been successfully updated.",
    });
  };

  const handleConfirmOrder = () => {
    mockOrders.push(currentOrder);
    toast({
      title: "Order Confirmed",
      description: "The order has been added to your order history.",
    });
    setIsCollapsed(false);
    setConversationStarted(false);
    setMessages([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white max-w-md mx-auto border-x">
      <Header onMenuClick={handleMenuClick} />
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-8">
          <h2 className="text-xl font-medium text-center">Tell me about your Order!</h2>
        </div>

        <div className="animate-fade-in">
          {messages.map((message, index) => (
            <ChatBubble
              key={index}
              content={message.content}
              isUser={message.role === "user"}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-center mt-12 mb-20">
          <AnimatedCircleButton 
            onClick={handleCircleClick}
            isActive={conversationStarted}
          />
          <p className="text-sm text-gray-500 mt-4">
            {conversationStarted ? "Click to reset conversation" : "Speak to start the conversation."}
          </p>
        </div>
      </div>

      <Collapsible
        open={isCollapsed}
        onOpenChange={setIsCollapsed}
        className="border-t"
      >
        <CollapsibleTrigger className="flex items-center justify-center w-full p-4 hover:bg-gray-50">
          <ChevronUp className={`w-5 h-5 transition-transform duration-200 ${
            isCollapsed ? 'rotate-0' : 'rotate-180'
          }`} />
        </CollapsibleTrigger>
        
        <CollapsibleContent className="animate-accordion-down">
          <OrderOverviewContent order={currentOrder} />
          <div className="flex justify-center gap-4 p-4">
            <Button variant="outline" onClick={() => setIsEditDialogOpen(true)}>
              Edit Order
            </Button>
            <Button onClick={handleConfirmOrder}>
              Confirm Order
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <EditOrderForm
        order={currentOrder}
        onSave={handleEditOrder}
        open={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
      />

      <div className="p-4 border-t">
        <p className="text-sm text-gray-600 text-center">Müller Logistics LLC.</p>
      </div>
    </div>
  );
};

export default ChatPage;