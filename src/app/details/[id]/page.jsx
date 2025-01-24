"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
    const { id } = useParams()
    const [post, setPost] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const data = await res.json()
                setPost(data)
            } catch (err) {
                console.log(err.message);
            }
        }
        fetchPost()
    }, [id])
    return (
        <div>
            <h1 className="w-11/12 mx-auto p-4 border border-gray-300 rounded shadow">
                <h2 className="text-lg font-semibold">
                   {post?.title}
                </h2>
                <p>{post?.body}</p>
            </h1>
        </div>
    )
}

export default page