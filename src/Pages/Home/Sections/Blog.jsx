import React from 'react';
import { blogPost1, blogPost2, blogPost3, blogPost4 } from '../../../Assets/img';

const blogPostList = [
    {
        author: 'John Doe',
        title: 'New Home Sales Picked Up in December',
        date: 'Jan 03, 2022',
        comments: 3,
        content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        image: blogPost1
    },

    {
        author: 'John Doe',
        title: 'New Home Sales Picked Up in December',
        date: 'Mar 05, 2022',
        comments: 5,
        content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        image: blogPost2
    },

    {
        author: 'John Doe',
        title: 'New Home Sales Picked Up in December',
        date: 'May 07, 2022',
        comments: 6,
        content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        image: blogPost3
    },

    {
        author: 'John Doe',
        title: 'New Home Sales Picked Up in December',
        date: 'May 22, 2022',
        comments: 3,
        content: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        image: blogPost4
    },

]

function BlogPostCard({ post }) {
    const { author, title, date, comments, content, image } = post;
    return (
        <div className="shadow-sm md:shadow-md">
            <div style={{ backgroundImage: `url(${image})` }} className={`h-[200px] md:h-[300px] bg-cover bg-center bg-no-repeat`}></div>

            <div className="pt-6 pb-12 px-8 space-y-4 border-gray-200 border-t-0 border-[1px]">
                <div className="space-y-2 uppercase">
                    <div className="flex justify-between text-gray-500">
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>
                    <p className="text-vestaPurple-1">{comments} Comments</p>
                </div>

                <h3 className="text-xl font-semibold leading-relaxed hover:text-vestaPurple-1 transition-colors duration-75 cursor-pointer">
                    {title}
                </h3>

                <p className="text-gray-500 leading-relaxed">
                    {content}
                </p>
            </div>
        </div>
    )
}

export default function Blog() {
    return (
        <section>
            <div className="text-center mb-10 space-y-4">
                <h1 className="text-vestaPurple-1 text-base md:text-lg tracking-[3px] uppercase after:bg-vestaPurple-1 after:inline-block after:h-[1px] after:relative after:align-middle after:w-1/4 before:bg-vestaPurple-1 before:inline-block before:h-[1px] before:relative before:align-middle before:w-1/4">
                    our blog
                </h1>
                <h2 className="text-3xl md:text-4xl font-medium capitalize mt-2 mb-3">
                    recent blog
                </h2>
            </div>

            <div className=" w-11/12 mx-auto grid px-2 gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    blogPostList.map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                    ))
                }
            </div>
        </section>
    )
}
