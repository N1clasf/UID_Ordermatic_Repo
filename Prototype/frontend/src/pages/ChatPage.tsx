import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ChatBubble from "../components/ChatBubble";
import { mockConversation, mockOrders } from "../data/mockData";
import { ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import OrderOverviewContent from "../components/OrderOverviewContent";

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [conversationStarted, setConversationStarted] = useState(false);

  const handleCircleClick = () => {
    if (conversationStarted) {
      // Reset conversation
      setMessages([]);
      setConversationStarted(false);
      setIsCollapsed(false);
    } else {
      setConversationStarted(true);
      // Animate messages appearing one by one
      mockConversation.forEach((message, index) => {
        setTimeout(() => {
          setMessages(prev => [...prev, message]);
        }, index * 1000); // Add each message with a 1-second delay
      });
    }
  };

  const handleMenuClick = () => {
    navigate("/history");
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
          <button 
            onClick={handleCircleClick}
            className="w-32 h-32 bg-gray-900 rounded-full transition-transform hover:scale-105"
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
            isCollapsed ? 'rotate-180' : ''
          }`} />
        </CollapsibleTrigger>
        
        <CollapsibleContent className="animate-accordion-down">
          <OrderOverviewContent order={mockOrders[0]} />
        </CollapsibleContent>
      </Collapsible>

      <div className="p-4 border-t">
        <p className="text-sm text-gray-600 text-center">Müller Engineering LLC.</p>
      </div>
    </div>
  );
};

export default ChatPage;