import React, { useState,useRef } from 'react';
import { NavLink, NavLinksWrapper, NavLinkWrapper, SubMenu,Arrow } from '../Styles';
import useOnClickOutside from "../../../hooks/useOnClickOutside";

 export const Desktop = () => {
    const [dropImNew, setImNew] = useState(false);
    const [dropMinistries, setMinistries] = useState(false);
    const [dropResources, setResources] = useState(false);
    const openImNew = () => setImNew(!dropImNew);
    const openMinistries = () => setMinistries(!dropMinistries);
    const openResources = () => setResources(!dropResources);

    const closeImNew = useRef(null);
    const closeMinistries = useRef(null);
    const closeResources = useRef(null);

    useOnClickOutside(closeImNew, () => setImNew(false));
    useOnClickOutside(closeMinistries, () => setMinistries(false));
    useOnClickOutside(closeResources, () => setResources(false));

  return(
    <NavLinksWrapper Desktop>
      <NavLinkWrapper onClick={openImNew} dropImNew={dropImNew} ref={closeImNew}>
      <NavLink barlink to="#">
        I'm New
      <div>
        <Arrow/>
      </div>
      </NavLink>
      <SubMenu DesktopDrop dropImNew={dropImNew} className="im_new">
        <NavLinksWrapper DesktopSubLinks>
          <NavLinkWrapper SubLinkWrapper>
            <NavLink sublink to="/im-new/about-us">About Us</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper SubLinkWrapper>
          <NavLink sublink to="/im-new/inclusivity-message">Inclusivity Message</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper SubLinkWrapper>
          <NavLink sublink to="/im-new/our-beliefs">Our Beliefs</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper SubLinkWrapper>
          <NavLink sublink to="/im-new/preschool">Preschool</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper SubLinkWrapper>
          <NavLink sublink to="/im-new/staff">Staff</NavLink>
          </NavLinkWrapper>
          <NavLinkWrapper SubLinkWrapper>
          <NavLink sublink to="/im-new/worship-service">Worship Service</NavLink>
          </NavLinkWrapper>
        </NavLinksWrapper>
      </SubMenu>
      </NavLinkWrapper>
      <NavLinkWrapper onClick={openMinistries} dropMenu={dropMinistries} >
        <NavLink barlink to="#">
          Ministries
          <div>
            <Arrow/>
          </div>
        </NavLink>
        <SubMenu DesktopDrop dropMinistries={dropMinistries} className="ministries" ref={closeMinistries}>
          <NavLinksWrapper DesktopSubLinks>
            <NavLinkWrapper><NavLink sublink to="/ministries/music-liturgical-arts">Music & Lit Arts</NavLink></NavLinkWrapper>
            <NavLinkWrapper><NavLink sublink to="/ministries/mission-outreach">Missions</NavLink></NavLinkWrapper>
          </NavLinksWrapper>
        </SubMenu>
      </NavLinkWrapper>
      <NavLinkWrapper onClick={openResources} dropResources={dropResources} ref={closeResources}>
      <NavLink barlink to="#">
      Resources
      <div>
        <Arrow/>
      </div>
      </NavLink>
      <SubMenu DesktopDrop dropResources={dropResources} className="resources">
          <NavLinksWrapper DesktopSubLinks>
            <NavLinkWrapper><NavLink sublink to="/resources/covid-info">Covid-19</NavLink></NavLinkWrapper>
          </NavLinksWrapper>
        </SubMenu>
      </NavLinkWrapper>
      <NavLinkWrapper><NavLink barlink to="/give">Give</NavLink></NavLinkWrapper>
    </NavLinksWrapper>
  )
}
