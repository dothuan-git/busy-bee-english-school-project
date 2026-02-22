export interface CourseDetail {
  slug: string;
  cardTitle: string;
  cardDescription: string;
  price: string;
  detailTitle: string;
  schedule: {
    label: string;
    value: string;
  }[];
  curriculum: string[];
  content: string[];
  environment: string[];
}

export const courseData: CourseDetail[] = [
  {
    slug: '4-6',
    cardTitle: 'Tiếng anh thiếu nhi\n(4-6 tuổi)',
    cardDescription:
      'Giáo trình PIPPA AND POP 1,2,3.',
    price: '900.000VNĐ/tháng',
    detailTitle: 'Tiếng anh thiếu nhi (4-6 tuổi):',
    schedule: [
      { label: 'Lộ trình học:', value: '3 cấp độ' },
      { label: 'Mỗi cấp độ:', value: '32 buổi' },
      { label: 'Thời lượng:', value: '3 buổi/tuần' },
      { label: 'Thời gian:', value: '90 phút/buổi' },
    ],
    curriculum: [
      'Giáo trình PIPPA AND POP 1,2,3 - Nhà Xuất Bản Caroline Nixon & Michael Tomlinson.',
      'Phương pháp học thông qua hoạt động nghe - nói, trò chơi và vận động phù hợp lứa tuổi trong môi trường học tập thân thiện, an toàn giúp trẻ làm quen với tiếng Anh một cách tự nhiên.',
    ],
    content: [
      'Trau dồi và cải thiện vốn từ vựng Tiếng Anh.',
      'Nâng cao toàn diện 4 kỹ năng (Nghe, Nói, Đọc, Viết) Tiếng Anh khi có lượng từ vựng tốt.',
      'Tăng cường công suất sử dụng cả hai bán cầu não trong việc ghi nhớ để đảm bảo học viên có thể nhớ từ vựng tốt hơn.',
      'Kích thích trí tưởng tượng và óc sáng tạo của cá nhân mỗi học viên.',
    ],
    environment: [
      'Lớp học ít (5-10 học viên/lớp).',
      'Giáo viên chính + trợ giảng hỗ trợ cá nhân hoá từng học viên.',
    ],
  },
  {
    slug: '6-10',
    cardTitle: 'Tiếng anh thiếu nhi (6-10 tuổi)',
    cardDescription:
      'Giáo trình FAMILY AND FRIENDS 2nd EDITION.',
    price: '900.000VNĐ/tháng',
    detailTitle: 'Tiếng anh thiếu nhi (6-10 tuổi):',
    schedule: [
      { label: 'Lộ trình học:', value: '5 cấp độ' },
      { label: 'Mỗi cấp độ:', value: '45-76 buổi' },
      { label: 'Thời lượng:', value: '3 buổi/tuần' },
      { label: 'Thời gian:', value: '90 phút/buổi' },
    ],
    curriculum: [
      'Giáo trình FAMILY AND FRIENDS 2nd EDITION (STARTERS – 4) - Nhà Xuất Bản Đại học Oxford.',
      'Phương pháp học chú trọng học qua thực hành, tương tác và hướng dẫn từng bước, giúp trẻ học hiểu – nhớ lâu và tự tin sử dụng tiếng Anh trong môi trường học tập thân thiện.',
    ],
    content: [
      'Trau dồi và cải thiện vốn từ vựng, ngữ pháp Tiếng Anh.',
      'Nâng cao toàn diện 4 kỹ năng (Nghe, Nói, Đọc, Viết) Tiếng Anh khi có lượng từ vựng, ngữ pháp tốt.',
      'Tăng cường công suất sử dụng cả hai bán cầu não trong việc ghi nhớ để đảm bảo học viên có thể nhớ từ vựng, ngữ pháp tốt hơn.',
      'Kích thích trí tưởng tượng và óc sáng tạo của cá nhân mỗi học viên.',
      'Làm quen với các bài thi Cambridge Starters, Movers và Flyers.',
    ],
    environment: [
      'Lớp học ít (5-10 học viên/lớp).',
      'Giáo viên chính + trợ giảng hỗ trợ cá nhân hoá từng học viên.',
    ],
  },
  {
    slug: 'ielts',
    cardTitle: 'Luyện thi chứng chỉ IELTS',
    cardDescription:
      'Giáo trình MINDSET FOR IELTS (FOUNDATION - 3).',
    price: '1.500.000VNĐ/tháng',
    detailTitle: 'Luyện thi chứng chỉ IELTS:',
    schedule: [
      { label: 'Lộ trình học:', value: '4 cấp độ' },
      { label: 'Mỗi cấp độ:', value: '52-60 buổi' },
      { label: 'Thời lượng:', value: '3 buổi/tuần' },
      { label: 'Thời gian:', value: '90 phút/buổi' },
    ],
    curriculum: [
      'Giáo trình MINDSET FOR IELTS (FOUNDATION – 3) - Nhà Xuất Bản Cambridge University Press.',
      'Phương pháp học tập trung xây dựng nền tảng kỹ năng vững chắc, rèn chiến lược làm bài và luyện tập theo lộ trình phù hợp với trình độ của từng học viên.',
    ],
    content: [
      'Theo từng cấp độ, học viên phải nắm được cả 4 kỹ năng Nghe-Nói-Đọc-Viết và áp dụng trong việc làm bài thi một cách thành thạo để đạt được mục tiêu của bản thân.',
      'Đảm bảo cho học viên được mức điểm mong muốn trong từng cấp độ.',
      'Mỗi học viên sẽ được trang bị những từ vựng, ngữ pháp sát với đề thi, bên cạnh đó học viên có thể tự tin giao tiếp với người bản xứ trong đời sống hằng ngày.',
      'Theo từng cấp độ, học viên phải nắm được cả 4 kỹ năng Nghe-Nói-Đọc-Viết và áp dụng trong việc làm bài thi một cách thành thạo để đạt được mục tiêu của bản thân.',
    ],
    environment: [
      'Lớp học ít (5-10 học viên/lớp).',
      'Giáo viên chính + trợ giảng hỗ trợ cá nhân hoá từng học viên.',
    ],
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return courseData.find((c) => c.slug === slug);
}

export const validSlugs = courseData.map((c) => c.slug);
