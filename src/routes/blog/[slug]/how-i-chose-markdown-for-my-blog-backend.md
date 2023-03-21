---
title: How I chose markdown for my blog backend
date: 2023-03-20
author: elclark
tags: ['blogging', 'markdown', 'cloudflare workers', 'cloudflare workers kv']
slug: how-i-chose-markdown-for-my-blog-backend
summary: In this post, I want to share with you my journey of building my own website and choosing the best backend for my blogs. It was not an easy decision and I faced some challenges along the way, but I think I finally found a solution that works for me.
---

Hello everyone! In this post, I want to share with you my journey of building my own website and choosing the best backend for my blogs. It was not an easy decision and I faced some challenges along the way, but I think I finally found a solution that works for me.

## Why I wanted to build my own website

I have always been interested in web development and creating online content. I wanted to have a personal space where I can showcase my projects, write about my interests, and connect with other people who share similar passions. I also wanted to learn new skills and technologies that can help me grow as a developer.

## How I started with Cloudflare Workers

I decided to use Cloudflare as my hosting platform because it seemed like a fast, scalable, and affordable way to deploy serverless code across the globe. Cloudflare Workers allows you to write code in JavaScript and run it on Cloudflare's edge network. This means that your code is executed close to your users, reducing latency and improving performance.

## Why I struggled with Cloudflare Workers for blogging

However, when I tried to build a more complex application that involves blogging functionality, things got more complicated. I wanted to have a dynamic website that can display different blog posts based on the URL path. For example, if someone visits `elclark.my.id/blog/hello-world`, they should see the blog post titled "Hello World".

To achieve this, I had two options: either store my blog posts as static assets in Cloudflare Workers KV (a key-value data store) or fetch them from an external API (such as Contentful or Sanity). Both options had some drawbacks.

While Cloudflare Workers KV is a powerful key-value data store that can be used to store static assets like blog posts, it does have some drawbacks when it comes to building a blogging platform.

First, you would need to build your own content management system (CMS) to manage your blog posts, as Cloudflare Workers KV doesn't provide a built-in editor. This can be time-consuming and require a significant amount of technical expertise.

Furthermore, if you have a large number of blog posts, it can be challenging to organize and sort them in a meaningful way, which can impact the user experience for your visitors.

## Why not CMS platforms?

While CMS platforms like Contentful and Sanity can be great options for managing blog content, there are some reasons why I don't want to use them choose not to use them.

Firstly, I have concerns about the speed and performance of these platforms, especially when it comes to managing a large number of blog posts or handling high traffic volumes. I want to ensure that my website loads quickly and provides a smooth user experience for my visitors.

Secondly, I prefer to have more flexibility and control over my blog's functionality and design. While CMS platforms offer many features and functionalities out of the box, I worry that they may not meet all of my specific requirements or that they are too rigid in terms of customization options. I want to be able to tailor my blogging functionality to my specific needs and preferences.

Finally, while CMS platforms can be great for managing blog content, I worry that they may not be as efficient or scalable as a custom solution. With a custom solution, I can optimize my blog's performance and ensure that it can handle high traffic volumes and a large number of blog posts.

Overall, while CMS platforms can be a great option for many users, I have decided to go with a custom solution using Cloudflare Workers KV and other technologies. This allows me to have full control over my blog's functionality and design, as well as ensure that my blog is efficient, scalable, and customizable.

## How I discovered markdown

I was looking for a simpler way to create and manage my blog posts without sacrificing performance or flexibility. That's when I stumbled upon markdown, a lightweight markup language that allows you to format text using plain text syntax. Markdown is widely used in blogging, instant messaging, online forums, collaborative software, documentation pages, and readme files.

Markdown appealed to me because it was easy to read and write. It also supported many features that I wanted for my blog posts such as headings, lists, emphasis, links, images, code blocks, and more. Markdown also had many tools and libraries that can convert it into HTML or other formats.
