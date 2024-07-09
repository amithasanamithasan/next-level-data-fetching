import Link from "next/link";


const PostsPage = async() => {
    const res=await fetch("http://localhost:5000/posts",{
        // cache:'force-cache',
        // client side rendaring
        // next:{
        //     revalidate:5,
        // },
        // server side rendering
        cache:"no-store",
    });
   const posts= await res.json();
//    console.log(posts);
    return (
        <div className="w-full   ">
            <h1 className="text-xl">Total data posts:{posts.length}</h1>

            { posts.map(post=> <div key={post.id} className="card bg-primary text-primary-content w-[70%] my-4 mx-auto">
                    <div className="card-body text-center">
                      <h2 className="card-title ">TITLE: {post.title}</h2>
                      <p>DESCRIPTION:{post.description}</p>
                      <p>LIKES:{post.likes}</p>
                      <div className="card-actions justify-end">
                       <Link href={`/posts/${post.id}`}>  <button className="btn">See_More</button></Link>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default PostsPage;