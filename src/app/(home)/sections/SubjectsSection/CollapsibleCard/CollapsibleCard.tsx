import React, { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { Collapsible } from "src/components"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"

export interface CollapsibleCardProps {
  icon: StaticImageData
  title: string
  content: React.ReactNode
}

export const CollapsibleCard = ({ icon, title, content }: CollapsibleCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex flex-col rounded-lg p-4 shadow-xl">
      <Collapsible.Trigger>
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="flex gap-2">
            <Image src={icon} alt="Icon" width={32} height={32} />
            <p className="text-lg font-medium leading-7">{title}</p>
          </div>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content>{content}</Collapsible.Content>
    </Collapsible>
  )
}

export default CollapsibleCard
