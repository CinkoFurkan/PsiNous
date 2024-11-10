import useFetch from "../../hooks/get";
import Image from "./components/image";
import Info from "./components/info";
import Extra from "./components/extra";
import { motion } from "framer-motion";
import {setBlogs} from "../../store/blog/actions/actions";
import {useBlogs} from "../../store/hooks/hooks";
import {useEffect} from "react";
import blog from "../home/components/blog";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    translateY: 20,
  },
  visible: {
    opacity: 1,
    translateY: 0,
  },
};

const Blog = () => {
  const { data } = useFetch(`blog`);
  const blogs = useBlogs()

  useEffect(() => {
    if(data){
      setBlogs(data.blogs)
    }
  }, [data]);

  return data && data.blogs ? (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center w-full mt-20 h-[calc(100vh-264px)]"
    >
      <h1 className="mb-8 text-4xl font-bold text-gray-900">Bloglar</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="grid grid-cols-4 gap-8"
      >
        {data.blogs.map((blog, index) => (
          <motion.div variants={item} key={index} className="flip-card">
            <div className="flip-card-inner">
              <div className="flex flex-col items-center justify-between p-4 bg-[#e8e4d8] border rounded-lg shadow-md flip-card-front">
                <Image blog={blog} />
                <Info blog={blog} />
              </div>
              <Extra blog={blog} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  ) : null;
};

export default Blog;
