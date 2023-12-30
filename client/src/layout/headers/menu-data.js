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
    title: "Professor",
    link: "/instructor",
    has_dropdown: true,
    sub_menus: [
    ],
  },
  {
    id: 4,
    title: "Course",
    link: "/course-grid",
    has_dropdown: true,
    sub_menus: [
      { link: "/course-grid", title: "Course Grid" },
      { link: "/course-list", title: "Course List" },
      { link: "/course-details", title: "Course Details" },
    ],
  },

];
export default menu_data;
