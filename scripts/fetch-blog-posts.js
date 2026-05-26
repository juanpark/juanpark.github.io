import https from 'https';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration: Add post titles or URLs you want to exclude
const EXCLUDED_POSTS = [
  // Example: 'Post Title to Exclude',
  // Example: 'https://blog.naver.com/drakor/123456789',
];

async function fetchRSS() {
  return new Promise((resolve, reject) => {
    https.get('https://rss.blog.naver.com/drakor.xml', (res) => {
      res.setEncoding('utf8');
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseRSS(xmlText) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/;
  const linkRegex = /<link>(.*?)<\/link>/;
  const descRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/;
  const dateRegex = /<pubDate>(.*?)<\/pubDate>/;

  let match;
  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemXml = match[1];
    const title = (titleRegex.exec(itemXml) || [])[1] || '';
    let link = (linkRegex.exec(itemXml) || [])[1] || '';
    const description = (descRegex.exec(itemXml) || [])[1] || '';
    const pubDate = (dateRegex.exec(itemXml) || [])[1] || '';

    // Strip CDATA from link if present
    link = link.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim();

    // Skip excluded posts
    if (EXCLUDED_POSTS.includes(title) || EXCLUDED_POSTS.includes(link)) {
      continue;
    }

    items.push({ title, link, description, pubDate });
  }

  return items;
}

async function main() {
  try {
    console.log('Fetching blog posts from RSS feed...');
    const xmlText = await fetchRSS();

    console.log('Parsing RSS feed...');
    const posts = parseRSS(xmlText);

    console.log(`Found ${posts.length} blog posts`);

    // Create public directory if it doesn't exist
    const outputDir = `${__dirname}/../public`;
    try {
      mkdirSync(outputDir, { recursive: true });
    } catch (err) {
      // Directory might already exist
    }

    // Write to public/blog-posts.json with UTF-8 encoding
    const outputPath = `${outputDir}/blog-posts.json`;
    writeFileSync(outputPath, JSON.stringify(posts, null, 2), 'utf8');

    console.log(`✓ Blog posts saved to ${outputPath}`);
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    process.exit(1);
  }
}

main();
