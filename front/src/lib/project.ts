import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ''),
    },
  }));
}

export async function getProjectsData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
