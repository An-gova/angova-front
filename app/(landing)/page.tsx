import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

const LandingPage = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar />
        <Hero />
      </MaxWidthWrapper>
    </>
  );
};

export default LandingPage;
