import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import React from "react";
import { IoIosInfinite } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    {
      text: "Home",
      route: "/",
    },
    {
      text: "Try Out!",
      route: "tryout",
    },
  ];

  return (
    <Navbar
      className="justify-center p-4 bg-black"
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBlurred={true}
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <NavLink to={"/"}>
            <p className="text-[18px] flex items-center justify-center text-center font-[600] gap-x-2 max-md:text-[15px] max-md:hidden">
              Infiniti
              <IoIosInfinite color="#b9ff66" size={30} />
              Vault
            </p>
            <IoIosInfinite color="#b9ff66" className="hidden max-md:block" size={40} />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink 
          className={"text-[#b9ff66] tracking-normal font-medium"}
            to={"tryout"}
          >
            Try It Out!
          </NavLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="rounded-full px-6 border-[2px] border-[#b9ff66] bg-[#b9ff66]/[13%] text-[#b9ff66]"
            href="https://github.com/Infiniti-Vault"
            target="_blank"
            variant="flat"
          >
            <FaGithub className="text-[#b9ff66]" size={17} />
            Github
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black pb-7 items-center justify-center gap-y-5">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.route}-${index}`}>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-[#b9ff66] text-[2rem] font-black"
                  : "text-white/80 text-[2rem] font-black"
              }
              to={item.route}
            >
              {item.text}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
