const employees = [
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
          "taskTitle": "Update website",
          "taskDescription": "Revamp the homepage design",
          "taskDate": "2024-10-12",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client meeting",
          "taskDescription": "Discuss project requirements",
          "taskDate": "2024-10-10",
          "category": "Meeting"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Code review",
          "taskDescription": "Review code for Module 4",
          "taskDate": "2024-10-08",
          "category": "Development"
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
          "taskTitle": "Bug Fixing",
          "taskDescription": "Resolve critical bugs in backend",
          "taskDate": "2024-10-11",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Deployment",
          "taskDescription": "Deploy the beta version of app",
          "taskDate": "2024-10-09",
          "category": "Deployment"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write documentation",
          "taskDescription": "Create user guides and API docs",
          "taskDate": "2024-10-15",
          "category": "Documentation"
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design new feature",
          "taskDescription": "Create mockups for feature XYZ",
          "taskDate": "2024-10-07",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Testing module",
          "taskDescription": "Perform unit testing for new modules",
          "taskDate": "2024-10-06",
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
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Fix login issue",
          "taskDescription": "Resolve user authentication error",
          "taskDate": "2024-10-04",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": true,
          "taskTitle": "Prepare slides",
          "taskDescription": "Create presentation for project demo",
          "taskDate": "2024-10-13",
          "category": "Meeting"
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
          "taskTitle": "Integrate API",
          "taskDescription": "Connect payment gateway API",
          "taskDate": "2024-10-05",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Design report",
          "taskDescription": "Create financial analysis report design",
          "taskDate": "2024-10-02",
          "category": "Design"
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }
  export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
  }

  


  
