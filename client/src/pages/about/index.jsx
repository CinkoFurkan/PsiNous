const About = () => {
  return (
    <div>
      <section>
        <div className="py-8 text-black ">
          <div className="container items-start mx-auto my-12 md:flex-row">
            <div className="flex justify-center w-full">
              <p className="mb-3 text-lg font-bold md:text-2xl text-primary">
                PsiNous Öğrenci Kulübü
              </p>
            </div>
            <div>
              <p className="mb-3 text-sm text-center text-black leading-relaxed">
                PsiNous, 2023 yılında Psikoloji Bölümü öğrencileri Zeynep Keçe
                ve Zeynep Öztuğcu tarafından kurulan; ruh sağlığı alanında
                eğitim gören öğrencilerin mesleki gelişimlerine katkı sunmayı
                amaçlayan, kâr amacı gütmeyen bir öğrenci topluluğudur.
                PsiNous olarak amacımız, ruh sağlığı alanındaki öğrencilerin
                bilgi ve farkındalık düzeylerini artırarak akademik ve mesleki
                donanımlarını geliştirmektir. Bu doğrultuda düzenlediğimiz
                çeşitli eğitim, seminer ve etkinliklerle öğrencilerin mesleki
                gelişimlerini desteklerken; onları sahada aktif, bilinçli ve
                etkili profesyoneller olmaları için teşvik ediyoruz.
                PsiNous olarak, özgün, yenilikçi ve nitelikli etkinliklerle
                öğrencilerin bu alanda yetkin bireyler olmalarına, aynı zamanda
                mesleki etik ve bilinç kazanmalarına da önem veriyoruz. Ayrıca
                topluluğumuzun tüm üyelerinin bir arada üretim yapabileceği ve
                deneyimlerini paylaşabileceği bir ortam oluşturmayı amaçlıyoruz.
              </p>
              <img
                src="https://via.placeholder.com/150"
                alt="Our Vision"
                className="w-[50%] h-[400px] rounded-lg shadow-lg mx-auto"
              />
            </div>
            <div className="flex justify-center w-full mt-12">
              <div className="text-center">
                <h4 className="mb-3 text-lg font-bold md:text-2xl text-primary">
                  Danışman Hoca Kurulumuz
                </h4>
                <p className="text-sm leading-snug text-black md:text-base italic">
                  "PsiNous'un öğrencileri, bu kulübün gerçek itici gücüdür.
                  Onların tutku ve bağlılıklarını görmekten büyük bir gurur
                  duyuyorum."
                </p>
                <p className="text-right font-semibold mt-4">
                  - [İbo'nun en sevdiği hoca]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
