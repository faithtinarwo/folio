import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm Faith's AI assistant. I can help you learn more about her experience, skills, or answer any questions about her work. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: Record<string, string> = {
    experience:
      "Faith has 5+ years of experience in UX design and software development. She's worked on web applications, mobile apps, and design systems for various industries including fintech, healthcare, and e-commerce.",
    skills:
      "Faith's technical skills include React, TypeScript, Node.js, Python, Figma, Adobe Creative Suite, user research, wireframing, prototyping, and accessibility design. She's also proficient in design systems and component libraries.",
    projects:
      "Faith has worked on numerous exciting projects including a fintech mobile app that increased user engagement by 40%, an e-commerce platform redesign that boosted conversions by 25%, and a healthcare dashboard that improved workflow efficiency for medical professionals.",
    education:
      "Faith holds a Bachelor's degree in Computer Science with a focus on Human-Computer Interaction. She's also completed various certifications in UX design and modern web development frameworks.",
    contact:
      "You can reach Faith via email at faith.tinarwo@example.com or connect with her on LinkedIn. She's always open to discussing new opportunities and interesting projects!",
    availability:
      "Faith is currently open to new opportunities and freelance projects. She's particularly interested in roles that combine her UX design and development skills.",
    default:
      "That's an interesting question! Faith would love to discuss this with you personally. Feel free to reach out to her directly for more detailed conversations about her work and experience.",
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("career")
    ) {
      return predefinedResponses.experience;
    }
    if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech")
    ) {
      return predefinedResponses.skills;
    }
    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      return predefinedResponses.projects;
    }
    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("degree")
    ) {
      return predefinedResponses.education;
    }
    if (
      message.includes("contact") ||
      message.includes("reach") ||
      message.includes("email")
    ) {
      return predefinedResponses.contact;
    }
    if (
      message.includes("available") ||
      message.includes("hire") ||
      message.includes("job")
    ) {
      return predefinedResponses.availability;
    }
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return "Hello! Nice to meet you! I'm here to help you learn more about Faith's background and expertise. What specifically would you like to know about her work?";
    }

    return predefinedResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          content: generateResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-[9999]",
          "olive-gradient text-white",
          isOpen && "opacity-0 pointer-events-none",
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-80 h-96 shadow-xl z-[9999] glass-effect">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 olive-gradient text-white rounded-t-lg">
            <CardTitle className="text-sm font-medium">
              Chat with Faith's AI
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6 p-0 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start gap-2",
                    message.sender === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  {message.sender === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-olive-600 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-white" />
                    </div>
                  )}

                  <div
                    className={cn(
                      "max-w-[75%] rounded-lg px-3 py-2 text-sm",
                      message.sender === "user"
                        ? "bg-olive-600 text-white"
                        : "bg-cream-100 text-olive-800",
                    )}
                  >
                    {message.content}
                  </div>

                  {message.sender === "user" && (
                    <div className="w-6 h-6 rounded-full bg-cream-300 flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3 text-olive-800" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-olive-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div className="bg-cream-100 text-olive-800 rounded-lg px-3 py-2 text-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-olive-400 rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-olive-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-olive-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-cream-200">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Faith's experience..."
                  className="flex-1 border-cream-300 focus:border-olive-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="olive-gradient text-white"
                  disabled={!inputValue.trim()}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
