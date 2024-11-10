import Button from '../../components/button';
import Image from './components/Image';
import Info from './components/Info';
import useFetch from '../../hooks/get';
import {motion} from "framer-motion";


const Events = () => {
    const {data} = useFetch('event');

    const sortedEvents = data.event?.sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );


    return data && data.event ? (
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    className='p-20'>
            <h1 className='mb-8 text-4xl font-bold text-center'>Etkinlikler</h1>
            <div className='grid w-full grid-cols-4 gap-10 px-4'>
                {sortedEvents.map((event, index) => {
                    return (
                        <div key={index}
                            className='flex flex-col items-center bg-[#e8e4d8] border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-all duration-300'
                        >
                            {event.image && <Image event={event}/>}
                            <div className='flex flex-col items-center w-full p-6 space-y-3'>
                                <Info event={event}/>

                                <Button
                                    as='a'
                                    href={event.registration_form_link || '#'}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    variant='primary'
                                    size='normal'
                                >
                                    {event.registration_form_link ? 'Register' : 'Kayıt Ol'}
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    ) : null;
};

export default Events;
