import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";
import ListItem from "@/components/ListItem";
import SectionHeader from "@/components/SectionHeader";
import SlideoverPrograms from "@/components/SlideoverPrograms";
import getPrograms from "@/queries/getPrograms";
import prisma from "@/utils/prisma";


const Home = ({ initialPrograms }: any) => {
  const { programs } = getPrograms(initialPrograms)

  const [slideoverProgramsIsOpen, setSlideoverProgramsIsOpen] = useState(false)
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
    <>
      <Head>
        <title>CashbackApp</title>
      </Head>

      <div className="py-6 px-4 sm:px-32 lg:pb-8">
        <SectionHeader sectionAction={handleSlideoverPrograms} />

        <div className="overflow-hidden bg-white shadow sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {programs.map(program => (
              <div onClick={() => handleSlideoverPrograms(program)} key={program.id}>
                <ListItem program={program} />
              </div>
            ))}
          </ul>
        </div>

        <SlideoverPrograms
          open={slideoverProgramsIsOpen}
          handleSlideover={setSlideoverProgramsIsOpen}
          handleActiveProgram={setActiveProgram}
          program={activeProgram}
        />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const programs = await prisma.program.findMany({
    orderBy: [
      {
        createdAt: 'desc'
      }
    ]
  })

  if (programs) {
    return {
      props: {
        initialPrograms: programs,
      }
    }
  }

  return { props: {} }
}

export default Home
