import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import LogoFoot from "./../../components/client/assets/logo-namp-bl.png";

export function FooterClient() {
  return (
    <Footer container className="shadow-xl mb-2">
    <div className="w-full text-center">
      <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center">
          <Footer.Brand
            href="/home"
            src={LogoFoot}
            alt="NAMP logo"
            name=""
          />
          <h1 className="poppins-bold text-2xl text-blue-950">NAMP</h1>
        </div>
        
        <Footer.LinkGroup>
          <Footer.Link href="#">About</Footer.Link>
          <Footer.Link href="#">Privacy Policy</Footer.Link>
          <Footer.Link href="#">Licensing</Footer.Link>
          <Footer.Link href="#">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <Footer.Copyright href="#" by="NAMP™" year={2024} />
    </div>
  </Footer>
  );
}
