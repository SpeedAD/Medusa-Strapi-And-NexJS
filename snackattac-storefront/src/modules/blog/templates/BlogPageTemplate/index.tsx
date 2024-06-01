"use client"
import { motion, useScroll } from "framer-motion"

const BlogPageTemplate = ({ blog }) => {
  const { scrollYProgress } = useScroll()

  return (
    <main className="mt-[5.5rem] mx-auto">
      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0 text-center">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {blog.attributes.title}
          </h2>
          <a
            href="#"
            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            {blog.attributes.blog_categories.data[0].attributes.category}
          </a>
        </div>
        <motion.img
          id={"floater"}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
          src={blog.attributes.featuredImage.data.attributes.url}
          alt="floater"
          className="w-full object-contain"
          style={{ height: "28rem", borderRadius: "20px" }}
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="px-8 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <div
            className="pb-6 px-4"
            dangerouslySetInnerHTML={{
              __html: blog.attributes.content[0].text,
            }}
          ></div>
        </div>

        <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
          <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
              <img
                src={
                  blog.attributes.authors.data[0].attributes.author_image.data
                    .attributes.url
                }
                className="h-10 w-10 rounded-full mr-2 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-700 text-sm">
                  {" "}
                  {blog.attributes.authors.data[0].attributes.author_name}{" "}
                </p>
                <p className="font-semibold text-gray-600 text-xs"> {blog.attributes.authors.data[0].attributes.author_designation} </p>
              </div>
            </div>
            <p className="text-gray-700 py-3">
            Meet Agam: A jamstack guru, setting trends and coding dreams! 🚀 #LeadByExample
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
              <a href={blog.attributes.authors.data[0].attributes.linkedin.link} target="_blank">My Linkedin</a>
              <i className="bx bx-user-plus ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogPageTemplate
