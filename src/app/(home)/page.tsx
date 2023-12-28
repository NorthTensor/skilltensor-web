"use client"
import { Button, Header } from "../../components"
import { SubjectsSection } from "./sections"

export default function Web() {
  return (
    <div>
      <Header />
      <div className="px-4">
        <SubjectsSection />
      </div>
    </div>
  )
}
