let database = [
    {
        name:"Frans",
        age: 29,
        email: "frans@nackademin.se",
        phone: "070-453 82 53"
    },
    {
        name:"Hans",
        age: 44,
        email: "frans@nackademin.se",
        phone: "070-453 82 53"
    },
    {
        name:"Olivia",
        age: 33,
        email: "frans@nackademin.se",
        phone: "070-453 82 53"
    }
]


let btn = document.querySelector("#get-employees");

btn.addEventListener("click", () => {
    let list = document.querySelector("#employee-list");

    database.forEach(employee => {
        let li = document.createElement("li");
        li.innerText = employee.name + "- " + employee.age + " år";
        list.append(li);
    })
})