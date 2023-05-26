import Head from 'next/head';
import Link from 'next/link';
import Date from '@/modules/posts/date';
import { getSortedPostsData, type PostDataSummary } from '@/lib/posts';
import { ColoredBox, T } from '@/components/stitches';
import AnimateComponentMount from '@/components/animate-component-mount';
import { styled } from 'stitches.config';

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
        {allPostsData?.map(({ markdownPath, date, title }, i) => (
          <AnimateComponentMount key={markdownPath} delay={0.03 * i}>
            <ListItem>
              <Link href={`/posts/${markdownPath}`} style={{ textDecoration: 'none' }}>
                <T>{title}</T>
              </Link>
              <br />
              <Date dateString={date} />
            </ListItem>
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

const ListItem = styled('li', {
  padding: '0px 0 10px 0',
});
