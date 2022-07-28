import { useState } from "react";
import ListItem from "@/components/ListItem";
import SectionHeader from "@/components/SectionHeader";
import SlideoverPrograms from "@/components/SlideoverPrograms";

const programsMock = [
  {
    "id": 3,
    "productIdentifier": "cashback-iphone-20",
    "value": 20,
    "status": "ENABLED",
    "type": "PERCENT",
    "startDate": "2022-07-27T17:08:14.857Z",
    "endDate": "2022-07-29T17:08:14.857Z"
  },
  {
    "id": 4,
    "productIdentifier": "cashback-iphone-50",
    "value": 50,
    "status": "ENABLED",
    "type": "VALUE",
    "startDate": "2022-07-27T17:08:14.857Z",
    "endDate": "2022-07-29T17:08:14.857Z"
  }
]

export default function Home() {
  const [slideoverProgramsIsOpen, setSlideoverProgramsIsOpen] = useState(true)
  const [activeProgram, setActiveProgram] = useState(null)

  const handleSlideoverPrograms = (program?: any) => {
    if (program) {
      setActiveProgram(program)
    } else {
      setActiveProgram(null)
    }

    setSlideoverProgramsIsOpen(!slideoverProgramsIsOpen)
  }

  return (
    <div className="py-6 px-4 sm:px-32 lg:pb-8">
      <SectionHeader sectionAction={handleSlideoverPrograms} />

      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {programsMock.map(program => (
            <div onClick={() => handleSlideoverPrograms(program)} key={program.id}>
              <ListItem program={program} />
            </div>
          ))}
        </ul>
      </div>

      <SlideoverPrograms
        open={slideoverProgramsIsOpen}
        handleSlideover={setSlideoverProgramsIsOpen}
        program={activeProgram}
      />
    </div>
  )
}
