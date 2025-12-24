import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Bot, Loader2 } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

const AIConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'model', text: "Hello! I'm your AI Remodeling Assistant. Thinking about a renovation? Ask me anything about our services or your project ideas!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const aiResponse = await getAIResponse(userMsg, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponse || "I didn't quite catch that. Could you rephrase?" }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="accent-orange text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center gap-2"
        >
          <MessageSquare size={24} />
          <span className="font-semibold pr-2">Ask a Specialist</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col border border-warm overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          {/* Header */}
          <div className="accent-orange p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm">Remodeling Assistant</h3>
                <p className="text-xs opacity-80">Online & Ready to Help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-warm-gray">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`p-2 rounded-full h-8 w-8 flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-orange-100 text-orange-800' : 'bg-white text-warm-gray shadow-sm'}`}>
                    {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'accent-orange text-white rounded-tr-none' : 'bg-white text-warm-gray shadow-sm rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 items-center bg-white p-3 rounded-2xl shadow-sm rounded-tl-none text-warm-gray text-sm">
                  <Loader2 className="animate-spin" size={16} />
                  <span>Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-warm flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your kitchen remodel..."
              className="flex-1 text-sm bg-warm-gray border-none rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="accent-orange text-white p-2 rounded-lg hover:accent-orange-hover transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;

