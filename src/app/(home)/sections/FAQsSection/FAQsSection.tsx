import { LP_GRID_ITEMS } from "lp-items"
import { FAQsData } from "src/data/FAQsSection"
import { QuestionCard } from "./QuestionCard/QuestionCard"

export const FAQsSection = ({}) => {
  return (
    <div className="bg-white px-4 py-8">
      <h1 className="mb-8 text-center font-['Urbanist'] text-5xl font-bold text-blue-500">
        Frequently asked questions
      </h1>
      {FAQsData.map((item, index) => (
        <QuestionCard
          className={index === FAQsData.length - 1 ? "" : "border-b border-gray-400"}
          key={index}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  )
}

export default FAQsSection
