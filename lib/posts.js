import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  // Lấy tên tất cả file trong thư mục posts
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Bỏ đuôi ".md" để làm id
    const id = fileName.replace(/\.md$/, '');

    // Đọc nội dung file
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Tách metadata
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  // Sắp xếp bài mới nhất lên đầu
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}