"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditContactForm({ id, email }) {
  const [newEmail, setNewEmail] = useState(email);
  

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/newsletter/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newEmail }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }

      router.refresh();
      router.push("/dashboard/newsletter/contacts");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
        <h4>E-Mail Adresse ändern</h4>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-3">
        <input
        onChange={(e) => setNewEmail(e.target.value)}
        value={newEmail}
        className="border border-slate-500 px-4 py-2 rounded-md"
        type="email"
        placeholder="Neue E-Mail"
        />


        <button type="button" className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded-md">
            E-Mail ändern
        </button>
    </form>
    </div>
    
  )
}