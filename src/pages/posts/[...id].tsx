import { getAllPostIds, getPostData, type PostData } from '@/lib/posts';
import Head from 'next/head';
import Date from '@/modules/posts/date';
import { T, T2 } from '@/components/stitches';
import AnimateComponentMount from '@/components/animate-component-mount';

interface Props {
  postData: PostData
}

export default function Post({ postData }: Props) {
  const pageTitle = `x7ci | ${postData.title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <AnimateComponentMount>
        <article>
          <T2 size={10} weight="3" uppercase>
            {postData.title}
          </T2>
          <br /><br />
          <Date dateString={postData.date} />

          <br />
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </AnimateComponentMount>
    </>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}
