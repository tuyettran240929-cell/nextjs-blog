import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Xin chào, mình là [tên em]. Mình đang học lập trình web.</p>
        <p>
          Đọc <Link href="/posts/first-post">bài viết đầu tiên</Link>.
        </p>
      </section>
    </Layout>
  );
}