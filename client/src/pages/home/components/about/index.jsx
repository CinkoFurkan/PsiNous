import useFetch from "../../../../hooks/get";
import Description from "./components/desc";
import Image from "./components/image";

const About = () => {
  const { data } = useFetch("/about/");

  return data && data.about ? (
    <div className="flex items-center justify-center w-full p-8 mt-20">
      {data.about[0] && (
        <div
          key={0}
          className="w-5/6 flex justify-center items-center bg-[#e8e4d8] p-12"
        >
          <Image data={data} />
          <Description data={data} />
        </div>
      )}
    </div>
  ) : null;
};

export default About;
