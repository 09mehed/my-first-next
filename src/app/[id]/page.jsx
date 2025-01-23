// import React from 'react';

// async function fetchPost(id) {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   return response.json();
// }

// export default async function PostDetails({ params }) {
//   const { id } = params;

//   const post = await fetchPost(id);

//   return (
//     <div className="w-11/12 mx-auto py-5">
//       <h1 className="text-2xl font-bold mb-4 text-center">Post Details</h1>
//       <div className="p-4 border border-gray-300 rounded shadow">
//         <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
//         <p>{post.body}</p>
//       </div>
//     </div>
//   );
// }
