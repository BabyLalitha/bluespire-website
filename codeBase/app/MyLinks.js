export const links = [
    {
      name: "Services",
      submenu: true,
      id:1,
      sublinks: [
        {
          Head: "Service",
          sublink: [
            { name: "Cloud Solution", link: "/cloud-solution", id:2 },
            { name: "Kafka Solution", link: "/kafka-solution", id:3 },
            { name: "Middleware Solution", link: "/middleware-solution", id:4 },
            { name: "Planning Analytics", link: "/planing-analytics", id:5 },
            { name: "Actionable Analytics", link: "/actionable-analytics",id:6 },
            { name: "Agile Enterprise", link: "/agile-enterprises", id:7 },
            { name: "Customer Experience", link: "/customer-experience", id:8},
          ],
        }
      ],
    },
    {
      name: "Career",
      submenu: false,
      link: "/career",
      id: 9,
      sublinks: [
        {
          Head: "Career",
          sublink: [
            { name: "Open Positions", link: "/", id: 10 },
            { name: "Life At BlueSpire", link: "/", id: 11 },
            { name: "Open Positions", link: "/", id: 12 },
            { name: "Life At BlueSpire", link: "/", id: 13 },
            { name: "Open Positions", link: "/", id: 14 },
            { name: "Life At BlueSpire", link: "/", id: 15 }
          ],
        },
        
      ],
    },
    {
      name: "About",
      submenu: false,
      link : "/about",
      id: 16
    },
  ];