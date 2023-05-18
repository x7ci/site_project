import Head from 'next/head';
import Link from 'next/link';
import Date from '@/modules/posts/date';
import { getSortedPostsData, type PostDataSummary } from '@/lib/posts';
import { ColoredBox, T } from '@/components/stitches';
import AnimateComponentMount from '@/components/animate-component-mount';

interface Props {
  allPostsData: PostDataSummary[]
}

export default function Home({ allPostsData }: Props) {
  return (
    <>
      <Head>
        <title>x7ci | posts</title>
      </Head>
      <AnimateComponentMount>

        <ColoredBox color="cyan1">
          <T color="gray1" weight="2" >POSTS</T>
        </ColoredBox>
      </AnimateComponentMount>

      <ul>
        {allPostsData?.map(({ id, date, title }, i) => (
          <AnimateComponentMount key={id} delay={0.03 * i}>
            <li>
              <Link href={`/posts/${id}`} style={{ textDecoration: 'none' }}>
                <T>
                  {title}
                </T>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          </AnimateComponentMount>
        ))}
      </ul>
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  };
}
