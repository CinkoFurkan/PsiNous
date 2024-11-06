const About = () => {
  return (
    <div>
      <section>
        <div className='py-8 text-white'>
          <div className='container items-start mx-auto my-12 md:flex-row'>
            <div className='flex justify-center w-full'>
              <p className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                PsiNous Öğrenci Kulübü
              </p>
            </div>
            <div>
              <p className='mb-3 text-sm text-center text-white'>
                PsiNous, 2023 yılında Psikoloji Bölümü öğrencileri Zeynep Keçe ve Zeynep Öztuğcu tarafından kurulan; ruh sağlığı alanında eğitim gören öğrencilerin mesleki gelişimlerine katkı sunmayı amaçlayan, kâr amacı gütmeyen bir öğrenci topluluğudur.
                <br />
                PsiNous olarak amacımız, ruh sağlığı alanındaki öğrencilerin bilgi ve farkındalık düzeylerini artırarak akademik ve mesleki donanımlarını geliştirmektir. Bu doğrultuda düzenlediğimiz çeşitli eğitim, seminer ve etkinliklerle öğrencilerin mesleki gelişimlerini desteklerken; onları sahada aktif, bilinçli ve etkili profesyoneller olmaları için teşvik ediyoruz.
                <br />
                PsiNous olarak, özgün, yenilikçi ve nitelikli etkinliklerle öğrencilerin bu alanda yetkin bireyler olmalarına, aynı zamanda mesleki etik ve bilinç kazanmalarına da önem veriyoruz. Ayrıca topluluğumuzun tüm üyelerinin bir arada üretim yapabileceği ve deneyimlerini paylaşabileceği bir ortam oluşturmayı amaçlıyoruz.
              </p>
              <img
                src='https://via.placeholder.com/150' // Placeholder image
                alt='Our Vision'
                className='w-[6/12] h-[200px] mx-auto'
              />
            </div>
            <div className='ml-0'>
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

                  {/* Who We Are Section */}
                  <div className='flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline'>
                    <div className='order-1 w-5/12'>
                      <img
                        src='https://via.placeholder.com/150' // Placeholder image
                        alt='Who We Are'
                        className='w-full h-auto'
                      />
                    </div>
                    <div className='order-1 w-5/12 px-1 py-4 text-right'>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                        Who We Are
                      </h4>
                      <p className='text-sm leading-snug text-white md:text-base'>
                        PsiNous Öğrenci Kulübü, psikoloji alanında değerli deneyimler ve fırsatlar sunmayı hedefleyen bir öğrenci organizasyonudur.
                      </p>
                    </div>
                  </div>

                  {/* Our Mission Section */}
                  <div className='flex items-center justify-between w-full mb-8 right-timeline'>
                    <div className='order-1 w-5/12'>
                      <img
                        src='https://via.placeholder.com/150' // Placeholder image
                        alt='Our Mission'
                        className='w-full h-auto'
                      />
                    </div>
                    <div className='order-1 w-5/12 px-1 py-4 text-left'>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                        Our Mission
                      </h4>
                      <p className='text-sm leading-snug text-white md:text-base'>
                        Misyonumuz, psikoloji alanında teorik bilgileri pratik deneyimlerle birleştirerek öğrencilere anlamlı katkılarda bulunmaktır.
                      </p>
                    </div>
                  </div>

                  {/* Our Vision Section */}
                  <div className='flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline'>
                    <div className='order-1 w-5/12'>
                      <img
                        src='https://via.placeholder.com/150' // Placeholder image
                        alt='Our Vision'
                        className='w-full h-auto'
                      />
                    </div>
                    <div className='order-1 w-5/12 px-1 py-4 text-right'>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                        Our Vision
                      </h4>
                      <p className='text-sm leading-snug text-white md:text-base'>
                        Gelecekte PsiNous'ta her öğrencinin potansiyelini en üst düzeye çıkararak kariyerinde başarılı olmasını sağlamayı hayal ediyoruz.
                      </p>
                    </div>
                  </div>

                  {/* Supervisor's Speech Section */}
                  <div className='flex items-center justify-between w-full mb-8 right-timeline'>
                    <div className='order-1 w-5/12'>
                      <img
                        src='https://via.placeholder.com/150' // Placeholder image
                        alt='Message from Our Supervisor'
                        className='w-full h-auto'
                      />
                    </div>
                    <div className='order-1 w-5/12 px-1 py-4 text-left'>
                      <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                        Bizim Bir Şeyimiz
                      </h4>
                      <p className='text-sm leading-snug text-white md:text-base italic'>
                        "PsiNous'un öğrencileri, bu kulübün gerçek itici gücüdür. Onların tutku ve bağlılıklarını görmekten büyük bir gurur duyuyorum."
                      </p>
                      <p className='text-right font-semibold mt-4'>- [Supervisor’s Name]</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center w-full mt-12'>
              <div className='text-center'>
                <h4 className='mb-3 text-lg font-bold md:text-2xl text-primary'>
                  Danışman Hoca Kurulumuz
                </h4>
                <p className='text-sm leading-snug text-white md:text-base italic'>
                  "PsiNous'un öğrencileri, bu kulübün gerçek itici gücüdür. Onların tutku ve bağlılıklarını görmekten büyük bir gurur duyuyorum."
                </p>
                <p className='text-right font-semibold mt-4'>- [İbo'nun en sevdiği hoca]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
