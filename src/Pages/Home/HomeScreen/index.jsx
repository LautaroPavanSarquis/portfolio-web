import HeroSection from "../HeroSection";
import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import MyPortfolio from "../MyPortfolio";



export default function Home(){
    return (
        <>
            <HeroSection />     
            <AboutMe />
            <MyPortfolio />
            <ContactMe />
            <footer />
        </>
    );
}