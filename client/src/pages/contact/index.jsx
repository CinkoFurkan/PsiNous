import {useState} from "react";
import usePost from "../../hooks/post";
import FormHeader from "./components/form-header";
import Form from "./components/form";

const Contact = () => {
    const {postData} = usePost("contact/");
    const [contact, setContact] = useState({
        username: "",
        email: "",
        subject: "",
        message: "",
    });


    return (
        <div className="min-h-screen py-3 flex flex-col justify-center sm:py-16">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div
                    className="absolute inset-0 bg-[#e5a3a3] shadow-lg transform skew-y-6 sm:skew-y-0 sm:rotate-6 sm:rounded-3xl"></div>
                <div
                    className="absolute inset-0 bg-[#d14d4d] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

                <div className="text-white relative px-4 py-10 bg-primary shadow-lg sm:rounded-3xl sm:p-20">

                    <FormHeader/>

                    <Form postData={postData} contact={contact} setContact={setContact} />
                </div>
            </div>
        </div>
    );
};

export default Contact;
