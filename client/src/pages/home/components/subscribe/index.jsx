import { useState } from "react";
import Button from "../../../../components/button";
import usePost from "../../../../hooks/post";
import toast from "react-hot-toast";

const Subscription = () => {
  const { postData } = usePost("/email/");
  const [email, setEmail] = useState("");

  const postEmail = async (e) => {
    e.preventDefault();
    try {
      await postData({
        user_mail: email,
      });
      setEmail("");
      toast.success("Paramı geri istiyorum", {
        duration: 3000,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-32">
      <h1 className="mb-6 text-4xl font-bold text-center text-black">
        Bizden Haberdar Olun
      </h1>
      <form
        onSubmit={postEmail}
        className="flex items-center justify-center mt-8 space-x-6"
      >
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-[400px] px-4 py-2 border border-primary outline-none focus:border-[1.5px]"
            placeholder="E-mail adresiniz"
          />
        </div>
        <Button type="submit" as="button" variant="primary" size="normal">
          Abone Ol
        </Button>
      </form>
    </div>
  );
};

export default Subscription;
