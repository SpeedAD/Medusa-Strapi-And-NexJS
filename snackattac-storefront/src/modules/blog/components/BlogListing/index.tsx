import Image from "next/image"
import hero from "../../../../../public/hero.webp"
import BlogCard from "../BlogCard"

const BlogListing = ({blogs}) => {
  return (
    <div className="fade-in flex-1 content-container">
        <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8 flex-1">
            {blogs.map((item) => (
                <BlogCard key={item.id} blog={item}/>
            ))}
        </ul>
    </div>
  )
}

export default BlogListing
