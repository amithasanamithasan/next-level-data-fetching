

const PostsPage = async() => {
    const res=await fetch("http://localhost:5000/posts",{
        // cache:'force-cache',
        next:{
            revalidate:5,
        },
    });
   const posts= await res.json();
//    console.log(posts);
    return (
        <div className="w-full   ">
            <h1 className="text-xl">Total data posts:{posts.length}</h1>

            { posts.map(post=> <div key={post.id} className="card bg-primary text-primary-content w-[70%] my-4 mx-auto">
                    <div className="card-body text-center">
                      <h2 className="card-title">{post.title}</h2>
                      <p>{post.description}</p>
                      <p>{post.likes}</p>
                      <div className="card-actions justify-end">
                        <button className="btn">See More</button>
                      </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default PostsPage;