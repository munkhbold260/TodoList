const showEmployees = () => {
  employees.map((element) => {
    const names = document.createElement("div");
    const position = document.createElement("div");
    const salary = document.createElement("div");
    const department = document.createElement("div");
    const performanceRating = document.createElement("div");

    names.innerText = "name:" + element.name;
    position.innerText = "position:" + element.position;
    salary.innerText = "salary:" + element.salary;
    department.innerText = "department:" + element.department;
    performanceRating.innerText =
      "performanceRating:" + element.performanceRating;

    root.appendChild(names);
    root.appendChild(position);
    root.appendChild(salary);
    root.appendChild(department);
    root.appendChild(performanceRating);
  });
};
showEmployees();
