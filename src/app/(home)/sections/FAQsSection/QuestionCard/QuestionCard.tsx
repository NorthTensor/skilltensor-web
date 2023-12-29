import React, { useState } from "react"
import { Collapsible } from "src/components"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

export interface QuestionCardProps {
  question: string
  answer: string
  className?: string
}

export const QuestionCard = ({ question, answer, className }: QuestionCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={className}>
      <Collapsible.Trigger>
        <div className="flex flex-row items-center justify-between pb-4 pt-4">
          <h3 className="text-left text-lg font-medium leading-7">{question}</h3>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content className="pb-4 text-base leading-6 text-gray-500">{answer}</Collapsible.Content>
    </Collapsible>
  )
}
