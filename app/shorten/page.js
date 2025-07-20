"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import Link from "next/link";

const Shorten = () => {
  const { user, isLoaded } = useUser();

  const [url, setUrl] = useState("");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");
  const [loading, setLoading] = useState(false);

  if (!isLoaded) return <p className="text-center mt-10">Loading user...</p>;

  const generate = async () => {
    const userId = user?.id;
    if (!url || !shorturl || !userId) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shorturl, userId }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("API failed:", errorText);
        alert("❌ Error: " + errorText);
        setLoading(false);
        return;
      }

      const result = await res.json();

      if (result.success) {
        const base = process.env.NEXT_PUBLIC_HOST || "";
        setGenerated(`${base}/${shorturl}`);
        setUrl("");
        setShorturl("");
        alert("✅ " + result.message);
      } else {
        alert("⚠️ " + result.message);
      }

    } catch (error) {
      console.error("Unexpected error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4">
      <h1 className="font-bold text-2xl">Generate your short URLs</h1>

      <input
        type="text"
        value={url}
        className="px-4 py-2 focus:outline-purple-600 rounded-md"
        placeholder="Enter your long URL"
        onChange={(e) => setUrl(e.target.value)}
      />

      <input
        type="text"
        value={shorturl}
        className="px-4 py-2 focus:outline-purple-600 rounded-md"
        placeholder="Enter preferred short text (e.g., my-link)"
        onChange={(e) => setShorturl(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={loading}
        className="bg-purple-500 shadow-lg p-3 rounded-lg font-bold py-1 my-3 text-white hover:bg-purple-600"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {generated && (
        <div className="mt-4 text-sm">
          <span>Your Short Link: </span>
          <code>
            <Link href={generated} target="_blank" className="text-blue-600 underline">
              {generated}
            </Link>
          </code>
        </div>
      )}
    </div>
  );
};

export default Shorten;
