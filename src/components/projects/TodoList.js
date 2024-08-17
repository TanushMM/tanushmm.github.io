import React from 'react'
import styles from './css.module.css';

const TodoList = () => {
    return (
        <div className={styles.component}>
            <h1>Flask + MongoDB Todo List Application - CONTAINERIZED USING DOCKER</h1>
            <p>
                The Flask + MongoDB Todo List Application is a simple, containerized web application for task management. Built using the Flask framework for the backend and MongoDB as the database, it enables users to add and delete tasks, with data persistence managed by Docker. The following section details the setup, features, and technologies used in this project.
            </p>

            <h2>Project Overview</h2>
            <ul>
                <li><strong>Application Description:</strong>
                    <ul>
                        <li>This web application allows users to add and delete tasks (todos).</li>
                        <li>The data is stored persistently using a MongoDB container with volumes in Docker.</li>
                        <li>The application consists of a simple HTML frontend, with data being dynamically rendered from MongoDB.</li>
                    </ul>
                </li>
            </ul>

            <h2>Features</h2>
            <ul>
                <li><strong>Add/Delete Tasks:</strong>
                    <ul>
                        <li>Users can submit tasks with a title and description.</li>
                        <li>Tasks are dynamically displayed on the page, and users can delete them by clicking the "Delete" button.</li>
                    </ul>
                </li>
                <li><strong>Persistent Data:</strong>
                    <ul>
                        <li>Tasks are stored in a MongoDB database, ensuring persistence even after the application is restarted.</li>
                    </ul>
                </li>
                <li><strong>Dockerized Setup:</strong>
                    <ul>
                        <li>Both Flask and MongoDB run in separate Docker containers, orchestrated by Docker Compose.</li>
                        <li>The use of Docker ensures that the application can be deployed and run consistently across different environments.</li>
                    </ul>
                </li>
            </ul>

            <h2>Technologies Used</h2>
            <ul>
                <li><strong>Flask:</strong> A lightweight web framework for Python used to build the backend API and manage requests.</li>
                <li><strong>MongoDB:</strong> A NoSQL database used to store tasks persistently.</li>
                <li><strong>Docker:</strong> A containerization platform that packages the application and database into portable containers.</li>
                <li><strong>Docker Compose:</strong> A tool to define and run multi-container Docker applications.</li>
                <li><strong>HTML/CSS:</strong> Used for building the frontend interface of the application.</li>
            </ul>

            <h2>Project Setup</h2>
            <ul>
                <li><strong>Cloning the Repository:</strong>
                    <ul>
                        <li>The project can be cloned using the following command:</li>
                        <pre><code>git clone https://github.com/TanushMM/Dockerized_ToDoList_Python.git</code></pre>
                        <li>After cloning, navigate to the project directory:</li>
                        <pre><code>cd Dockerized_ToDoList_Python</code></pre>
                    </ul>
                </li>
                <li><strong>Building and Running the Application:</strong>
                    <ul>
                        <li>The application is set up using Docker Compose, which orchestrates the Flask and MongoDB containers.</li>
                        <li>To build and run the application, use the following command:</li>
                        <pre><code>docker-compose up --build</code></pre>
                        <li>This command builds the Flask app, pulls the MongoDB image from Docker Hub, and starts both containers.</li>
                    </ul>
                </li>
                <li><strong>Accessing the Application:</strong>
                    <ul>
                        <li>Once the containers are running, the application can be accessed via a web browser at:</li>
                        <pre><code>http://localhost:5000</code></pre>
                    </ul>
                </li>
            </ul>

            <h2>File Structure</h2>
            <ul>
                <li><strong>Project Files:</strong>
                    <ul>
                        <li>The project contains the following files and folders:</li>
                        <pre><code>
                            . <br></br>
                            ├── static/ <br></br>
                            │   └── css/                # Stylesheets <br></br>
                            ├── templates/ <br></br>
                            │   └── index.html          # Frontend HTML for the application <br></br>
                            ├── application.py          # Main Flask application file <br></br>
                            ├── readme.md               # Documentation for the project <br></br>
                            ├── requirements.txt        # Python dependencies <br></br>
                            ├── Dockerfile              # Dockerfile to build the Flask app image <br></br>
                            ├── docker-compose.yaml     # Docker Compose to orchestrate Flask and MongoDB <br></br>
                            ├── .gitignore              # Files to ignore in Git <br></br>
                            └── .dockerignore           # Files to ignore in Docker build <br></br>
                        </code></pre>
                        <li>This structure ensures that the project is well-organized and Dockerized for easy deployment and maintenance.</li>
                    </ul>
                </li>
            </ul>

            <h2>Detailed Explanation</h2>
            <ul>
                <li><strong>Flask Backend:</strong>
                    <ul>
                        <li>The Flask application serves both static and dynamic content. It handles GET and POST requests for adding and deleting tasks.</li>
                    </ul>
                </li>
                <li><strong>MongoDB as the Database:</strong>
                    <ul>
                        <li>MongoDB stores the tasks in a collection. The Flask app interacts with the MongoDB container using PyMongo to insert and retrieve tasks.</li>
                    </ul>
                </li>
                <li><strong>Dockerized Environment:</strong>
                    <ul>
                        <li>The project uses Docker and Docker Compose to ensure consistent deployment environments. Both the Flask app and MongoDB are run as separate containers, and a Docker volume is used to persist MongoDB data.</li>
                    </ul>
                </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
                This project demonstrates how to build a simple web application using Flask and MongoDB, containerized using Docker. It provides hands-on experience with Docker Compose, MongoDB, and the Flask web framework while emphasizing the importance of building scalable and maintainable applications in a containerized environment.
            </p>
        </div>

    );
}

export default TodoList