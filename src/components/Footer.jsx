import "../constants/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div
      id="Tell"
      className=" text-2xl w-[95%] mx-auto font-Playpen bg-gray-500/20 p-8 my-0 rounded-2xl "
    >
      <div className="text-center p-1 m-1 text-black/70">
        <h1 className="mb-4 text-2xl font-bold">Tell Us</h1>
        <ul className="text-black/70 flex gap-4 justify-center">
          <a href="/#About">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
          <a href="/#About">
            <FontAwesomeIcon icon="fa-brands fa-github" />
          </a>
          <a href="/#Cateegory">
            <FontAwesomeIcon icon="fa-solid fa-envelope" />
          </a>
        </ul>
        <div className="text-[10px]">
          <p>Copyright &copy; {new Date().getFullYear()} AOM team .</p>
          <p>Released under GPLv3 Licene.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
