const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: true,
    sub_menus: [
    ],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
    ],
  },
  {
    id: 3,
    title: "Professors",
    link: "/professors",
    has_dropdown: true,
    sub_menus: [
    ],
  },
  {
    id: 4,
    title: "Bible Course",
    link: "/bibleCourse",
    has_dropdown: true,
    sub_menus: [
      { link: "/bibleCourse", title: "Course" },
      { link: "/professorProfile", title: "Professor Profile" },
    ],
  },

];
export default menu_data;
