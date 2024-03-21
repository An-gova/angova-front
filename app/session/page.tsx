import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import TopNavigation from "@/components/TopNavigation"
import BottomNavigation from "@/components/BottomNavigation"


const SessionPage = () => {
  return (
    <>
      <MaxWidthWrapper>
      <TopNavigation isTitle={false} isLanguage={true} isGear={true} />
        <div>Session</div>
        <BottomNavigation />
      </MaxWidthWrapper>
    </>
  )
}

export default SessionPage