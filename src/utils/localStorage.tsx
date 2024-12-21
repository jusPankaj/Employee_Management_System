const Employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1 for Employee 1",
          "taskDescription": "Description of task 1 for Employee 1.",
          "taskDate": "2024-12-21",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 2 for Employee 1",
          "taskDescription": "Description of task 2 for Employee 1.",
          "taskDate": "2024-12-20",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3 for Employee 1",
          "taskDescription": "Description of task 3 for Employee 1.",
          "taskDate": "2024-12-19",
          "category": "Analysis"
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1 for Employee 2",
          "taskDescription": "Description of task 1 for Employee 2.",
          "taskDate": "2024-12-21",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 2 for Employee 2",
          "taskDescription": "Description of task 2 for Employee 2.",
          "taskDate": "2024-12-18",
          "category": "Research"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 1 for Employee 3",
          "taskDescription": "Description of task 1 for Employee 3.",
          "taskDate": "2024-12-22",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2 for Employee 3",
          "taskDescription": "Description of task 2 for Employee 3.",
          "taskDate": "2024-12-21",
          "category": "Implementation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 3 for Employee 3",
          "taskDescription": "Description of task 3 for Employee 3.",
          "taskDate": "2024-12-19",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": true,
          "failed": false,
          "taskTitle": "Task 1 for Employee 4",
          "taskDescription": "Description of task 1 for Employee 4.",
          "taskDate": "2024-12-23",
          "category": "Deployment"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 2 for Employee 4",
          "taskDescription": "Description of task 2 for Employee 4.",
          "taskDate": "2024-12-18",
          "category": "Maintenance"
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 1 for Employee 5",
          "taskDescription": "Description of task 1 for Employee 5.",
          "taskDate": "2024-12-20",
          "category": "Support"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Task 2 for Employee 5",
          "taskDescription": "Description of task 2 for Employee 5.",
          "taskDate": "2024-12-19",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Task 3 for Employee 5",
          "taskDescription": "Description of task 3 for Employee 5.",
          "taskDate": "2024-12-22",
          "category": "Analysis"
        }
      ]
    }
  ]
  
  const Admin = [
    {
      "id": 1000,
      "email": "admin@example.com",
      "password": "123",
    }
  ]
  

export const setLocalStorage = () => {
    localStorage.setItem("Employees", JSON.stringify(Employees));
    localStorage.setItem("Admin", JSON.stringify(Admin));
}


export const getLocalStorage = () => {
    const data = localStorage.getItem('Employees');

    console.log(data);
    
} 
