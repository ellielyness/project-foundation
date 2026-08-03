import { useState, useEffect, useRef } from "react";
import { Message } from "lib/Types";
import MessageComponent from "../components/layout/MessageComponent";
const conversationId = crypto.randomUUID();

export default function Page() {

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        bottomRef.current?.scrollIntoView({behavior:"smooth"})
    }, [messages])

    const handleSubmit = async (e: React.SubmitEvent) => {
        
        e.preventDefault();

        const userMessage: Message = { role: "human", content: input};
        const updatedMessages = [...messages, userMessage];

        setMessages(updatedMessages);
        setInput("");

        const res = await fetch("http://localhost:9503/prompt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({conversationId: conversationId, messages: [userMessage]})
        })

        const response = await res.json();

        const agentMessage: Message = {role:"assistant",content:response.response};
        setMessages(prev => [...prev, agentMessage]);

    }

    return (
        <main>
            <div id="container" className="d-flex flex-column justify-space-between bg-primary-absorption min-vh-100">
                <div id="conversation" className="p-2 d-flex flex-column min-h-100">
                    {messages.map((message, index) => (
                        <MessageComponent key={index} role={message.role} content={message.content} />
                    ))}
                    <div ref={bottomRef} />
                </div>
                <div id="input" className="bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex p-2 gap-1">
                            <input className="w-100 bg-primary-shade text-primary-albedo border-none font-size-1 font-leading-normal p-1" name="prompt" placeholder="Type here" value={input} onChange={e => setInput(e.target.value)}></input>
                            <button className="bg-primary-absorption text-white border-none font-size-1 font-leading-normal p-1 cursor-pointer" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}