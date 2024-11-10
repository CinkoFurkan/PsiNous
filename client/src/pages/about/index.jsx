import useFetch from '../../hooks/get';
import TopAbout from "./components/top-about";
import ReverseRowAbout from "./components/reverse-row-about";
import BottomAbout from "./components/bottom-about";
import {motion} from "framer-motion";

const About = () => {
    const {data: aboutData} = useFetch('/about');
    const aboutSections = aboutData?.about || [];
    const otherAboutSections = aboutData?.about?.slice(2, 4) || [];

    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
            <section>
                <div className='py-8 text-black'>
                    <div className='container mx-auto my-12 flex flex-col text-center'>
                        <TopAbout aboutSections={aboutSections}/>

                        <ReverseRowAbout otherAboutSections={otherAboutSections}/>

                        <BottomAbout aboutSections={aboutSections}/>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
