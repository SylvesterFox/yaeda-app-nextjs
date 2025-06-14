import Advantages from "./components/advantages";
import CradsContent from "./components/cards";
import Footer from "./components/footer";
import GuideBlock from "./components/guide";
import Header from "./components/header";
import Main from "./components/main";
import Questions from "./components/questions";


export default function Home() {
  return (
     <div className="h-[476vh]">
        <Header />
        <Main />
        <CradsContent />
        <GuideBlock />
        <Advantages />
        <Questions />
        <Footer />
        {/* <Main />
        <CradsContent />
        <GuideBlock />
        <Advantages />
        <Questions />
        <Footer /> */}
     </div>
    
  );
}
