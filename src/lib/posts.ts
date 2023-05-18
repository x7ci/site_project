import fs from 'fs';
import path, { resolve } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { readdir, stat } from 'fs/promises';

export type PostDataSummary = Omit<PostData, 'contentHtml'>;

export interface PostData extends PostMetaData {
  id: string
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
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
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
      id: getPathSegments(file),
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
    .use(html)
    // .use(rehypeReact, {
    //   createElement: React.createElement,
    //   components: {
    //     p: T
    //   }
    // })
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    id: id[id.length - 1],
    contentHtml,
    ...matterResult.data as PostMetaData,
  };
};
