import Categories from "@/components/Categories";
import Blogs from "@/components/Blogs";
import Image from "next/image";
import { headers } from "next/headers";

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };
   
  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories", options);
    const response = await res.json();
    console.log(response); // Log response to check its structure
    return response;
  } catch (err) {
    console.error(err);
  }
}

async function fetchBlogs() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  };
   
  try {
    const res = await fetch("http://127.0.0.1:1337/api/blogs?populate=*", options);
    const response = await res.json();
    console.log(response); // Log response to check its structure
    return response;
  } catch (err) {
    console.error(err);
  }
}
export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();
  return (
    <div>
      <Categories categories={categories} />
      <Blogs  blogs={blogs}/>
    </div>
  );
}
