import { createClient } from "contentful";

const client = createClient({
  space: process.env.SPACE_ID!,
  accessToken: process.env.ACCESS_TOKEN!,
  environment: 'dev'
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
    </main>
  );
}
