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
    link: "/certificate/paster_fellowship",
    has_dropdown: true,
    sub_menus: [
      { link: "/certificate/paster_fellowship", title: "Pastor Fellowship" },
      { link: "/certificate/evangelist", title: "Evangelist" },
      { link: "/certificate/reverent", title: "Reverend" },
      { link: "/certificate/appostalic", title: "Apostolic" },
      { link: "/certificate/master_phd", title: "Master Phd" },
      { link: "/certificate/mth_master_degree", title: "Mth Master Degree" },
      { link: "/certificate/bth_bachelor_degree", title: "Bth Bachelor degree" },
      { link: "/certificate/diploma_in_theology", title: "Diploma in Theology" },
      {
        link: "/certificate/certificate_achievement",
        title: "Certificate Achievement",
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
