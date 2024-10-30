import { createClient } from "contentful";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
  // environment: "dev",
});

const getBlogEntries = async () => {
  const entries = await client.getEntries({ content_type: "blog" });
  return entries;
};

export default async function Home() {
  const blogEntries = await getBlogEntries();
  console.log("Home -> blogEntries", blogEntries);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>blog listing goes here</p>

      <ul>
        {blogEntries.items.map(({ fields, sys }) => (
          <li key={sys.id}>
            {fields.name}
            {documentToReactComponents(fields.content)}
            </li>
        ))}
      </ul>
    </main>
  );
}
