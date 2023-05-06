import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blogpost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return (
    <>
      <div className={styles.main}>
        <h1>Name of the Blog: {slug}</h1>
        <p className={styles.blogtext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rem
          ad nihil repellat minus non, mollitia at necessitatibus, ipsam quod
          nostrum iste commodi laboriosam explicabo culpa. Enim soluta doloribus
          repellendus, dolor magni sapiente consectetur nulla esse. Optio eos
          impedit officia porro, voluptate, ea perspiciatis cum, dolore aut
          facilis eum neque necessitatibus modi itaque distinctio ut totam quas.
          Iste, ullam? Tenetur expedita dolores atque voluptate, facere tempora
          nisi non obcaecati perspiciatis libero explicabo quidem, excepturi
          vitae minus? Consequatur error ab odit dolor sint numquam enim vero
          qui cum? Soluta voluptatum repellendus nemo consectetur fuga placeat
          officia magni excepturi animi molestiae rem explicabo suscipit itaque
          aut eligendi culpa ducimus accusamus adipisci ipsa quam, asperiores
          labore corrupti? Pariatur rerum rem culpa ducimus quaerat at itaque
          est, laborum obcaecati doloribus ad provident atque sit eaque eligendi
          fugiat illum, facere delectus earum dicta inventore voluptas
          praesentium. Ea nam mollitia explicabo iste commodi nihil blanditiis.
          Magnam sequi numquam veritatis! Eligendi earum vel nihil. Excepturi
          consectetur aspernatur quam ipsam assumenda fugit placeat corrupti,
          nam cum sint quibusdam sed commodi nulla at dignissimos facilis
          voluptatibus in porro? Quae perspiciatis quasi pariatur ullam enim
          dolores? Repellat iste repudiandae quo id rem? Libero exercitationem
          suscipit laboriosam commodi accusantium ducimus sit neque eveniet,
          magnam architecto quos odio quis quisquam nemo non voluptas placeat ad
          saepe quae molestias laudantium veniam iusto explicabo dolor. Vero
          provident libero ratione modi. Amet id impedit omnis, harum ipsam
          distinctio sequi sint corrupti officia animi ratione, fugiat aperiam
          dicta assumenda ipsum quisquam sed quas exercitationem architecto!
          Nostrum.
        </p>
      </div>
    </>
  );
};

export default slug;