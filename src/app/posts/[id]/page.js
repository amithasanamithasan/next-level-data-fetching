import Link from "next/link";


const Detailpage = async({params}) => {

    // console.log(params);
   const res =await fetch(`http://localhost:5000/posts/${params.id}`)
   const post= await res.json();
//    console.log(post);
    return (
        <div>
            <h1 className="text-4xl text-center py-2"> details page</h1>
            <div key={post.id} className="card bg-primary text-primary-content w-[70%] my-4 mx-auto">
                    <div className="card-body text-center">
                      <h2 className="card-title ">TITLE: {post.title}</h2>
                      <p>DESCRIPTION:{post.description}</p>
                      <p>LIKES:{post.likes}</p>
                      <div className="card-actions justify-end">
                       <Link href={"/posts"}>  <button className="btn btn-accent">Back_to_Home</button></Link>
                      </div>
                    </div>
                  </div>)
        </div>
    );
};

export default Detailpage;