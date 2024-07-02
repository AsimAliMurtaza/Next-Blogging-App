"use client";
import BlogCardlist from "@/Components/BlogCardList";
import "../app/globals.css";
import BlogStackList from "@/Components/BlogStackList";
import Newsletter from "@/Components/Newsletter";
import BlogPopular from "@/Components/BlogPopular";

export default function Home() {
  return (
    <div>
      <BlogCardlist />
      <BlogStackList />
      <BlogPopular />
      <Newsletter />
    </div>
  );
}
