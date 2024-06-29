
import { IoHome } from "react-icons/io5";
import { GrWorkshop } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";

export const NavbarLinks = [
  {
    title: "Home",
    path: "/",
    icon:<IoHome />
  },
  {
    title: "Catalog",
    icon:<SiCoursera />
    
  },
  {
    title: "Workshops",
    path: "/Workshop",
    icon:<GrWorkshop />
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon:<FaPhoneAlt />
  },
];
