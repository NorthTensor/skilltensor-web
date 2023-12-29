"use client"
import { Button, Header } from "../../components"
import { SubjectsSection, FAQsSection } from "./sections"

export default function Web() {
  return (
    <div>
      <Header />
      <div className="">
        <SubjectsSection />
        <FAQsSection />
      </div>
    </div>
  )
}
