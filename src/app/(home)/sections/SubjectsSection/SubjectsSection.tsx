import CollapsibleCard from "./CollapsibleCard"
import { CardData } from "src/data/SubjectsSection"

export const SubjectsSection = () => {
  return (
    <div className="flex flex-col gap-4">
      {CardData.map((card) => (
        <CollapsibleCard
          icon={card.icon}
          title={card.title}
          content={
            <ul className="flex flex-wrap">
              {card.content.map((item) => (
                <li className="w-1/2 py-2 text-base leading-6 text-gray-500">{item}</li>
              ))}
            </ul>
          }
        />
      ))}
    </div>
  )
}

export default SubjectsSection
