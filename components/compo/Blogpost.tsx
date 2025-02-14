import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import blogimage from "../../public/images/image 68 (1).svg";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "This Long-Awaited Technology May Finally Change the World",
    author: "Ali Tufan",
    date: "April 20, 2023",
    category: "News"
  },
  {
    id: 2,
    title: "This Long-Awaited Technology May Finally Change the World",
    author: "Ali Tufan",
    date: "April 20, 2023",
    category: "News"
  },
  {
    id: 3,
    title: "This Long-Awaited Technology May Finally Change the World",
    author: "Ali Tufan",
    date: "April 20, 2023",
    category: "News"
  }
];

export default function BlogPost() {
  return (
    <main className=" py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Latest Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link href={`/blog/${post.id}`} key={post.id}>
              <article className="space-y-4 relative">
                {/* Category Badge */}
                <Badge 
                  variant="secondary" 
                  className="rounded absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-[#f5f5f5] text-[#666] hover:bg-[#f5f5f5]"
                >
                  {post.category}
                </Badge>

                {/* Placeholder Image */}
                <div className="bg-[#f0f0f0] rounded-2xl aspect-[1.5/1]">
                  <div className="w-full h-full">
                   <Image src={blogimage} alt="Blog Image"  width={500} height={100} className="w-full h-full"/>
                  
                  </div>
                </div>
                
                {/* Content */}
                <div className="space-y-3 text-[15px]">
                  <div className="flex items-center gap-2 text-sm text-[#666]">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-[#ccc]">·</span>
                    <time className="text-[#666]">{post.date}</time>
                  </div>

                  <h2 className="text-xl font-medium leading-snug text-[#333]">
                    {post.title}
                  </h2>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}