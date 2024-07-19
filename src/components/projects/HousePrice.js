import React from 'react'
import styles from './css.module.css';

const HousePrice = () => {
  return (
    <div class={styles.component}>
      <h1>Introduction to Housing Price Prediction Project</h1>

      <p>In the dynamic world of data science, developing a robust and scalable predictive model is both an art and a science. It requires meticulous planning, in-depth knowledge, and the seamless integration of various components. Today, I am thrilled to share my latest project, which embodies these principles through a comprehensive data science pipeline and a user-friendly Flask application designed for housing price prediction. This project is deployed on AWS using Elastic Beanstalk and CodePipeline, ensuring that it is not only scalable and reliable but also easily accessible and maintainable. In this article, I will guide you through the various components of this project, the deployment process, and provide information on how you can access and contribute to the codebase.</p>

      <h2>Important Links:</h2>
      <ul>
        <li><a href="http://tanushhousepriceprediction.ap-south-1.elasticbeanstalk.com/" class="highlight">Project Link [Deployed]</a></li>
        <li><a href="http://tanushmm.github.io/tanush-portfolio/" class="highlight">Portfolio Website</a></li>
        <li><a href="https://github.com/TanushMM" class="highlight">GitHub Repository</a></li>
        <li><a href="https://www.linkedin.com/in/tanush-mm/" class="highlight">LinkedIn Profile</a></li>
      </ul>

      <h2>Project Overview</h2>
      <p>This project is divided into two main parts, each playing a critical role in achieving the overall goal of accurate housing price predictions:</p>
      <ol>
        <li>
          <h3>Data Science Pipeline</h3>
          <p>This pipeline is the backbone of the project, consisting of several key components that handle data ingestion, transformation, model training, and prediction. Each stage is designed to ensure that the data is processed efficiently and the model is trained effectively to provide accurate predictions.</p>
        </li>
        <li>
          <h3>Flask Application</h3>
          <p>Serving as the front-end interface, the Flask application allows users to input various features of a house and receive real-time predictions on housing prices. This web application is designed to be intuitive and user-friendly, making it accessible to users with varying levels of technical expertise.</p>
        </li>
      </ol>

      <h2>Dataset Used</h2>
      <p>For this project, I used the Housing Prices dataset from Kaggle. This dataset contains various features related to housing properties, which are crucial for building a reliable predictive model.</p>

      <h2>Data Science Pipeline</h2>
      <p>At the heart of this project lies the data science pipeline, a meticulously crafted sequence of stages designed to handle data from ingestion to prediction with precision and reliability.</p>

      <h3>Data Ingestion</h3>
      <p>This component is responsible for reading and processing raw data. It ensures that the data is clean, structured, and ready for transformation. The data ingestion module reads the raw data from its source, processes it to remove any inconsistencies, and saves it in a format that is suitable for further analysis.</p>

      <h3>Data Transformation</h3>
      <p>In this stage, the data is prepared for modeling. It involves handling missing values, encoding categorical features, and scaling numerical features. These steps are crucial for ensuring that the data is in the best possible shape for the model to learn from. The transformation process ensures that the data is standardized and ready for model training.</p>

      <h3>Model Training</h3>
      <p>This component involves training various regression models and evaluating their performance. Models are assessed based on metrics such as R-squared and Mean Squared Error (MSE) to determine the best-performing model. The training process involves splitting the data into training and testing sets, fitting the models on the training data, and evaluating their performance on the testing data.</p>

      <h2>Conclusion</h2>
      <p>This project showcases the application of a comprehensive data science pipeline for housing price prediction. By leveraging a structured approach to data processing, model training, and real-time predictions, it aims to provide accurate and valuable insights. The integration of the Flask application enhances user interaction, making the predictive model accessible and practical for various users.</p>
    </div>


  );
}

export default HousePrice