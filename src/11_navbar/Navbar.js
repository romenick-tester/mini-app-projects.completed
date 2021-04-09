import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import NavHeader from "./components/NavHeader";
import SocialLinks from "./components/SocialLinks";
import { links, socials } from "./assets/data";

const Navbar = () => {

  return (
    <Wrapper>
      <div className="nav-center">
        <NavHeader />
        <Sidebar links={links} />
        <SocialLinks socials={socials} />
      </div>
    </Wrapper>
  )
}

//COMPONENT STYLES START
const Wrapper = styled.nav`
  background: var(--clr-white);
  box-shadow: var(--light-shadow);

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary-5);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }

  .nav-toggle:hover {
    color: var(--clr-primary-1);
    transform: rotate(90deg);
  }

  .logo {
    height: 40px;
  }

  .links a {
    color: var(--clr-grey-3);
    font-size: 1rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    display: block;
    padding: 0.5rem 1rem;
    transition: var(--transition);
  }

  .links a:hover {
    background: var(--clr-primary-8);
    color: var(--clr-primary-5);
    padding-left: 1.5rem;
  }

  .social-icons {
    display: none;
  }

  .links-container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
  }

  .show-container {
    height: 10rem;
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    .nav-header {
      padding: 0;
    }

    .nav-toggle {
      display: none;
    }

    .links-container {
      height: auto !important;
    }

    .links {
      display: flex;
    }

    .links a {
      padding: 0;
      margin: 0 0.5rem;
    }

    .links a:hover {
      padding: 0;
      background: transparent;
    }

    .social-icons {
      display: flex;
    }

    .social-icons a {
      margin: 0 0.5rem;
      color: var(--clr-primary-5);
      transition: var(--transition);
    }

    .social-icons a:hover {
      color: var(--clr-primary-7);
    }
  }
`
//COMPONENT STYLES END

export default Navbar;
