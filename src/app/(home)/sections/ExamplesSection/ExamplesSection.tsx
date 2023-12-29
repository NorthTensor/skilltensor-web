import Image from "next/image"
import Image1 from "../../../../assets/images/ImageContainer.png"
import Image2 from "../../../../assets/images/ImageContainer2.png"
import Image3 from "../../../../assets/images/ImageContainer3.png"
import { CheckCircleIcon } from "@heroicons/react/24/outline"

export const ExamplesSection = ({}) => {
  return (
    <div className="bg-white py-8">
      <div className="items-left flex flex-col gap-8 px-4">
        <h1 className="text-roboto text-[42px] font-medium leading-[52px] -tracking-[3%] text-blue-600">
          Not just a chatbot but a Math tutor
        </h1>
        <h3 className="font-roboto text-lg leading-[32px] text-gray-400">
          Discover an interactive, personalized Math learning experience - more than just a chatbot, a dedicated Math
          tutor tailors lessons, solves problems, and guides you to mathematical mastery.
        </h3>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="font-urbanist text-[44px] font-medium leading-[56px] -tracking-[3%] text-blue-600">100%</h1>
            <p className="text-gray-400">helping solutions</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-urbanist text-[44px] font-medium leading-[56px] -tracking-[3%] text-blue-600">1000%</h1>
            <p className="text-gray-400">Logics in simple words</p>
          </div>
        </div>
      </div>
      <Image alt="Image of Phone Screen" src={Image1} className="py-8" />
      <div className="-mt-[18rem] flex flex-col gap-8">
        <div className="flex flex-col gap-8 px-4">
          <h1 className="text-roboto text-[38px] font-medium leading-[52px] -tracking-[3%] text-blue-600">
            Share your thoughts in a debate.
          </h1>
          <h3 className="font-roboto text-lg leading-[32px] text-gray-400">
            Our innovative system allows you to exchange ideas, argue perspectives, and refine your thoughts in lively
            debates with our interactive 'Debate withBot' feature. Join the conversation, sharpen your arguments, and
            embrace the power of discussion.
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-blue-600" />
              <p className="font-urbanist text-xs font-extrabold tracking-[10%] text-blue-600">
                Should the government cancel student debt?
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-blue-600" />
              <p className="font-urbanist text-xs font-extrabold tracking-[10%] text-blue-600">
                Will artificial intelligence help or hurt the jobs?
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-blue-600" />
              <p className="font-urbanist text-xs font-extrabold tracking-[10%] text-blue-600">
                Should college be free?
              </p>
            </div>
          </div>
        </div>
        <Image src={Image2} alt="Picture of a phone" />
        <div className="-mt-[18rem] mb-12 flex flex-col gap-8">
          <div className="flex flex-col gap-8 px-4">
            <h1 className="text-roboto text-[38px] font-medium leading-[52px] -tracking-[3%] text-blue-600">
              Career Support Chatbot
            </h1>
            <h3 className="font-roboto text-lg leading-[32px] text-gray-400">
              Meet our career guidance chatbot! From exploring career paths to refining resumes, it offers personalized
              advice and resources. Get help with assessments, skill-building suggestions, and industry insights
              tailored to your goals, empowering you for success.
            </h3>
            <div className="flex flex-col gap-4">
              <h1 className="text-roboto text-[38px] font-medium leading-[52px] -tracking-[3%] text-blue-600">
                100% Growth
              </h1>
              <div className="flex h-[8px] w-[80%] flex-row items-center">
                <div className="h-[8px] w-[90%] bg-blue-600" />
                <div className="h-[8px] w-[10%] bg-[#E8EFFF]" />
              </div>
              <p className="font-roboto text-xs text-gray-400">With skill building</p>
            </div>
          </div>
        </div>
        <Image src={Image3} alt="Picture of a phone" className="-mb-[18rem] pl-4" />
      </div>
    </div>
  )
}

export default ExamplesSection
