import fs from 'fs';
import path, { resolve } from 'path';
import { readdir, stat } from 'fs/promises';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import remarkParse from 'remark-parse';
import rehypePrism from 'rehype-prism-plus';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';

export type PostDataSummary = Omit<PostData, 'contentHtml'>;

export interface PostData extends PostMetaData {
  markdownPath: string
  contentHtml: string
}

export interface PostMetaData {
  title: string
  date: string
}

const postsDirectory = path.join(process.cwd(), 'src/content');

/** Returns file names with their path */
const getFiles = async(dir: string): Promise<string[]> => {
  const subdirs: string[] = await readdir(dir);

  const files: string[] = await Promise.all(
    subdirs.map(async(subdir) => {
      const res = resolve(dir, subdir);
      return (await stat(res)).isDirectory()
        ? await getFiles(res)
        : res.slice(postsDirectory.length + 1);
    })
  ) as string[];

  return files.flat().filter((file) => file.endsWith('.md'));
};

export const getSortedPostsData = async(): Promise<PostDataSummary[]> => {
  const fileNames = await getFiles(postsDirectory);

  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const markdownPath = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      markdownPath,
      ...matterResult.data as PostMetaData
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
};

export function getPathSegments(file: string) {
  const segments: string[] = file.slice(0, -3).replace(/\\/g, '/').split('/');

  return segments;
}

export async function getAllPostIds() {
  const files = await getFiles(postsDirectory);

  return files.map((file) => ({
    params: {
      markdownPath: getPathSegments(file),
    },
  }));
}

export const getPostData = async(id: string[]): Promise<PostData> => {
  const fullPath = postsDirectory + `/${id.join('/')}.md`;

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkParse)
    // .use(remarkPrism)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypePrism)
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    // .use(html)
    // .use(rehypeReact, {
    //   createElement: React.createElement,
    //   components: {
    //     p: T
    //   }
    // })
    // .use(rehypeReact, {
    //   createElement: React.createElement,
    // })
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    markdownPath: id[id.length - 1],
    contentHtml,
    ...matterResult.data as PostMetaData,
  };
};
