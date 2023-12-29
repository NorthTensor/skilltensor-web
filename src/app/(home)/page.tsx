"use client"
import { Header } from "../../components"
import { SubjectsSection, FAQsSection, ExamplesSection, SignupSection } from "./sections"

export default function Web() {
  return (
    <div>
      <Header />
      <div className="">
        <SubjectsSection />
        <ExamplesSection />
        <SignupSection />
        <FAQsSection />
      </div>
    </div>
  )
}
