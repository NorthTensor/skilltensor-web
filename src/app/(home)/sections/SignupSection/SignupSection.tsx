import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { Button } from "src/components"
import DashboardImage from "../../../../assets/images/Dashboard1.png"
import Image from "next/image"

export const SignupSection = ({}) => {
  return (
    <div className="flex flex-col bg-[#E5EEFF] pt-8">
      <div className="flex flex-col gap-8 px-4">
        <h1 className="font-urbanist text-center text-[48px] font-medium leading-[56px] -tracking-[3%] text-blue-600">
          Sign up for SkillTensor, your always-available tutor
        </h1>
        <h3 className="font-roboto text-center text-xl font-normal leading-8 -tracking-[1%] text-gray-400">
          Unlock limitless learning with SkillTensor, your perpetual tutor. Sign up now and elevate your educational
          journey anytime, anywhere!
        </h3>
        <Button className="m-auto flex w-1/2 flex-row items-center justify-between gap-1 border-none pr-1">
          <p className="font-urbanist text-lg font-bold text-blue-600">Signup Now</p>{" "}
          <ArrowRightCircleIcon className="ml-3 h-9 w-9 fill-blue-600 stroke-1 text-right text-white" />
        </Button>
      </div>
      <Image src={DashboardImage} alt="Image of Computer" />
    </div>
  )
}

export default SignupSection
