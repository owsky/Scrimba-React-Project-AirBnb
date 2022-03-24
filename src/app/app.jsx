import { Header } from "./components/header/"
import { Location } from "./components/location"
import { Divider } from "./components/divider"

import "./app.css"
import data from "./data"

export function App() {
  const locations = data.map((location, idx) => {
    return (
      <>
        <Location key={idx} {...location} />
        {idx < data.length - 1 && <Divider key={`${idx}-d`} />}
      </>
    )
  })
  return (
    <>
      <Header />
      <main>{locations}</main>
    </>
  )
}
