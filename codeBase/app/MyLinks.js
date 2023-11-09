export const links = [
    {
      name: "Services",
      submenu: true,
      id:1,
      sublinks: [
        {
          Head: "Service",
          sublink: [

            { name: "Cloud Solution", link: "services/cloud" },
            { name: "Kafka Solution", link: "services/kafka" },
            { name: "Middleware Solution", link: "services/middleware" },
            { name: "Planning Analytics", link: "services/planing-analytics" },
            { name: "Actionable Analytics", link: "services/actionable-analytics" },
            { name: "Agile Enterprise", link: "services/agile-enterprises" },
            { name: "Customer Experience", link: "services/customer-experience" },

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