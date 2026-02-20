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
      'Giáo trình PIPPA AND POP 1,2,3\nPhương pháp học thông qua hoạt động nghe - nói, trò chơi và vận động phù hợp lứa tuổi.',
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
      'Giáo trình FAMILY AND FRIENDS 2nd EDITION\nPhương pháp học chú trọng học qua thực hành, tương tác và hướng dẫn từng bước.',
    price: '900.000VNĐ/tháng',
    detailTitle: 'Tiếng anh thiếu nhi (6-10 tuổi):',
    schedule: [
      { label: 'Lộ trình học:', value: '6 cấp độ' },
      { label: 'Mỗi cấp độ:', value: '32 buổi' },
      { label: 'Thời lượng:', value: '3 buổi/tuần' },
      { label: 'Thời gian:', value: '90 phút/buổi' },
    ],
    curriculum: [
      'Giáo trình FAMILY AND FRIENDS 2nd EDITION 1-6 - Nhà Xuất Bản Oxford University Press.',
      'Phương pháp học chú trọng học qua thực hành, tương tác và hướng dẫn từng bước, giúp học viên phát triển toàn diện 4 kỹ năng ngôn ngữ.',
    ],
    content: [
      'Xây dựng nền tảng ngữ pháp và từ vựng vững chắc.',
      'Phát triển kỹ năng đọc hiểu thông qua các bài đọc phong phú.',
      'Rèn luyện kỹ năng viết từ câu đơn giản đến đoạn văn.',
      'Tăng cường khả năng nghe hiểu và giao tiếp tự tin trong các tình huống hàng ngày.',
    ],
    environment: [
      'Lớp học ít (8-12 học viên/lớp).',
      'Giáo viên chính + trợ giảng hỗ trợ cá nhân hoá từng học viên.',
    ],
  },
  {
    slug: 'ielts',
    cardTitle: 'Luyện thi chứng chỉ IELTS',
    cardDescription:
      'Giáo trình MINDSET FOR IELTS (FOUNDATION - 3)\nPhương pháp học tập trung xây dựng nền tảng kỹ năng vững chắc.',
    price: '1.500.000VNĐ/tháng',
    detailTitle: 'Luyện thi chứng chỉ IELTS:',
    schedule: [
      { label: 'Lộ trình học:', value: '4 cấp độ' },
      { label: 'Mỗi cấp độ:', value: '36 buổi' },
      { label: 'Thời lượng:', value: '3 buổi/tuần' },
      { label: 'Thời gian:', value: '120 phút/buổi' },
    ],
    curriculum: [
      'Giáo trình MINDSET FOR IELTS (FOUNDATION - 3) - Nhà Xuất Bản Cambridge University Press.',
      'Phương pháp học tập trung xây dựng nền tảng kỹ năng vững chắc, luyện tập chuyên sâu theo từng dạng bài thi IELTS.',
    ],
    content: [
      'Nắm vững cấu trúc và format bài thi IELTS (Listening, Reading, Writing, Speaking).',
      'Phát triển chiến lược làm bài hiệu quả cho từng phần thi.',
      'Mở rộng vốn từ vựng học thuật và các chủ đề thường gặp trong IELTS.',
      'Luyện tập viết Task 1 và Task 2 với phản hồi chi tiết từ giáo viên.',
      'Rèn luyện kỹ năng Speaking qua các buổi mock test thường xuyên.',
    ],
    environment: [
      'Lớp học ít (5-10 học viên/lớp).',
      'Giáo viên có chứng chỉ IELTS 7.5+ và kinh nghiệm luyện thi.',
      'Mock test định kỳ để đánh giá tiến độ học viên.',
    ],
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return courseData.find((c) => c.slug === slug);
}

export const validSlugs = courseData.map((c) => c.slug);
