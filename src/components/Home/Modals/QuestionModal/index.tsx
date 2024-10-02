"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BiSend } from "react-icons/bi";

export default function QuestionModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
    setMessage("");
    onClose();
    toast("Question sent successfully");
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 right-0 bottom-0 z-[9999] backdrop-blur-sm h-full w-full flex items-center justify-center bg-black/20"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="md:h-1/2 md:w-1/3 w-[90%] h-1/2 p-4 bg-white rounded-md drop-shadow-lg"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center h-full w-full "
        >
          <h1 className="text-3xl text-primary-dark font-bold">
            Ask Question ?
          </h1>
          <p className="text-sm">
            You can ask any question according to your project
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="border p-2 outline-none rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <textarea
            placeholder="Your question"
            cols={5}
            className=" resize-none border outline-none rounded-md p-2"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <button className="flex items-center gap-2 group/talk bg-primary-dark py-2 px-4 w-fit text-white rounded-full">
            Send Question <BiSend />
          </button>
        </form>
      </div>
    </div>
  );
}
