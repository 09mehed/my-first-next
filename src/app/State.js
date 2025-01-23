import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function State() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) {
            throw new Error('Failed to fetch posts');
          }
          const data = await response.json();
          setPosts(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchPosts();
    }, []);
  
    return (
      <div className="w-11/12 mx-auto py-5">
        <h1 className="text-2xl font-bold mb-4 text-center">Blog Posts</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
  
        {!loading && !error && (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <li key={post.id} className="p-4 border border-gray-300 rounded shadow">
                <h2 className="text-lg font-semibold">
                  <Link href={`/post/${post.id}`}>{post.title}</Link>
                </h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
}

export default State