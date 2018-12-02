const initState = {
  projects: [
    { id: "1", title: "Hill Track", content: "Travel to hill track area" },
    { id: "2", title: "Deep Ocean", content: "Dive into the deep ocean" },
    { id: "3", title: "Snow Ball", content: "Make some snow balls" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("project created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Project created error", action.err);
      break;
    default:
      return state;
  }
  return state;
};

export default projectReducer;
