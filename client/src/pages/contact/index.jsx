const Contact = () => {
  return (
    <div className="min-h-screen py-3 flex flex-col justify-center sm:py-16">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        {/* New background card rotated to the other side with a lighter color */}
        <div className="absolute inset-0 bg-[#e5a3a3] shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div>
        
        {/* Existing background card with a soft red color */}
        <div className="absolute inset-0 bg-[#d14d4d] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        
        {/* Main content card */}
        <div className="text-white relative px-4 py-10 bg-primary shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl">Bizimle İletişime Geçin!</h1>
            <p className="text-white-300 mt-2">
              Formu doldurarak mesajınızı bize iletin.
            </p>
          </div>

          <form>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="İsim"
              name="name"
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="E-Posta"
              name="email"
            />

            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Konu"
              name="_subject"
            />

            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Mesajınızı buraya yazın..."
              name="message"
              style={{ height: "121px" }}
            ></textarea>

            <div className="flex justify-between">
              <input
                className="shadow bg-background text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-background text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
