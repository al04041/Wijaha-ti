import "../App.css";
import About from "../components/About";
import Section from "../components/Section";
import Card from "../components/Card";
import "../constants/fontawesome";
import { CATEGORIES_DATA } from "../constants/category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <>
      <Section
        title="مرحباً"
        para="عزيزتي من تسعى لستر نفسها يسرنا و يشرفنا انك يا فتاة الايمان سعيك هذا و نعدك انه بإذن الله عز وجل سنسعى لتوفير كافة المعلومات و الاماكن التي تحتاجينها في مسيرتك"
      />

      <Section id="Category" title="Category">
        {CATEGORIES_DATA.map((item) => (
          <Card key={item.id} para={item.label}>
            <FontAwesomeIcon icon={item.iconName} size="2x" />
          </Card>
        ))}
      </Section>

      <About />
    </>
  );
}
export default Home;
