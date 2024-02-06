import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item) => (
          <li key={item.id} className={item.sub_menus.length > 0 ? "has-dropdown" : ""}>
            {item.icon && (
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                style={{ width: '38px', height: '38px', marginRight: '5px' }}
              />
            )}
            <Link href={item.link}>{item.title}</Link>
            {item.sub_menus.length > 0 && (
              <ul className="submenu">
                {item.sub_menus.map((sub, i) => (
                  <li key={i}>
                    <Link href={sub.link}>{sub.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;

