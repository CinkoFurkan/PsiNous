const About = () => {
  return (
    <div>
      <section>
        <div className='py-8 text-black bg-background'>
          <div className='container flex flex-col items-start mx-auto my-12 md:flex-row md:my-24'>
            <div className='sticky flex flex-col w-full px-8 mt-2 md:top-36 lg:w-1/3 md:mt-12'>
              <p className='mb-2 text-3xl leading-normal md:text-4xl md:leading-relaxed'>
                Festival Çalışma Süreci
              </p>
              <p className='mb-4 text-sm text-black md:text-base'>
                Teknoloji festivali süreci hakkında rehberiniz burada. Fest
                sürecini anlamak için tüm adımları gözden geçirin.
              </p>
              <a
                href='#'
                className='px-4 py-2 mr-auto bg-transparent border border-black rounded shadow hover:bg-primary text-primary hover:text-black hover:shadow-lg hover:border-transparent'
              >
                Keşfet
              </a>
            </div>
            <div className='ml-0 md:ml-12 lg:w-2/3'>
              <div className='container w-full h-full mx-auto'>
                <div className='relative h-full p-10 overflow-hidden wrap'>
                  <div
                    className='absolute h-full border-2'
                    style={{
                      right: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>
                  <div
                    className='absolute h-full border-2'
                    style={{
                      left: '50%',
                      border: '2px solid #FFC100',
                      borderRadius: '1%',
                    }}
                  ></div>
                  {/* Timeline Item 1 */}
                  <div className='flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 w-5/12 px-1 py-4 text-right'>
                      <p className='mb-3 text-base text-black'>
                        1-6 Mayıs 2021
                      </p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Kayıt
                      </h4>
                      <p className='text-sm leading-snug text-black md:text-base'>
                        En sevdiğiniz etkinliği seçin ve formu doldurarak kayıt
                        olun. Bu kadar kolay!
                      </p>
                    </div>
                  </div>
                  {/* Timeline Item 2 */}
                  <div className='flex items-center justify-between w-full mb-8 right-timeline'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 w-5/12 px-1 py-4 text-left'>
                      <p className='mb-3 text-base text-black'>
                        6-9 Mayıs 2021
                      </p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Katılım
                      </h4>
                      <p className='text-sm leading-snug text-black md:text-base'>
                        Etkinliklere çevrimiçi katılın. Kayıt olduğunuz
                        etkinliklerin bağlantıları size e-posta ve WhatsApp
                        grupları aracılığıyla gönderilecektir.
                      </p>
                    </div>
                  </div>
                  {/* Timeline Item 3 */}
                  <div className='flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 w-5/12 px-1 py-4 text-right'>
                      <p className='mb-3 text-base text-black'>10 Mayıs 2021</p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Sonuç Açıklaması
                      </h4>
                      <p className='text-sm leading-snug text-black md:text-base'>
                        Sonuçlar WhatsApp gruplarında duyurulacak ve e-posta
                        yoluyla gönderilecektir.
                      </p>
                    </div>
                  </div>
                  {/* Timeline Item 4 */}
                  <div className='flex items-center justify-between w-full mb-8 right-timeline'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 w-5/12 px-1 py-4 text-left'>
                      <p className='mb-3 text-base text-black'>12 Mayıs 2021</p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Ödül Dağıtımı
                      </h4>
                      <p className='text-sm leading-snug text-black md:text-base'>
                        Kazananlara ulaşılacak ve ödülleri adreslerine
                        gönderilecektir.
                      </p>
                    </div>
                  </div>
                  {/* Timeline Item 5 */}
                  <div className='flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 w-5/12 px-1 py-4 text-right'>
                      <p className='mb-3 text-base text-black'>15 Mayıs 2021</p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Geri Bildirim Süreci
                      </h4>
                      <p className='text-sm leading-snug text-black md:text-base'>
                        Katılımcılardan etkinlik hakkında geri bildirim
                        alınacaktır. Geri bildirimlerinizi bekliyoruz!
                      </p>
                    </div>
                  </div>
                  {/* Timeline Item 6 */}
                  <div className='flex items-center justify-between w-full mb-8 right-timeline'>
                    <div className='order-1 w-5/12'></div>
                    <div className='order-1 w-5/12 px-1 py-4 text-left'>
                      <p className='mb-3 text-base text-black'>20 Mayıs 2021</p>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl'>
                        Etkinlik Değerlendirmesi
                      </h4>
                      <p className='text-sm leading-snug text-black md:text-base'>
                        Etkinlik sonrası değerlendirme yapılacak ve gelecek
                        etkinlikler için planlama yapılacaktır.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Timeline Bottom Icon */}
                <img
                  className='mx-auto -mt-36 md:-mt-36'
                  src='https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png'
                  alt='Zaman Çizelgesi Sonu İkonu'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
