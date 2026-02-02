import { Module } from "../../types";

export const masterCurriculum: Module[] = [
  {
    id: "module-1",
    title: "Programming Foundations",
    subjectId: "fundamentals",
    courses: [
      {
        id: "python-mastery",
        title: "Pythonic Thinking",
        description: "Master the art of writing clean, efficient, and readable Python code.",
        lessons: [
          {
            id: "py-intro-deep",
            title: "Variables and Memory",
            type: "theory",
            content: "In Python, everything is an object. When you create a variable like `x = 5`, you aren't creating a box named 'x' and putting '5' in it. Instead, you are creating an integer object with the value '5' and making the name 'x' point to it.\n\nThis distinction is crucial for understanding how Python handles mutable vs immutable objects. Immutable objects (like integers, strings, and tuples) cannot be changed once created. Mutable objects (like lists and dictionaries) can be modified in place. Understanding references is the first step toward avoiding common bugs in large-scale systems.",
            codeSnippet: "x = [1, 2, 3]\ny = x\ny.append(4)\nprint(x) # Output: [1, 2, 3, 4] - Why?"
          },
          {
            id: "py-logic-gate",
            title: "Boolean Logic & Control",
            type: "quiz",
            content: "Control flow is the heart of any algorithm. It allows the computer to make decisions based on data. Python's `if`, `elif`, and `else` statements are designed for maximum readability.\n\nBoolean logic follows strict rules: \n1. `and`: Both must be True.\n2. `or`: At least one must be True.\n3. `not`: Flips the truth value.\n\nIn high-performance systems, 'short-circuit evaluation' is used. For example, in `A and B`, if `A` is False, `B` is never even checked. This saves CPU cycles.",
            quizOptions: [{
              question: "If x = True and y = False, what is 'not (x and y)'?",
              options: ["True", "False", "Error", "None"],
              correctIndex: 0,
              explanation: "(True and False) is False. The 'not' operator flips it to True."
            }]
          },
          {
            id: "py-functions-deep",
            title: "Functional Decomposition",
            type: "coding",
            content: "A good function does one thing and does it well. Functions allow us to abstract complexity away. In Python, functions are 'first-class objects', meaning they can be passed as arguments, returned from other functions, and assigned to variables.\n\nScope is another vital concept. Variables defined inside a function are local to that function. If you want to modify a variable from the outer scope, you must understand the 'LEGB' rule: Local, Enclosing, Global, and Built-in.",
            codeSnippet: "def calculate_bmi(weight, height):\n    # Write the formula: weight / (height * height)\n    pass",
            language: "python",
            solution: "return weight / (height * height)"
          }
        ]
      }
    ]
  },
  {
    id: "module-9",
    title: "Cybersecurity & Cryptography",
    subjectId: "cybersecurity",
    courses: [
      {
        id: "crypto-foundations",
        title: "The Art of Secrecy",
        description: "From Caesar ciphers to modern Public Key Infrastructure.",
        lessons: [
          {
            id: "symmetric-deep",
            title: "Symmetric Encryption",
            type: "theory",
            content: "Symmetric encryption uses the same key for both encryption and decryption. It is fast and efficient for large amounts of data. However, the 'Key Exchange' problem is its fatal flaw: how do you get the key to the recipient without an eavesdropper stealing it?\n\nModern algorithms like **AES (Advanced Encryption Standard)** are used everywhere from Wi-Fi to disk encryption.",
          },
          {
            id: "asymmetric-deep",
            title: "The RSA Revolution",
            type: "quiz",
            content: "Asymmetric encryption (Public Key Crypto) solves the key exchange problem by using a pair of keys: a **Public Key** that anyone can see, and a **Private Key** that only the owner knows.\n\nIf Bob wants to send a secret to Alice, he encrypts it with Alice's Public Key. Only Alice's Private Key can decrypt it. This math is based on the difficulty of factoring extremely large prime numbers.",
            quizOptions: [{
              question: "If you want to digitally 'sign' a document to prove it came from you, which key do you use?",
              options: ["Your Public Key", "Your Private Key", "Recipient's Public Key", "Recipient's Private Key"],
              correctIndex: 1,
              explanation: "You sign with your Private Key. Anyone with your Public Key can then verify that only you could have created that signature."
            }]
          }
        ]
      }
    ]
  },
  {
    id: "module-10",
    title: "Data Science & Analytics",
    subjectId: "data_science",
    courses: [
      {
        id: "data-engineering",
        title: "Processing the Noise",
        description: "Cleaning and transforming raw data into insights.",
        lessons: [
          {
            id: "pandas-deep",
            title: "Data Wrangling with Pandas",
            type: "coding",
            content: "Raw data is usually messy, incomplete, and noisy. In Python, the **Pandas** library is the industry standard for cleaning data. \n\nKey operations:\n- Handling missing values (NaN).\n- Vectorized operations (no more for-loops!).\n- Grouping and Aggregation.",
            codeSnippet: "import pandas as pd\ndf = pd.read_csv('data.csv')\n# Filter rows where 'age' > 25\nfiltered_df = --- your code here ---",
            language: "python",
            solution: "df[df['age'] > 25]"
          },
          {
             id: "visual-intuition",
             title: "The Power of Plots",
             type: "visualization",
             content: "A picture is worth a thousand rows. Visualizing data using histograms, scatter plots, and box plots helps us identify **Outliers** and **Distributions** that simple statistics like 'mean' might hide.",
             visualizationId: "eda-plot-viz"
          }
        ]
      }
    ]
  },
  {
    id: "module-2",
    title: "Data Structures & Algorithms",
    subjectId: "dsa",
    courses: [
      {
        id: "asymptotic-mastery",
        title: "Asymptotic Analysis",
        description: "Learn to predict the performance of code at scale.",
        lessons: [
          {
            id: "big-o-advanced",
            title: "Big O & Scaling",
            type: "theory",
            content: "Big O notation is the language we use to describe how the time or space requirements of an algorithm grow as the input size (n) increases. It isn't about measuring seconds, but about measuring growth.\n\nCommon complexities:\n- O(1): Constant time (e.g., array access).\n- O(log n): Logarithmic (e.g., binary search).\n- O(n): Linear (e.g., finding an item in a list).\n- O(n log n): Efficient sorting (e.g., Merge Sort).\n- O(n²): Quadratic (e.g., nested loops).\n\nWhen designing systems for millions of users, choosing an O(n log n) algorithm over an O(n²) algorithm is the difference between a responsive app and a crashing server.",
          },
          {
            id: "binary-search-theory",
            title: "Divide & Conquer",
            type: "coding",
            content: "Binary search is the quintessential O(log n) algorithm. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half.\n\nRequirement: The input array MUST be sorted. Why?",
            codeSnippet: "def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        # Add logic to move left or right\n    return -1",
            language: "python",
            solution: "if arr[mid] < target: left = mid + 1\n        else: right = mid - 1"
          }
        ]
      },
      {
        id: "linked-lists-deep",
        title: "Dynamic Structures",
        description: "Beyond the contiguous memory of arrays.",
        lessons: [
          {
            id: "list-node-theory",
            title: "The Linked List Architecture",
            type: "visualization",
            content: "Unlike arrays, linked list elements are not stored in a continuous block of memory. Each element (node) contains two things: the data and a pointer to the next node. This makes insertions and deletions O(1) if you already have a pointer to the node, whereas in an array, these operations would be O(n) because elements must be shifted.",
            visualizationId: "linked-list-viz"
          }
        ]
      }
    ]
  },
  {
    id: "module-3",
    title: "Operating System Internals",
    subjectId: "os",
    courses: [
      {
        id: "concurrency-mastery",
        title: "Concurrency & Parallelism",
        description: "How modern CPUs handle thousands of tasks simultaneously.",
        lessons: [
          {
            id: "threads-vs-procs-deep",
            title: "The Execution Units",
            type: "theory",
            content: "A **Process** is a heavy execution unit that has its own memory space. If one process crashes, it doesn't affect others. A **Thread** is a lightweight unit within a process that shares memory with other threads of the same process.\n\nSharing memory makes threads faster for communication but introduces **Race Conditions**. This is why we use synchronization primitives like Mutexes, Semaphores, and Spinlocks to protect shared resources.",
          },
          {
            id: "cpu-scheduling-deep",
            title: "The OS Scheduler",
            type: "visualization",
            content: "The OS Scheduler is the traffic cop of the CPU. It decides which process gets the CPU and for how long. Algorithms like **Round Robin**, **First-Come-First-Served (FCFS)**, and **Shortest Job First (SJF)** aim to maximize throughput and minimize latency.\n\nContext switching is the process of saving the state of a process so it can be resumed later. This overhead is what prevents us from having millions of threads on a single core.",
            visualizationId: "cpu-scheduler"
          }
        ]
      }
    ]
  },
  {
    id: "module-4",
    title: "Modern AI & Machine Learning",
    subjectId: "ml_ai",
    courses: [
      {
        id: "neural-nets-deep",
        title: "Neural Architecture",
        description: "Build the intuition for how machines 'learn'.",
        lessons: [
          {
            id: "gradient-descent-deep",
            title: "The Optimization engine",
            type: "theory",
            content: "Machine learning is essentially an optimization problem. We have a 'Loss Function' that measures how wrong our model is. **Gradient Descent** is the process of taking small steps down the slope of that loss function until we reach the minimum error.\n\nThe 'Learning Rate' determines how big these steps are. Too large, and we might overshoot the minimum. Too small, and the model will take forever to learn.",
          },
          {
            id: "perceptron-viz-deep",
            title: "The Single Neuron",
            type: "visualization",
            content: "The Perceptron is the building block of all deep learning. It takes multiple inputs, multiplies them by 'weights', adds a 'bias', and passes the result through an activation function like ReLU or Sigmoid. This mimics how a biological neuron fires when it receives enough signal.",
            visualizationId: "perceptron-viz"
          }
        ]
      }
    ]
  },
  {
    id: "module-5",
    title: "Web & Distributed Systems",
    subjectId: "web_dev",
    courses: [
      {
        id: "distributed-mastery",
        title: "Scaling to Millions",
        description: "Architectural patterns for high-availability systems.",
        lessons: [
          {
            id: "load-balancing-deep",
            title: "Load Balancers & Proxying",
            type: "theory",
            content: "A load balancer sits in front of your servers and distributes incoming traffic across them. This ensures no single server becomes a bottleneck. \n\nKey strategies:\n- **Round Robin**: Sequential distribution.\n- **Least Connections**: Send to the server with the least work.\n- **IP Hash**: Ensure a user always hits the same server (Sticky Sessions).",
          },
          {
            id: "cap-theorem",
            title: "The CAP Theorem",
            type: "quiz",
            content: "In distributed systems, you can only pick TWO out of THREE:\n1. **Consistency**: Every read receives the most recent write.\n2. **Availability**: Every request receives a response (even if it's old data).\n3. **Partition Tolerance**: The system continues to work despite network failures.\n\nIn the real world, network failures ARE going to happen, so you are almost always choosing between Consistency and Availability.",
            quizOptions: [{
              question: "A system that prioritizes Consistency and Partition Tolerance (CP) will do what during a network split?",
              options: ["Return old data", "Refuse to respond to ensure accuracy", "Keep working as normal", "Crash"],
              correctIndex: 1,
              explanation: "If it can't guarantee the data is the absolute latest across all nodes, a CP system will block the request."
            }]
          }
        ]
      }
    ]
  },
  {
    id: "module-6",
    title: "Database Engineering",
    subjectId: "databases",
    courses: [
      {
        id: "sql-deep",
        title: "Relational Mastery",
        description: "Beyond simple SELECT statements.",
        lessons: [
          {
            id: "normalization-theory",
            title: "Database Normalization",
            type: "theory",
            content: "Normalization is the process of organizing data to minimize redundancy. \n\n- **1NF**: Atomic values.\n- **2NF**: Remove partial dependencies (every non-key column must depend on the WHOLE primary key).\n- **3NF**: Remove transitive dependencies (non-key columns shouldn't depend on other non-key columns).\n\nA well-normalized database prevents 'update anomalies' where changing one piece of information requires updating dozens of rows.",
          },
          {
            id: "sql-join-challenge",
            title: "The Power of Joins",
            type: "coding",
            content: "Joins are how we reconstruct our normalized data. An INNER JOIN only returns rows where there is a match in both tables. A LEFT JOIN returns all rows from the left table, and the matched rows from the right table. If there is no match, the result is NULL on the right side.",
            codeSnippet: "SELECT orders.id, customers.name \nFROM orders \n--- type your join here --- customers \nON orders.customer_id = customers.id",
            language: "sql",
            solution: "JOIN"
          }
        ]
      }
    ]
  },
  {
    id: "module-7",
    title: "Software Engineering Principles",
    subjectId: "se_principles",
    courses: [
      {
        id: "solid-principles",
        title: "SOLID Architecture",
        description: "Five principles for writing maintainable software.",
        lessons: [
          {
            id: "srp-theory",
            title: "Single Responsibility (SRP)",
            type: "theory",
            content: "A class should have one, and only one, reason to change. If your `User` class is handling both database persistence and email notifications, it is violating SRP. This makes the code harder to test and more fragile when you need to change how emails are sent.",
          },
          {
            id: "dry-kiss",
            title: "DRY and KISS",
            type: "quiz",
            content: "**DRY (Don't Repeat Yourself)**: Every piece of knowledge must have a single, unambiguous representation within a system.\n\n**KISS (Keep It Simple, Stupid)**: Most systems work best if they are kept simple rather than made complicated. Simplicity should be a key goal in design and unnecessary complexity should be avoided.",
            quizOptions: [{
              question: "What is the primary danger of violating DRY?",
              options: ["Slow performance", "Higher memory usage", "Update inconsistencies", "Syntax errors"],
              correctIndex: 2,
              explanation: "If logic is duplicated, forgetting to update it in one place leads to bugs where the system behaves inconsistently."
            }]
          }
        ]
      }
    ]
  },
  {
    id: "module-8",
    title: "DevOps & Cloud Computing",
    subjectId: "devops",
    courses: [
      {
        id: "containerization-deep",
        title: "Docker & Kubernetes",
        description: "Infrastructure as Code and Orchestration.",
        lessons: [
          {
            id: "docker-theory",
            title: "Why Containers?",
            type: "theory",
            content: "Docker solves the 'it works on my machine' problem. A container packages the application code along with its dependencies, libraries, and configuration files into a single image that can run anywhere.\n\nUnlike Virtual Machines, containers share the host's OS kernel, making them much more lightweight and faster to start.",
          },
          {
             id: "cicd-viz-deep",
             title: "The CI/CD Pipeline",
             type: "visualization",
             content: "Continuous Integration (CI) and Continuous Deployment (CD) automate the process of moving code from a developer's machine to production. A pipeline typically includes building, testing, and deploying steps. This allows teams to release updates multiple times per day with high confidence.",
             visualizationId: "cicd-viz"
          }
        ]
      }
    ]
  }
];
