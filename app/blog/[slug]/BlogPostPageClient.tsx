"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react"
import { SharePost } from "@/components/share-post"
import { FloatingShareButton } from "@/components/floating-share-button"
import { allBlogPosts } from "@/data/blog-data"

// This would typically come from a CMS or markdown files
const getPostBySlug = (slug: string) => {
  const post = allBlogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return {
      title: "Post Not Found",
      date: "",
      readTime: "",
      image: null,
      content: "<p>The blog post you're looking for could not be found.</p>",
      tags: [],
    }
  }

  // Generate full content based on the blog post data
  return {
    title: post.title,
    date: post.date,
    readTime: post.readTime,
    image: post.image,
    content: `
      <p>${post.excerpt}</p>
      
      <h2>Introduction</h2>
      
      <p>This article explores ${post.title.toLowerCase()}, covering key concepts, best practices, and real-world applications.</p>
      
      <h2>Key Topics Covered</h2>
      
      <ul>
        <li>Understanding the fundamentals and core concepts</li>
        <li>Best practices and common patterns</li>
        <li>Real-world implementation strategies</li>
        <li>Performance optimization techniques</li>
        <li>Common pitfalls and how to avoid them</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To begin working with these technologies, you'll need to set up your development environment properly. This includes installing the necessary tools and dependencies.</p>
      
      <h2>Implementation Details</h2>
      
      <p>The implementation involves several key steps that we'll walk through in detail. Each step is crucial for ensuring a robust and maintainable solution.</p>
      
      <h2>Best Practices</h2>
      
      <p>Following industry best practices ensures your code is maintainable, scalable, and performs well in production environments. Here are some key recommendations:</p>
      
      <ul>
        <li>Write clean, readable code with proper documentation</li>
        <li>Implement comprehensive error handling</li>
        <li>Follow consistent naming conventions</li>
        <li>Use version control effectively</li>
        <li>Write tests for critical functionality</li>
      </ul>
      
      <h2>Advanced Techniques</h2>
      
      <p>Once you've mastered the basics, you can explore more advanced techniques to optimize your implementation and add sophisticated features.</p>
      
      <h2>Performance Considerations</h2>
      
      <p>Performance is a critical aspect of any application. Consider these optimization strategies to ensure your solution performs well at scale.</p>
      
      <h2>Conclusion</h2>
      
      <p>This article has covered the essential aspects of ${post.title.toLowerCase()}. By following these guidelines and best practices, you'll be well-equipped to implement effective solutions in your projects.</p>
      
      <p>Continue exploring and experimenting with these concepts to deepen your understanding and discover new ways to apply them in your work.</p>
    `,
    tags: post.tags,
  }
}

export function BlogPostPageClient({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  return (
    <div className="container py-12 relative">
      {/* Floating share button - client component */}
      <FloatingShareButton title={post.title} url={`https://aliakbar146.com/blog/${params.slug}`} />

      <div className="max-w-3xl mx-auto">
        <Link href="/blog">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="ml-auto"
            onClick={() => {
              // This is just for UI - actual sharing is handled by SharePost component
              const shareSection = document.getElementById("share-section")
              if (shareSection) {
                shareSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            <Share2 className="mr-1 h-4 w-4" />
            Share
          </Button>
        </div>

        <div className="rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={1200}
            height={500}
            className="object-cover w-full"
            priority
          />
        </div>

        <div className="flex gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-muted rounded-full px-3 py-1 text-sm">
              {tag}
            </span>
          ))}
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div id="share-section" className="border-t mt-12 pt-8">
          {/* SharePost component with actual sharing functionality */}
          <SharePost title={post.title} slug={params.slug} />
        </div>
      </div>
    </div>
  )
}
