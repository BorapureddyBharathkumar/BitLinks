import Image from "next/image";
import React from "react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-purple-100 text-gray-800 px-6 py-16 md:px-24">
      <section className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">
            About BitLinks
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            BitLinks is more than just a URL shortener &mdash; it&apos;s a fast, modern, and privacy-focused link management tool built for creators, developers, and businesses who want full control over their links.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/teamwork.svg"
            alt="Team working"
            width={500}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
          At BitLinks, we aim to simplify the web by providing clean, reliable, and trackable URLs. Whether you&apos;re a solo creator or an enterprise, we&apos;re building tools that make your link sharing smarter and more effective.
        </p>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">How It Started</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/ideas.svg"
              alt="Idea"
              width={400}
              height={200}
              className="h-auto"
            />
          </div>
          <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed">
            <p className="mb-4">
              BitLinks started as a side project by a group of developers frustrated with bloated and ad-filled URL shorteners. We wanted something minimal, fast, and privacy-respecting.
            </p>
            <p>
              Today, we&apos;re focused on building a lightweight platform with analytics, custom branding, and developer tools &mdash; while staying true to our core principle: keep it simple.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12 text-center">What We Believe In</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🌱 Simplicity</h3>
            <p className="text-gray-600">
              We value minimalism and ease of use above all. No clutter.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🔐 Privacy</h3>
            <p className="text-gray-600">
              No tracking. No ads. Your data belongs to you, not us.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">🚀 Performance</h3>
            <p className="text-gray-600">
              Our infrastructure is fast, global, and reliable for all users.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
