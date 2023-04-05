import NavigationBar from "@/components/navigation.bar"
import React from "react"
import styles from "@/styles/Home.module.css"

export async function getServerSideProps() {
  const theaterRequest = await fetch("http://localhost:8081/theater/list")
  const theaterData = await theaterRequest.json()
  console.log(theaterData)
  return {
    props: {
      theater: theaterData
    }
  }
}

export default function Home(props: any): JSX.Element {
  console.log(props)

  const side = typeof window ? "client" : "server"
  return (
    <div className={styles.main}>
    <NavigationBar/>
    <div>Welcome</div>
    <div>You are vurrently on the {side}- side</div>
    </div>
  )
}
