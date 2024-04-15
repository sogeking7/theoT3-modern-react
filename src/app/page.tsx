import { db } from "~/server/db";

// next-js auto complete
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.name),
  });

  console.log(images); // only shows on the server.

  return (
    <main>
      <div className="flex gap-4 flex-wrap">
        {images.map((data) => {
          return (
            <div key={data.id} className="w-1/4 p-4">
              <img src={data.url} alt={data.name} />
              <h2>{data.name}</h2>
            </div>
          );
        })}
      </div>
      <h1>Hello</h1>
    </main>
  );
}
