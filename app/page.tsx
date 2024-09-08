import Image from "next/image";

import Name from "@/app/components/name";

import photo from "@/app/assets/photo2.jpg";
import Head from "@/app/components/head";

export default function Home() {
  return (
    <main className="page content-page">
      <Head
        title="József Sallai"
        description="József Sallai - software engineer proficient in Node.js, Go, and Python."
      />

      <div className="portrait">
        <Image
          src={photo.src}
          alt="József Sallai"
          width={photo.width}
          height={photo.height}
          layout="responsive"
          placeholder="blur"
          blurDataURL={photo.blurDataURL}
        />
      </div>
      <div className="content">
        <section className="name">
          <Name />
        </section>
        <section className="subtitle">About</section>
        <section className="textblock">
          I am a software engineer with rich experience in Node, Go, Python,
          C++, and PHP. I&apos;m at home with frontend frameworks such as Vue,
          React, and Svelte.
        </section>
        <section className="subtitle">Experience</section>
        <section className="textblock">
          I&apos;ve been involved with the development of all sorts of web apps
          and sites, ranging from portfolio websites to enterprise-scale social
          networks and web frameworks.
        </section>
        <section className="subtitle">
          Contact Me:{" "}
          <a href="mailto:jozsef@sallai.me">jozsef (at) sallai.me</a>
        </section>
        <section className="socials">
          <a
            className="social gh fa fa-github"
            href="https://github.com/jozsefsallai"
            target="_blank"
          ></a>
          <a
            className="social li fa fa-linkedin"
            href="https://www.linkedin.com/in/sallai/"
            target="_blank"
          ></a>
          <a
            className="social tw fa fa-twitter"
            href="https://www.twitter.com/jozsefsallaidev"
            target="_blank"
          ></a>
          <a className="social blog" href="https://blog.sallai.me">
            Blog
          </a>
          <a
            className="social resume"
            href="https://s3-us-west-1.amazonaws.com/sallai/Jozsef-Sallai-Resume-2024.pdf"
          >
            Resumé
          </a>
        </section>
      </div>
    </main>
  );
}
