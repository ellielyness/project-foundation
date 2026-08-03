import { Message } from "lib/Types"
import Markdown from "react-markdown"
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MessageComponent({ role, content}: Message) {

    return (
        <div className={`message w-90 p-1 mb-1 border-radius-1 ${role === "assistant" ? "bg-primary-albedo text-primary-absorption align-self-end" : "bg-primary text-white"}`}>
            <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
        </div>
    )
}