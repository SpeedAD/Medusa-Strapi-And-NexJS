import Image from "next/image"

const BlogCard = ({ key, blog }) => {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay="100"
      className="hover:scale-105 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href={`/blogs/${blog.slug}`}>
        <img
          className="rounded-t-lg"
          src={`${blog.featuredImage.url}`}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href={`/blogs/${blog.slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${blog.title}`}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{`${blog.description}`}</p>
        <a
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default BlogCard
