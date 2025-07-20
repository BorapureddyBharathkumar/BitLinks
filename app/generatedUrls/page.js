"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function ShortenedLinks() {
  const { user } = useUser();
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      if (!user) return;

      try {
        const res = await fetch(`/api/urls?userId=${user.id}`);
        const data = await res.json();

        if (data.success) {
          setUrls(data.urls);
        } else {
          console.error(data.message);
        }
      } catch (err) {
        console.error("Error fetching URLs:", err);
      }
    };

    fetchUrls();
  }, [user]);

  return (
    <div className="p-4  bg-purple-100 h-[90vh] justify-center items-center text-center ">
      <h2 className="text-xl font-bold mb-4">Your Shortened URLs</h2>
      {urls.length === 0 ? (
        <p>No URLs found.</p>
      ) : (
        <ul className="space-y-5 h-[79vh] gap-2  ">
          {urls.map((link) => (
            <li key={link._id} className=" p-2 rounded ">
              <div><strong>Original:</strong> <a href={link.url} className="text-blue-600" target="_blank">{link.url}</a></div>
              <div><strong>Short:</strong> <a href={`/${link.shorturl}`} className="text-green-600" target="_blank">{link.shorturl}</a></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
