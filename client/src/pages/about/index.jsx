import useFetch from '../../hooks/get';
import TopAbout from "./components/top-about";
import ReverseRowAbout from "./components/reverse-row-about";
import BottomAbout from "./components/bottom-about";

const About = () => {
    const {data: aboutData} = useFetch('/about');
    const aboutSections = aboutData?.about || [];
    const otherAboutSections = aboutData?.about?.slice(2, 4) || [];

    return (
        <div>
            <section>
                <div className='py-8 text-black'>
                    <div className='container mx-auto my-12 flex flex-col md:flex-row'>

                        <TopAbout aboutSections={aboutSections}/>

                        <ReverseRowAbout otherAboutSections={otherAboutSections}/>

                        <BottomAbout aboutSections={aboutSections}/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
