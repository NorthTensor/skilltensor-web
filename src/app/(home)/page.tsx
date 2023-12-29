"use client"
import { Header } from "../../components"
import { SubjectsSection, FAQsSection } from "./sections"
import SignupSection from "./sections/SignupSection"

export default function Web() {
  return (
    <div>
      <Header />
      <div className="">
        <SubjectsSection />
        <SignupSection />
        <FAQsSection />
      </div>
    </div>
  )
}
