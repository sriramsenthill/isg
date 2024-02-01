const menu_data = [
  {
    id: 1,
    title: "Home",
    link: "/",
    has_dropdown: true,
    sub_menus: [],
  },
  {
    id: 2,
    title: "About",
    link: "/about",
    has_dropdown: true,
    sub_menus: [
      { link: "/about", title: "தமிழ்" },
      { link: "/aboutEN", title: "EN" },
    ],
  },
  {
    id: 3,
    title: "Professors",
    link: "/professors",
    has_dropdown: true,
    sub_menus: [],
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
  {
    id: 6,
    title: "Bible Research Centre",
    link: "/BibleResearchCentre",
    has_dropdown: true,
    sub_menus: [{ link: "/Library", title: "Library" }],
  },
  {
    id: 7,
    title: "ISG Diocese",
    link: "/isgDiocese",
    has_dropdown: true,
    sub_menus: [
      { link: "certificate/paster_fellowship", title: "paster_fellowship" },
      { link: "certificate/evangelist", title: "evangelist" },
      { link: "certificate/reverent", title: "reverent" },
      { link: "certificate/appostalic", title: "appostalic" },
      { link: "certificate/master_phd", title: "master_Phd" },
      { link: "certificate/mth_master_degree", title: "mth_master_degree" },
      { link: "certificate/bth_bachelor_degree", title: "bth_bachelor_degree" },
      { link: "certificate/diploma_in_theology", title: "diploma_in_theology" },
      {
        link: "certificate/certificate_achievement",
        title: "certificate_achievement",
      },
    ],
  },
  {
    id: 8,
    title: "Prayer",
    link: "/prayer",
    has_dropdown: true,
    sub_menus: [],
  },
  {
    id: 9,
    title: "Pastor Fellowship",
    link: "/pastorFellowship",
    has_dropdown: true,
    sub_menus: [],
  },
];
export default menu_data;
