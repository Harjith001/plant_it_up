import PlantCard, { PlantCardType } from "@/components/PlantCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { PLANTU_QUERIES } from "@/sanity/lib/queries";

export default async function Home({searchParams} : {searchParams : Promise<{ query?:string }>}) {
  const query = (await searchParams).query 

  const posts = await client.fetch(PLANTU_QUERIES);

  console.log(JSON.stringify(posts, null, 2));

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Discover, Share, and Grow Together</h1>
      <p className="sub-heading !max-w-3xl">This is your space to connect, learn, and contribute to a vibrant community of plant lovers.</p>
      <SearchForm query={query}/>
    </section >

    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Search results for ${query}` : 'All posts'}
      </p>  

      <ul className="mt-7 card_grid">
        {
          posts?.length > 0 ? (
            posts.map((post : PlantCardType, index: number) =>(
              <PlantCard key={post?._id} post={post}/>
            ))) : (
              <p className="no-results">No plant tips found</p>
            )
        }
      </ul> 
    </section>

    </>
  );
}
