import React from 'react';
import styles from './css.module.css';
import technicalArchitecture from "../../assets/images/RideShare/InnovateX_Rideshare_High_Level_Syetem_Design.png";
import userFlow from "../../assets/images/RideShare/InnovateX_User_Flow.png";
import adminFlow from "../../assets/images/RideShare/InnovateX_Admin_Flow.png";

const RideShareApp = () => {
    return (
        <div class={styles.component}>
            <h1>Introduction to RideShare Application</h1>

            <p>The RideShare Application is an innovative and robust platform designed to facilitate efficient, cost-effective, and sustainable transportation through ride-sharing. Built with a focus on backend development using Python and Flask, it follows a modern microservices architecture. The platform ensures seamless interaction between the frontend and backend by using an API Gateway, ensuring data security and scalability. Furthermore, leveraging containerization with Docker, the system is fully deployable on AWS, making use of EC2 for hosting and S3 for static asset storage. This comprehensive guide delves into the various components, technologies, and design principles that form the backbone of this application, from the API Gateway to the technical architecture, deployment strategies, and leadership in orchestrating the development process.</p>

            <p style={{
                fontSize: '1.2em',
                color: '#007BFF',
                backgroundColor: '#f0f8ff',
                borderLeft: '4px solid #007BFF',
                padding: '10px',
                margin: '20px 0',
                fontWeight: 'bold'
            }}>
                The frontend of the application was expertly designed by <a href="https://github.com/Sirasudeen" target="_blank" rel="noopener noreferrer">Sirasudeen P</a>, whose work complements the robust backend to create a cohesive and user-friendly experience.
            </p>
            <p style={{
                fontSize: '1.2em',
                color: '#007BFF',
                backgroundColor: '#f0f8ff',
                borderLeft: '4px solid #007BFF',
                padding: '10px',
                margin: '20px 0',
                fontWeight: 'bold'
            }}>
                All the other design and development was done by Tanush M M [The ownder of this website].
            </p>


            <h2>Backend Development Using Python and Flask</h2>

            <p>The backend of the RideShare application was built using Python's Flask micro-framework. Flask was chosen because it is lightweight, flexible, and provides all the necessary features to create microservices efficiently. The core services include user management, ride matching, payment processing, and notifications. Each service was designed as a separate microservice, ensuring that they remain independent and modular. This setup not only allows easier management and scaling but also ensures that the services can be updated or modified without affecting the other components of the system.</p>

            <p>The Flask microservices in the RideShare application interact with the MongoDB database, where all user and ride-related data are stored. By using MongoDB, we benefit from its scalability and flexibility in handling semi-structured data. The backend services communicate via REST APIs, ensuring efficient communication between the frontend and backend, allowing real-time data exchange, including user registrations, ride requests, matches, and payment processes. Furthermore, we incorporated JWT (JSON Web Tokens) for secure authentication and session management, making sure all API requests are authenticated and secure.</p>

            <h2>Technical Architecture of the RideShare Application</h2>

            <p>The technical architecture of the RideShare application is based on the microservices architecture. Each service, such as the ride-matching engine, user service, notification service, and payment gateway, runs independently. This modular approach ensures that each component is decoupled from the others, which greatly enhances scalability and fault tolerance. For instance, if there is an issue with the payment service, the ride-matching or user services will continue to function without disruption.</p>

            <div className={styles.projectImages}>
                <div className={styles.imageContainer}>
                    <p className={styles.imageCaption}>Technical Architecture of the RideShare Application</p>
                    <img src={technicalArchitecture} alt="Technical Architecture" className={styles.projectImage} />
                </div>

                <div className={styles.imageContainer}>
                    <p className={styles.imageCaption}>User Flow Diagram for RideShare Application</p>
                    <img src={userFlow} alt="User Flow Diagram" className={styles.projectImage} />
                </div>

                <div className={styles.imageContainer}>
                    <p className={styles.imageCaption}>Admin Flow Diagram for RideShare Application</p>
                    <img src={adminFlow} alt="Admin Flow Diagram" className={styles.projectImage} />
                </div>
            </div>

            <p>At the core of the architecture is the API Gateway, which manages all incoming requests from the frontend and routes them to the appropriate backend service. The API Gateway also handles authentication and rate-limiting, ensuring that only authenticated users can access certain endpoints. By using the API Gateway, we centralize and streamline the communication between the frontend and backend services. This also provides the flexibility to implement additional services in the future without changing the core architecture.</p>

            <h3>Microservices and API Gateway Integration</h3>

            <p>Microservices and the API Gateway are integral to the design. Each microservice is designed to handle a specific business logic independently. The API Gateway is responsible for routing, transforming, and processing client requests, acting as a single point of entry for the application. By acting as an intermediary, it optimizes communication, aggregates responses, and enforces policies like authentication. This simplifies the overall system, allowing the frontend to remain thin while relying on the backend to handle complex logic.</p>

            <p>The API Gateway also handles inter-service communication. For example, when a user requests a ride, the API Gateway first checks the user’s authentication status, then routes the request to the ride-matching service. If a match is found, the Gateway then communicates with the notification service to notify both the rider and the driver, and subsequently, the payment service for processing payments. This orchestration ensures that the backend services remain stateless and focused on specific tasks while the API Gateway handles the request workflow.</p>

            <h2>Containerization Using Docker</h2>

            <p>The entire backend, including all microservices and the API Gateway, is containerized using Docker. Docker provides a standardized environment, ensuring that the application runs consistently across various environments (local development, staging, and production). Each microservice is encapsulated in its own Docker container, which allows for isolated execution. This isolation ensures that any changes or updates to one microservice do not affect the others.</p>

            <p>Docker Compose is used to define and manage multi-container applications, making it easy to manage the entire system locally as well as in production environments. Each service has its own Dockerfile, which defines its dependencies and environment, ensuring that the service runs as expected. By containerizing the entire backend, we have eliminated the "works on my machine" problem, making the deployment process smoother and more reliable.</p>

            <h2>Deployment on AWS (EC2, S3)</h2>

            <p>The RideShare application is deployed on AWS, utilizing EC2 instances for hosting the backend services and S3 for storing static assets. AWS EC2 provides scalable compute capacity, allowing us to adjust the resources based on the traffic. Using EC2, we deployed the backend services with high availability, ensuring that the application can handle fluctuating traffic loads without downtime.</p>

            <p>AWS S3 is used to store all static files such as images, CSS, and JavaScript files. Storing these assets on S3 ensures that they are served quickly and reliably, improving the performance and responsiveness of the application. By leveraging AWS’s global CDN (CloudFront), we are able to deliver these assets from the nearest server to the user, further enhancing the user experience.</p>

            <h2>Backend-Frontend Integration</h2>

            <p>The integration between the backend and frontend is achieved using RESTful APIs. The frontend, built using React, interacts with the backend through API calls, ensuring that all the required data, such as user information, ride details, and notifications, are fetched in real-time. This real-time data exchange is crucial for ensuring that the user experience is seamless and responsive. Users can see their ride status, match results, and notifications without needing to refresh the page.</p>

            <p>We implemented secure communication between the frontend and backend using JWT for authentication. Once a user logs in, they receive a JWT token, which is then sent with every subsequent API request to ensure that the request is authenticated. This token-based authentication provides a more secure and scalable way of managing user sessions compared to traditional session-based authentication.</p>

            <h2>Leadership and Project Management</h2>

            <p>As the lead developer and system architect for this project, my role was to oversee the entire development process, from conceptualization to deployment. This involved defining the architecture, designing the database schema, implementing the backend services, and setting up the deployment pipeline. I also worked closely with the frontend team to ensure seamless integration between the frontend and backend, ensuring that all features were delivered on time.</p>

            <p>Managing the team also involved ensuring that everyone was aligned with the project goals, setting milestones, and regularly reviewing the progress of the project. We followed an agile methodology, with regular sprint meetings to ensure that the project was progressing as expected. This allowed us to quickly identify and resolve any issues, ensuring that the project stayed on track and was delivered on time.</p>

            <h2>Conclusion</h2>

            <p>The RideShare application is a comprehensive platform that combines modern technologies and development practices to deliver a scalable, reliable, and user-friendly ride-sharing solution. By leveraging Flask for the backend, Docker for containerization, AWS for deployment, and a microservices architecture, we have built an application that is not only modular and scalable but also easy to maintain and extend. The API Gateway provides a centralized point for managing communication between the frontend and backend, ensuring that the system remains secure and responsive.</p>

            <p>This project showcases the integration of various technologies and best practices, providing a complete solution for managing ride-sharing services. By focusing on modularity, security, and scalability, the RideShare application is positioned to provide value not only to end-users but also to the company, with its robust design and modern architecture.</p>
        </div>
    );
}

export default RideShareApp;
