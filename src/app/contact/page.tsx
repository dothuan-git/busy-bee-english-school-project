import { Metadata } from 'next';
import Image from 'next/image';
import Container from '@/components/ui/Container';
import ContactForm from '@/components/sections/ContactForm';
import logoWhite from '@/assets/common/logo_white.png';

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
      <section className="pt-12 pb-16">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
            {/* Image placeholder */}
            <div className="w-full flex-shrink-0 lg:w-[620px]">
              <div className="flex h-[300px] items-center justify-center rounded-[25px] bg-gradient-to-br from-amber-100 to-orange/20 sm:h-[360px] lg:h-[413px]">
                <div className="text-center text-gray-400">
                  <svg
                    className="mx-auto mb-2 h-16 w-16 text-orange/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-gray-400">Hình ảnh trung tâm</p>
                </div>
              </div>
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
      <section className="pb-16">
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
                      <span className="font-semibold">Địa chỉ:</span> ABC
                      Street, Thành phố Hồ Chí Minh
                    </p>
                    <p>
                      <span className="font-semibold">Hotline:</span> 091 xxx
                      xxx
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span>{' '}
                      busybee@gmail.com
                    </p>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="flex h-[193px] items-center justify-center overflow-hidden rounded-[15px] bg-white/30">
                  <div className="text-center text-gray-400">
                    <svg
                      className="mx-auto mb-2 h-12 w-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                      />
                    </svg>
                    <p className="text-sm">Bản đồ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
