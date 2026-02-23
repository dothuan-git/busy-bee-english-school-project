import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/sections/ContactForm';
import logoWhite from '@/assets/common/logo_white.png';
import contactImg from '@/assets/contact/contact_img.jpg';

export const metadata: Metadata = {
  title: 'Liên hệ - Busy Bee English School',
  description:
    'Liên hệ Trung tâm ngoại ngữ Con Ong Chăm Chỉ (Busy Bee English) để được tư vấn về các khóa học tiếng Anh thiếu nhi và luyện thi IELTS.',
};

export default function ContactPage() {
  return (
    <div className="relative bg-whitesmoke overflow-hidden">
      {/* Decorative blur */}
      <div className="pointer-events-none absolute left-[530px] top-[182px] h-[190px] w-[322px] rounded-full bg-sandybrown opacity-40 blur-[300px]" />

      {/* Introduction Section */}
      <section id="introduction" className="pt-12 pb-16">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
            {/* Image placeholder */}
            <div className="w-full flex-shrink-0 lg:w-[620px]">
              <Image
                src={contactImg}
                alt="Busy Bee English - Trung tâm ngoại ngữ"
                className="h-[300px] w-full rounded-[25px] object-cover sm:h-[360px] lg:h-[413px]"
              />
            </div>

            {/* About text */}
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold leading-[130%] text-gray-100 sm:text-4xl lg:text-[48px]">
                Giới thiệu
              </h1>
              <div className="mt-4 text-base leading-[150%] text-gray-100">
                <span>Trung tâm ngoại ngữ </span>
                <span className="font-semibold">
                  Con Ong Chăm Chỉ (Busy Bee English)
                </span>
                <span>
                  {' '}
                  được Sở Giáo Dục và Đào Tạo thành phố Hồ Chí Minh cấp phép
                  thành lập vào ngày 28/7/2025. Busy Bee English là cơ sở đào
                  tạo ngoại ngữ hoạt động theo quy định của pháp luật, chuyên tổ
                  chức các khóa tiếng Anh thiếu nhi và luyện thi IELTS. Trung
                  tâm hướng đến việc giúp học viên xây dựng nền tảng tiếng Anh
                  vững chắc ngay từ sớm, phù hợp với từng độ tuổi và khả năng
                  tiếp thu.
                </span>
                <br />
                <br />
                <span>
                  Với quy mô lớp học phù hợp, Busy Bee English chú trọng việc
                  theo sát từng học viên trong quá trình học tập, tạo môi trường
                  học tập thân thiện, an toàn và phối hợp cùng phụ huynh để hỗ
                  trợ kết quả học tập một cách hiệu quả.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="pb-16">
        <Container>
          <div className="overflow-hidden rounded-[20px] bg-gold px-6 py-10 sm:px-10 md:px-[70px] md:py-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[100px]">
              {/* Form */}
              <div className="w-full flex-shrink-0 lg:max-w-[473px]">
                <ContactForm />
              </div>

              {/* Contact Info + Map */}
              <div className="flex flex-1 flex-col gap-5">
                {/* Logo + Contact details */}
                <div>
                  <Image
                    src={logoWhite}
                    alt="Busy Bee English"
                    width={430}
                    height={193}
                    className="w-[220px] object-contain sm:w-[280px] lg:w-[340px]"
                  />
                  <div className="mt-3 flex flex-col gap-1.5 text-base leading-[150%] text-gray-100">
                    <p>
                      <span className="font-semibold">Địa chỉ:</span> 42/4A
                      đường TTN1, khu phố 34, p. Đông Hưng Thuận, TP Hồ
                      Chí Minh
                    </p>
                    <p>
                      <span className="font-semibold">Số điện thoại:</span>{' '}
                      0936036440
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{' '}
                      uyenthido1312@gmail.com
                    </p>
                  </div>
                </div>

                {/* Map */}
                <div className="h-[193px] overflow-hidden rounded-[15px]">
                  <iframe
                    src="https://maps.google.com/maps?q=10.835222,106.615861&z=18&output=embed&hl=vi"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Busy Bee English - Bản đồ"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
