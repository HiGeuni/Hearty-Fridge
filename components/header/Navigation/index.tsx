import { NextComponentType } from "next";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/logo.png";
import { CustomLink, Navigation } from "./style";

const NavigationComponent: NextComponentType = () => {
  return (
    <Navigation>
      <Link href="/">
        <Image width={145} height={120} src={logo} alt="logo" />
      </Link>
      <CustomLink href="/intro">Intro</CustomLink>
      <CustomLink href="/map">Map</CustomLink>
    </Navigation>
  );
};

export default NavigationComponent;
