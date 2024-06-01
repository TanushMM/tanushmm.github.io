import React from 'react'
import styles from './PCA.module.css';

const PCA = () => {
  const handleHomeClick = () => {
    window.history.back(); // Navigate to home page
  };
  return (
    <div className={styles.component}>
      <button onClick={handleHomeClick} className={styles.homeButton}>Home</button>
      <h1>Data Preprocessing and Dimensionality reduction using PCA [Principal Component Analysis]</h1>
    <p>In the realm of data analysis, understanding the intricacies of data importation, preprocessing, and subsequent modeling techniques is paramount for deriving meaningful insights and making informed decisions. This comprehensive breakdown delves into the various stages of a data analysis pipeline, focusing on the exploration and manipulation of automobile data.</p>

    <h2>Data Importing and Preprocessing</h2>
    <ul>
        <li><strong>Data Importing and Initial Preparation:</strong>
            <ul>
                <li>The dataset is imported from a CSV file located at a specified path.</li>
                <li>Several columns that are deemed unnecessary for the analysis (such as categorical columns related to car features) are dropped. This is likely done to simplify the dataset and focus on numerical variables, which are more straightforward to work with in this context.</li>
            </ul>
        </li>
        <li><strong>Handling Missing Values:</strong>
            <ul>
                <li>The code suggests that any rows with missing values are removed, ensuring that the dataset is clean and ready for analysis. Missing data can complicate analysis and models, so it is crucial to handle it upfront.</li>
            </ul>
        </li>
    </ul>

    <h2>Variable Declaration and Scaling</h2>
    <ul>
        <li><strong>Target and Features Separation:</strong>
            <ul>
                <li>The target variable (y) is identified as the car price.</li>
                <li>The remaining columns, after excluding the target variable, are considered features (x).</li>
            </ul>
        </li>
        <li><strong>Scaling:</strong>
            <ul>
                <li>Both the target and features are scaled using StandardScaler from scikit-learn. This standardizes the data to have a mean of 0 and a standard deviation of 1, which is critical for many machine learning algorithms that are sensitive to the scale of input data.</li>
                <li>The target variable (y) is reshaped into a 2D array before scaling, which is necessary for the scaler to work correctly.</li>
            </ul>
        </li>
    </ul>

    <h2>Data Distribution Visualization</h2>
    <ul>
        <li><strong>Distribution Plots:</strong>
            <ul>
                <li>Histograms with kernel density estimation (KDE) overlays are created for each feature. This visualizes the distribution of each feature, helping to understand their ranges, central tendencies, and variances.</li>
                <li>These plots are essential for exploratory data analysis (EDA) to get insights into the data's nature before modeling.</li>
            </ul>
        </li>
        <li><strong>Scatter Plots:</strong>
            <ul>
                <li>Scatter plots of each feature against the scaled target variable are generated. These plots help visualize the relationship between each feature and the target variable, which can indicate potential linear relationships or correlations.</li>
            </ul>
        </li>
    </ul>

    <h2>Linear Regression</h2>
    <ul>
        <li><strong>Regression Model with Original Features:</strong>
            <ul>
                <li>An Ordinary Least Squares (OLS) regression model is built using statsmodels. The features are augmented with a constant term to include an intercept in the model.</li>
                <li>The summary of the regression model provides detailed statistics, such as coefficients, R-squared, p-values, and more. These statistics help in understanding the significance of each feature and the overall fit of the model.</li>
                <li>A heatmap of the covariance matrix is plotted, which provides insights into the relationships and potential multicollinearity among the features.</li>
            </ul>
        </li>
    </ul>

    <h2>Dimensionality Reduction using PCA</h2>
    <ul>
        <li><strong>Principal Component Analysis (PCA):</strong>
            <ul>
                <li>PCA is performed to reduce the dimensionality of the feature set. This technique transforms the original features into a smaller set of uncorrelated components while retaining as much variance as possible.</li>
                <li>The number of components is set to 6, which is a choice likely based on either a pre-analysis decision or through the observation of the explained variance ratio.</li>
                <li>The explained_variance_ratio_ output shows the proportion of variance explained by each principal component, which helps in understanding how much information each component retains.</li>
                <li>A heatmap of the covariance matrix of the principal components is generated. This visual representation shows the variance and relationships between the new components, indicating how they have decorrelated the original features.</li>
            </ul>
        </li>
    </ul>

    <h2>Linear Regression with PCA Components</h2>
    <ul>
        <li><strong>Regression Model with PCA Components:</strong>
            <ul>
                <li>Another OLS regression model is built, but this time using the principal components obtained from PCA instead of the original features.</li>
                <li>The summary of this new regression model is examined to compare with the previous model. The metrics provided (like coefficients, R-squared, and p-values) will help in understanding the effectiveness of PCA in simplifying the model without significantly losing predictive power.</li>
            </ul>
        </li>
    </ul>

    <h2>Detailed Explanation</h2>
    <p>The overall workflow demonstrates a thorough approach to data analysis, from initial preprocessing and EDA to modeling and dimensionality reduction. By carefully handling data, visualizing distributions, and using techniques like PCA, the analysis aims to build a robust and interpretable regression model. The comparison between the original and PCA-based models helps in understanding the trade-offs involved in dimensionality reduction and its impact on model performance.</p>
    </div>
  );
}

export default PCA