const users = [
  {
    id: "vivek.chowdhury",
    password: "vchowdhury",
    displayPicture: "",
    fname: "Vivek",
    lname: "Chowdhury",
    age: "36",
    gender: "male",
    phonenumber: "9717833999",
    emailId: "vivek.chowdhury@gmail.com",
    userType: "type001",
    role: "rol001",
    description: "I am super admin let me try this application",
    totalExperience: "14",
    languages: [
      {
        languageId: "lng001",
      },
    ],
    projects: [
      {
        projectId: "p001",
      },
    ],
  },
  {
    id: "tester.chowdhury",
    password: "tchowdhury",
    displayPicture: "",
    fname: "Tester",
    lname: "Chowdhury",
    age: "36",
    gender: "male",
    phonenumber: "10011001",
    emailId: "vivek.chowdhury@gmail.com",
    userType: "type005",
    role: "rol002",
    description: "I am super tester let me try this application",
    totalExperience: "10",
    languages: [
      {
        languageId: "lng001",
      },
    ],
    projects: [
      {
        projectId: "p001",
      },
    ],
  },
];

const permissions = [
  {
    id: "per001",
    permissionName: "All",
  },
  {
    id: "per002",
    permissionName: "Normal",
  },
  {
    id: "per003",
    permissionName: "Guest",
  },
];

const roles = [
  {
    id: "rol001",
    roleName: "Admin",
    permissionList: [
      {
        permissionId: "per001",
      },
    ],
  },
  {
    id: "rol002",
    roleName: "Normal",
    permissionList: [
      {
        permissionId: "per002",
      },
    ],
  },
  {
    id: "rol002",
    roleName: "Guest",
    permissionList: [
      {
        permissionId: "per003",
      },
    ],
  },
];

const userTypes = [
  {
    id: "type001",
    typeName: "Super",
  },
  {
    id: "type002",
    typeName: "Developer",
  },
  {
    id: "type002",
    typeName: "Manager",
  },
  {
    id: "type003",
    typeName: "HR",
  },
  {
    id: "type004",
    typeName: "Designer",
  },
  {
    id: "type005",
    typeName: "Qaulity",
  },
];

const feeds = [
  {
    id: "feed1",
    userid: "vivek.chowdhury",
    displayPicture: "",
    message: "this is my first feed",
    type: "text",
    likes: [
      {
        userid: "tester.chowdhury",
        displayPicture: "",
      },
    ],
    dislikes: [
      {
        userid: "tester.chowdhury",
        displayPicture: "",
      },
    ],
    comments: [
      {
        commentId: "comment001",
      },
    ],
  },
];

const comments = [
  {
    id: "comment001",
    userId: "tester.chowdhury",
    displayPicture: "",
    message: "This is first comment",
  },
];

const languages = [
  {
    id: "lng001",
    langName: "Javacript",
    image: "",
    description: "Front-end",
  },
  {
    id: "lng002",
    langName: "ActionScript",
    image: "",
    description: "Front-end",
  },
  {
    id: "lng003",
    langName: "Java",
    image: "",
    description: "Front-end",
  },
];

const projects = [
  {
    id: "p001",
    description: "Test project added",
    languages: [
      {
        languageId: "lng001",
        langName: "Javacript",
        image: "",
        description: "Front-end",
      },
    ],
    startDate: "2020-07-11T08:26:55.743Z",
    endDate: "2020-07-11T08:26:55.743Z",
  },
];

module.exports = {
  users,
  permissions,
  roles,
  userTypes,
  feeds,
  comments,
  languages,
  projects,
};
