import "../App.css";
import About from "../components/About";
import Section from "../components/Section";
import "../constants/fontawesome";
import CategorySection from "./CategorySection";


function Home() {
  return (
    <>
      <Section
        title="مرحباً"
        para="اهلا يا من تسعى لستر نفسها وحفظها يسرنا يشرفنا سعيك هذا يا فتاة الايمان و بحثك هذا عن المكان المناسب فنعدك انه بإذن الله سنسعى لتوفير كافة المعلومات و الاماكن التي تحتاجينها في مسيرتك"
      />
   <CategorySection/>
      <About />
    </>
  );
}
export default Home;
