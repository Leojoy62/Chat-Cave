import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import useGetConversations from "../hooks/useGetConversations";
import toast from "react-hot-toast";
const SearchBox = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.username.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-4 items-center">
      <input
        type="text"
        placeholder="Search..."
        className="focus:outline-none border-2 border-gray-500 rounded-full w-[70%] p-1"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <IoSearch className="text-3xl text-gray-500" />
      </button>
    </form>
  );
};

export default SearchBox;
