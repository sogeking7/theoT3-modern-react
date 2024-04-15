import { db } from "~/server/db";

// next-js auto complete
export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/0516ff63-2aed-4a6b-9e07-bd4a57dc1d7c-vshqfz.png",
  "https://utfs.io/f/bb34480d-1711-44ff-86a3-d107e320489b-z2p4d9.png",
  "https://utfs.io/f/267286cb-09fc-4dfb-b654-99598241cf66-ozg89o.avif",
  "https://utfs.io/f/d62747af-673e-4d87-b394-01ade1b9bef6-fe66e0.jpg",
  "https://utfs.io/f/bde7d019-9f87-414b-8e34-aace7960b2ea-eii58c.avif",
];

const mockData = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url,
    title: `Image ${index + 1}`,
  };
});

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id} className="">
              {post.name}
            </div>
          );
        })}
      </div>
      <div className="flex gap-4 flex-wrap">
        {[...mockData, ...mockData, ...mockData].map((data, index) => {
          return (
            <div key={data.id + "-" + index} className="w-1/4 p-4">
              <img src={data.url} alt={data.title} />
            </div>
          );
        })}
      </div>
      <h1>Hello</h1>
    </main>
  );
}
