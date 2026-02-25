async function getData() {
  const url = "./project.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
    const projectContainer = document.getElementById("proj-list");
    result.forEach((project) => {
        let projectName = document.createElement("h3");
        projectName.textContent = project.name;
        projectContainer.appendChild(projectName);
    });
  } catch (error) {
    console.error(error.message);
  }
}

getData();