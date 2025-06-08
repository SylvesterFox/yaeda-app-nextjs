import CradsContent from "./components/cards";
import GuideBlock from "./components/guide";
import Header from "./components/header";
import Main from "./components/main";


export default function Home() {
  return (
     <div className="h-[150vh]">
        <Header />
        <Main />
        <CradsContent />
        <GuideBlock />
     </div>
    
  );
}
