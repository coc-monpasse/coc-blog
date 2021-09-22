import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
     query{
  projects(take:1){
    id
    name
    status
  }
}
    `,
  });

  return {
    props: {
      projects: data.projects
    },
  };
}

export default function Projects({projects}) {
  console.log(projects)
  return (
    <div className={styles.grid}>
  {projects.map((country) => (
    <div key={country.id} className={styles.grid}>
      <p>
        {country.id} - {country.name}
      </p>
      <p>{country.status}</p>
    </div>
  ))}
</div>
  );
}
