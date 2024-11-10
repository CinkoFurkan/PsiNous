import {useParams} from "react-router-dom";
import useFetch from "../../hooks/get";
import Image from "./components/image";
import UserInfo from "./components/user-info";
import Biograhpy from "./components/biograhpy";
import Contact from "./components/contact";
import {useLoading} from "../../store/hooks/hooks";

const MemberDetail = () => {
    const {id} = useParams();
    const {data} = useFetch(`member/${id}`);
    const loading = useLoading()


    if (loading > 0 || !data?.member) {
        return <div>Loading...</div>;
    }

    const {
        first_name,
        last_name,
        team,
        title_member,
        university,
        bio,
        linked_in,
        email,
        image,
    } = data?.member;

    return (
        <div className="min-h-screen p-8 ">
            <div className="p-8 bg-[#f1f1e9] shadow-lg rounded-lg mt-24">
                <Image image={image}/>
                <UserInfo first_name={first_name} last_name={last_name} team={team} title_member={title_member}
                          university={university}/>
                <Biograhpy bio={bio}/>
                <Contact email={email} linked_in={linked_in}/>
            </div>
        </div>
    );
};

export default MemberDetail;
