import { Collapsible as CollapsibleRoot, Content, Trigger } from "@radix-ui/react-collapsible"
import clsx from "clsx"

import type {
  CollapsibleContentProps,
  CollapsibleProps as RootProps,
  CollapsibleTriggerProps,
} from "@radix-ui/react-collapsible"

const Collapsible = (props: RootProps) => <CollapsibleRoot {...props} />

export const CollapsibleContent = (props: CollapsibleContentProps) => (
  <Content
    className={clsx(
      "radix-state-closed:animate-collapsibleSlideUp radix-state-open:animate-collapsibleSlideDown overflow-hidden",
      props.className
    )}
    {...props}
  />
)

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => <Trigger {...props} />

export default Collapsible
