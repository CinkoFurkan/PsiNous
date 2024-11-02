const Image = ({ data }) => {
  return (
    <div className="flex justify-center w-1/2">
      <img
        src={data.about[0].image}
        alt="About Us"
        className="object-cover w-full shadow-lg h-96"
      />
    </div>
  );
};

export default Image;
