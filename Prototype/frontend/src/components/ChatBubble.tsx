interface ChatBubbleProps {
  content: string;
  isUser?: boolean;
}

const ChatBubble = ({ content, isUser }: ChatBubbleProps) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fade-in`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatBubble;