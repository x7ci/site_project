import { getAllPostIds, getPostData, type PostData } from '@/lib/posts';
import Head from 'next/head';
import Date from '@/modules/posts/date';
import { Box, T, T2 } from '@/components/stitches';
import AnimateComponentMount from '@/components/animate-component-mount';
import { styled } from 'stitches.config';
import DottedTopBorderBox from '@/components/dotted-top-border-box';
import CornerLinesBox from '@/components/corner-lines-box';

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
        <PageWrapper>

          <HeaderWrapper>
            <CornerLinesBox top />
            <Header>
              <T2 size={10} weight="3" uppercase>
                {postData.title}
              </T2>
              <Date dateString={postData.date} />
            </Header>
            <CornerLinesBox bottom />
          </HeaderWrapper>

          <PageContentWrapper>
            <ContentHtml dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </PageContentWrapper>

          <Box css={{ h: 20 }} />

          <DottedTopBorderBox />
        </PageWrapper>
      </AnimateComponentMount>
    </>
  );
}

const PageWrapper = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
});

const PageContentWrapper = styled('div', {
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  // maxWidth: 1000
  maxWidth: '1200px',
});

const Header = styled('div', {
  display: 'flex',
  gap: '6px',
  flexDirection: 'column',
  padding: '18px 18px 18px 18px',
});

const HeaderWrapper = styled('div', {
  // display: 'inline-block',
});

const ContentHtml = styled('div', {
  padding: '18px 0 18px 0',
});

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.markdownPath);

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
