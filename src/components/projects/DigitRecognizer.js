import React from 'react';
import MNIST_Dataset from "../../assets/images/CNN_Project/MNIST_Dataset.png";
import styles from './css.module.css';

const DigitRecognizer = () => {
  return (
    <div className={styles.component}>
      <h1>Digit Recognition with Convolutional Neural Networks (CNN) and MNIST dataset</h1>
      <p>Optical Character Recognition (OCR) is a branch of computer
        vision that deals with recognizing text from images.
        Handwritten digit recognition (HDR) is a fundamental task
        in OCR with numerous applications, including postal code recognition,
        automatic bank check processing, and self-driving cars.
        Convolutional Neural Networks (CNN) have emerged as a powerful
        tool for achieving high accuracy in HDR tasks.</p>

      <h1>The MNIST Dataset</h1>

      <img src={MNIST_Dataset} alt="MNIST Dataset" />
      <p>The MNIST dataset is a widely used benchmark for handwritten
        digit recognition. It consists of 70,000 images of handwritten
        digits (from 0 to 9) collected from school children. Each image
        is a 28x28 pixel grayscale image, with each pixel intensity value
        ranging from 0 (black) to 255 (white). The dataset is further
        divided into a training set of 60,000 images and a testing set
        of 10,000 images.</p>

      <h1>Understanding Convolutional Neural Networks (CNN)</h1>
      <p>CNN are a specific type of artificial neural network
        architecture particularly well-suited for image recognition
        tasks. They leverage the inherent properties of images, such
        as spatial locality and shared weights, to achieve high
        performance. Here's a breakdown of the key components of
        a CNN for digit recognition:</p>

      <ul>
        <li><b className={styles.highlight}>Convolutional Layers:</b> These layers apply filters (kernels)
          to the input image, extracting features like edges, lines, and curves.
          The filter slides across the image, computing the element-wise product
          with the input at each position. The result is a feature map that
          captures specific aspects of the image.</li>

        <li><b className={styles.highlight}>Pooling Layers:</b> These layers downsample the
          feature maps, reducing their dimensionality and computational
          complexity. They achieve this by applying a pooling operation
          (e.g., average or max pooling) over small regions of the feature map.</li>

        <li><b className={styles.highlight}>Activation Layers:</b> These layers introduce
          non-linearity into the network, allowing it to learn more
          complex relationships between features. Common activation
          functions used in CNN include ReLU (Rectified Linear Unit)
          and sigmoid.</li>

        <li><b className={styles.highlight}>Flatten Layer:</b> This layer transforms the
          multi-dimensional feature maps from the convolutional
          layers into a one-dimensional vector suitable for feeding
          into the fully connected layers.</li>

        <li><b className={styles.highlight}>Fully Connected Layers:</b> These layers perform
          traditional matrix multiplication operations, similar to
          those found in standard neural networks. They combine the
          extracted features from the convolutional layers to classify
          the input image into a specific digit class (0-9).</li>
      </ul>

      <h2>Model Training and Evaluation</h2>

      <h3>Compilation:</h3>
      <p>The model is compiled using the <code>compile()</code> function. Here's a breakdown of the compilation arguments used in your code:</p>
      <ul>
        <li><strong>optimizer:</strong> The optimizer specifies the algorithm used to update the network weights during training. Your code uses the 'adam' optimizer, a popular choice for deep learning models due to its adaptive learning rate and efficient computation.</li>
        <li><strong>loss:</strong> The loss function measures how well the model's predictions match the true labels. In your case, categorical_crossentropy is used for multi-class classification problems like digit recognition.</li>
        <li><strong>metrics:</strong> This argument specifies the performance metric(s) to evaluate the model during training and testing. Your code uses 'accuracy' to track the percentage of correctly classified digits.</li>
      </ul>

      <h3>Training:</h3>
      <p>The <code>fit()</code> function trains the model on the training data (X_train and y_train). Here are key points to consider:</p>
      <ul>
        <li><strong>epochs:</strong> This parameter specifies the number of times the entire training dataset is passed through the network. Your code uses 20 epochs.</li>
        <li><strong>validation_split:</strong> This parameter sets aside a portion of the training data (20% in your case) for validation. The model's performance is evaluated on the validation set during training to monitor for overfitting.</li>
        <li><strong>callbacks:</strong> You've incorporated two callback functions:
          <ul>
            <li>EarlyStopping: This callback monitors the validation accuracy. If the validation accuracy doesn't improve for a certain number of epochs (patience=4 in your code), training is stopped to prevent overfitting.</li>
            <li>ModelCheckpoint: This callback saves the model with the best validation accuracy during training. The saved model filename is specified as "epoch-20-again.h5" in your code.</li>
          </ul>
        </li>
      </ul>

      <h3>Evaluation:</h3>
      <p>After training, the model is evaluated on the testing set (X_test and y_test) using the <code>evaluate()</code> function. This provides an unbiased estimate of the model's generalization performance on unseen data. Your code prints the model's accuracy and loss on the testing set.</p>

      <h1>Digit Recognizer Application</h1>

      <h2>Initialization:</h2>
      <p>Necessary libraries like Pygame, NumPy, and OpenCV are imported.</p>
      <p>Hyperparameters like window size and boundary increase for drawing are defined.</p>
      <p>Color constants (white, black, red) are set for visual elements.</p>
      <ul>
        <li>A flag <code>IMAGESAVE</code> controls whether to save drawn digits as images.</li>
        <li>The trained model is loaded using <code>load_model("./bestmodel.h5")</code>. This loads the model saved during training with the best validation accuracy.</li>
        <li>A dictionary <code>LABELS</code> maps the predicted digit class (0-9) to its corresponding string label ("Zero" to "Nine").</li>
      </ul>

      <h2>Pygame Setup:</h2>
      <p>Pygame is initialized to handle graphical user interface (GUI) elements.</p>
      <ul>
        <li>A font object is created for displaying the recognized digit label.</li>
        <li>The display surface is set using <code>pygame.display.set_mode()</code>.</li>
        <li>The window caption is set to "Digit Recognizer By Tanush M M".</li>
      </ul>

      <h2>User Interaction:</h2>
      <p>A <code>while</code> loop continuously monitors for user events using <code>pygame.event.get()</code>. Here's how the code handles different events:</p>
      <ul>
        <li><strong>QUIT:</strong> This event is triggered when the user closes the application window. The loop is terminated, and Pygame quits.</li>
        <li><strong>MOUSEMOTION:</strong> If <code>iswriting</code> is True (indicating the user is drawing a digit), this event captures the mouse coordinates and draws a white circle at the current position, simulating a drawing experience. The coordinates are stored in <code>number_xcord</code> and <code>number_ycord</code> lists.</li>
        <li><strong>MOUSEBUTTONDOWN:</strong> Clicking the mouse button sets <code>iswriting</code> to True, indicating the start of drawing a digit.</li>
        <li><strong>MOUSEBUTTONUP:</strong> Releasing the mouse button sets <code>iswriting</code> to False, signifying the completion of drawing a digit. The captured coordinates are then processed to predict the digit.</li>
      </ul>
      <p>A flag <code>PREDICT</code> controls whether to predict the digit class. When set to True (default), the following steps occur:</p>
      <ul>
        <li>The coordinates (<code>number_xcord</code> and <code>number_ycord</code>) are sorted to create a bounding box around the drawn digit.</li>
        <li>A NumPy array representing the pixel intensities within the bounding box is extracted from the display surface.</li>
        <li>If <code>IMAGESAVE</code> is True, the extracted image is saved for debugging or visualization purposes.</li>
      </ul>

      <h2>Image Preprocessing:</h2>
      <p>The extracted image is resized to the expected input size of the CNN model (28x28 pixels) using OpenCV's <code>cv2.resize()</code>.</p>
      <p>To compensate for potential inconsistencies in drawing size and position, the image is padded with zeros using <code>cv2.pad()</code>. This ensures the image dimensions perfectly match the model's input requirements.</p>
      <p>The image is then normalized by dividing each pixel intensity by 255, similar to the preprocessing applied to the training data.</p>

      <h2>Model Prediction:</h2>
      <p>The preprocessed image is reshaped into a 1x28x28x1 format suitable for the CNN model's input. The additional dimension (1) represents a single image in the batch.</p>
      <p>The model predicts the probability distribution for each digit class (0-9) using the <code>predict()</code> function.</p>

      <h2>Labeling:</h2>
      <p>The class with the highest predicted probability is identified using <code>np.argmax()</code>. This corresponds to the most likely digit class for the drawn image.</p>
      <p>The predicted digit label is retrieved from the <code>LABELS</code> dictionary using the class index.</p>

      <h2>Visualization:</h2>
      <h3>Text Rendering:</h3>
      <p>The predicted digit label is converted to a string using the <code>LABELS</code> dictionary.</p>
      <p>A text surface object is created using the font object and the label string. The text is rendered in red color with a white background for better visibility.</p>
      <h3>Displaying Results:</h3>
      <p>The bounding rectangle for the text is obtained using <code>textSurface.get_rect()</code>.</p>
      <p>The text surface is blitted onto the display surface using <code>DISPLAYSURF.blit()</code>, positioning it at the bottom left corner of the bounding box around the drawn digit.</p>

      <h3>Screen Update:</h3>
      <p>The entire display surface is updated using <code>pygame.display.update()</code>, reflecting the drawn digit, bounding box, and predicted label on the screen.</p>

      <h2>Key Points and Considerations:</h2>

      <p>The accuracy of digit recognition depends on various factors, including:</p>
      <ul>
        <li>Complexity of the CNN architecture: More complex architectures with deeper layers and more filters can potentially achieve higher accuracy, but also require more training data and computational resources.</li>
        <li>Amount of training data: A larger dataset of handwritten digits allows the model to learn a wider range of variations and improve its generalization capabilities.</li>
        <li>Quality of data preprocessing: Preprocessing steps like normalization and resizing ensure the training data is presented in a consistent format that the model can effectively learn from.</li>
      </ul>

      <p>Here are some additional techniques to consider:</p>
      <ul>
        <li>Data augmentation: Artificially creating variations of existing training data (e.g., adding noise, rotating digits slightly) can help the model generalize better to unseen variations in real-world handwritten digits.</li>
        <li>Hyperparameter tuning: Adjusting hyperparameters within the CNN architecture (e.g., number of convolutional layers, number of filters per layer, kernel size) can significantly impact performance. Finding the optimal hyperparameters often involves experimentation and evaluation using techniques like grid search or random search.</li>
      </ul>

      <p>Real-world handwritten digit recognition scenarios often present additional challenges beyond the MNIST dataset:</p>
      <ul>
        <li>Noise: Images may contain background noise, smudges, or ink variations that can affect the model's ability to recognize digits.</li>
        <li>Skewed digits: Handwritten digits might be slanted or tilted, requiring the model to be robust to such variations.</li>
        <li>Touching digits: In some cases, digits might be written close together or even touching, requiring more sophisticated techniques to separate and recognize them individually.</li>
      </ul>

      <p>To address these challenges:</p>
      <ul>
        <li>Preprocessing techniques: Applying additional preprocessing steps like denoising, deskewing, and separating touching digits can help improve recognition accuracy.</li>
        <li>Advanced architectures: Exploring more advanced deep learning architectures, such as recurrent neural networks (RNNs) or transformer models, might enhance performance in complex scenarios.</li>
        <li>Transfer learning: Leveraging pre-trained models on large-scale datasets and fine-tuning them on specific handwritten digit datasets can help achieve better results with limited training data.</li>
      </ul>
      <p>These approaches collectively contribute to building a robust handwritten digit recognizer that can handle real-world challenges and deliver accurate predictions.</p>

      <h1>Conclusion:</h1>
      <p>Handwritten digit recognition using CNN and the MNIST dataset is a foundational application of deep learning. CNN leverage their hierarchical feature learning capabilities to achieve high accuracy in this task. By understanding the key components of CNN, preprocessing techniques, and model training strategies, you can build and deploy effective digit recognition systems.</p>
      <p>Furthermore, applying advanced techniques and addressing real-world challenges can enhance the performance of handwritten digit recognizers, making them applicable to various practical scenarios.</p>
    </div>
  );
};

export default DigitRecognizer;



// import React from 'react'
// import MNIST_Dataset  from "../../assets/images/CNN_Project/MNIST_Dataset.png";

// const DigitRecognizer = () => {
//   return (
//     <div>
//       <h1>Digit Recognition with Convolutional Neural Networks (CNN) and MNIST dataset</h1>
//       <p>Optical Character Recognition (OCR) is a branch of computer
//       vision that deals with recognizing text from images.
//       Handwritten digit recognition (HDR) is a fundamental task
//       in OCR with numerous applications, including postal code recognition,
//       automatic bank check processing, and self-driving cars.
//       Convolutional Neural Networks (CNN) have emerged as a powerful
//       tool for achieving high accuracy in HDR tasks.</p>

//       <h1>The MNIST Dataset</h1>

//       <img src={MNIST_Dataset}></img>
//       <p>The MNIST dataset is a widely used benchmark for handwritten
//         digit recognition. It consists of 70,000 images of handwritten
//         digits (from 0 to 9) collected from school children. Each image
//         is a 28x28 pixel grayscale image, with each pixel intensity value
//         ranging from 0 (black) to 255 (white). The dataset is further
//         divided into a training set of 60,000 images and a testing set
//         of 10,000 images.</p>

//       <h1>Understanding Convolutional Neural Networks (CNN)</h1>
//       <p>CNN are a specific type of artificial neural network
//         architecture particularly well-suited for image recognition
//         tasks. They leverage the inherent properties of images, such
//         as spatial locality and shared weights, to achieve high
//         performance. Here's a breakdown of the key components of
//         a CNN for digit recognition:</p>

//       <ul>
//         <li><b>Convolutional Layers:</b> These layers apply filters (kernels)
//         to the input image, extracting features like edges, lines, and curves.
//         The filter slides across the image, computing the element-wise product
//         with the input at each position. The result is a feature map that
//         captures specific aspects of the image.</li>

//         <li><b>Pooling Layers:</b> These layers downsample the
//         feature maps, reducing their dimensionality and computational
//         complexity. They achieve this by applying a pooling operation
//         (e.g., average or max pooling) over small regions of the feature map.</li>

//         <li><b>Activation Layers:</b> These layers introduce
//         non-linearity into the network, allowing it to learn more
//         complex relationships between features. Common activation
//         functions used in CNN include ReLU (Rectified Linear Unit)
//         and sigmoid.</li>

//         <li><b>Flatten Layer:</b> This layer transforms the
//         multi-dimensional feature maps from the convolutional
//         layers into a one-dimensional vector suitable for feeding
//         into the fully connected layers.</li>

//         <li><b>Fully Connected Layers:</b> These layers perform
//         traditional matrix multiplication operations, similar to
//         those found in standard neural networks. They combine the
//         extracted features from the convolutional layers to classify
//         the input image into a specific digit class (0-9).</li>
//       </ul>

// <h>Model Trainer.py</h>
// <p>
// import numpy as np
// import matplotlib.pyplot as plt

// import keras

// from keras.datasets import mnist
// from keras.models import Sequential
// from keras.layers import Dense, Conv2D, MaxPool2D, Flatten, Dropout


// #Getting the data

// (X_train, y_train),(X_test, y_test) = mnist.load_data()

// #Preprocessing the Data

// #Normalizing the image [0,1] range
// X_train = X_train/255
// X_test = X_test/255

// #Reshaping and expanding the dimensions of image to (28,28,1)
// X_train = np.expand_dims(X_train,-1)
// X_test = np.expand_dims(X_test,-1)

// #converting classes to vectors
// y_train = keras.utils.np_utils.to_categorical(y_train)
// y_test = keras.utils.np_utils.to_categorical(y_test)

// #Model
// model = Sequential()

// model.add(Conv2D(32,(3,3), activation = 'relu',input_shape = (28,28,1)))
// model.add(MaxPool2D(pool_size=(2,2)))

// model.add(Conv2D(64,(3,3), activation = 'relu'))
// model.add(MaxPool2D(pool_size=(2,2)))

// model.add(Flatten())

// model.add(Dropout(0.25))

// model.add(Dense(10, activation= "softmax"))

// model.compile(optimizer= 'adam', loss =keras.losses.categorical_crossentropy, metrics = 'accuracy')

// from keras.callbacks import EarlyStopping, ModelCheckpoint
// es = EarlyStopping(monitor = 'val_accuracy', min_delta = 0.01, patience =4, verbose =1)

// mc = ModelCheckpoint("T:\\Python\\ST Project\\MNIST Digit Recognition By Tanush MM\\epoch-20-again.h5", monitor = "val_accuracy", verbose =1, save_best_only = True)
// cb = [es,mc]

// #Model Training

// his = model.fit(X_train, y_train, epochs =20, validation_split = 0.3, callbacks = cb)

// #Model Loading

// model_S = keras.models.load_model("./bestmodel.h5")
// score = model_S.evaluate(X_test, y_test)


// print(f"Model Accuracy: " + score[1])
// print(f"Model Loss: " + score[0])
// </p>



// <h2>Model Training and Evaluation</h2>

// <h3>Compilation:</h3>
// <p>The model is compiled using the <code>compile()</code> function. Here's a breakdown of the compilation arguments used in your code:</p>
// <ul>
//   <li><strong>optimizer:</strong> The optimizer specifies the algorithm used to update the network weights during training. You've chosen the Adam optimizer, known for its efficiency and effectiveness in various deep learning tasks.</li>
//   <li><strong>loss:</strong> The loss function measures the difference between the model's predictions and the true labels. You've used the categorical cross-entropy loss function, which is suitable for multi-class classification problems like digit recognition.</li>
//   <li><strong>metrics:</strong> The metrics list specifies the metrics to be evaluated during training and testing. You've included 'accuracy' to monitor how well the model is classifying the digits.</li>
// </ul>

// <h3>Training:</h3>
// <p>The <code>fit()</code> function trains the model on the training data (X_train and y_train). Here are key points to consider:</p>
// <ul>
//   <li><strong>epochs:</strong> This parameter specifies the number of times the entire training dataset is passed through the network. Your code uses 20 epochs.</li>
//   <li><strong>validation_split:</strong> This parameter sets aside a portion of the training data (20% in your case) for validation. The model's performance is evaluated on the validation set during training to monitor for overfitting.</li>
//   <li><strong>callbacks:</strong> You've incorporated two callback functions:
//     <ul>
//       <li>EarlyStopping: This callback monitors the validation accuracy. If the validation accuracy doesn't improve for a certain number of epochs (patience=4 in your code), training is stopped to prevent overfitting.</li>
//       <li>ModelCheckpoint: This callback saves the model with the best validation accuracy during training. The saved model filename is specified as "epoch-20-again.h5" in your code.</li>
//     </ul>
//   </li>
// </ul>

// <h3>Evaluation:</h3>
// <p>After training, the model is evaluated on the testing set (X_test and y_test) using the <code>evaluate()</code> function. This provides an unbiased estimate of the model's generalization performance on unseen data. Your code prints the model's accuracy and loss on the testing set.</p>



// <h1>Digit Recognizer Application</h1>

// <h2>Initialization:</h2>
// <p>Necessary libraries like Pygame, NumPy, and OpenCV are imported.</p>
// <p>Hyperparameters like window size and boundary increase for drawing are defined.</p>
// <p>Color constants (white, black, red) are set for visual elements.</p>
// <ul>
//   <li>A flag <code>IMAGESAVE</code> controls whether to save drawn digits as images.</li>
//   <li>The trained model is loaded using <code>load_model("./bestmodel.h5")</code>. This loads the model saved during training with the best validation accuracy.</li>
//   <li>A dictionary <code>LABELS</code> maps the predicted digit class (0-9) to its corresponding string label ("Zero" to "Nine").</li>
// </ul>

// <h2>Pygame Setup:</h2>
// <p>Pygame is initialized to handle graphical user interface (GUI) elements.</p>
// <ul>
//   <li>A font object is created for displaying the recognized digit label.</li>
//   <li>The display surface is set using <code>pygame.display.set_mode()</code>.</li>
//   <li>The window caption is set to "Digit Recognizer By Tanush M M".</li>
// </ul>

// <h2>User Interaction:</h2>
// <p>A <code>while</code> loop continuously monitors for user events using <code>pygame.event.get()</code>. Here's how the code handles different events:</p>
// <ul>
//   <li><strong>QUIT:</strong> This event is triggered when the user closes the application window. The loop is terminated, and Pygame quits.</li>
//   <li><strong>MOUSEMOTION:</strong> If <code>iswriting</code> is True (indicating the user is drawing a digit), this event captures the mouse coordinates and draws a white circle at the current position, simulating a drawing experience. The coordinates are stored in <code>number_xcord</code> and <code>number_ycord</code> lists.</li>
//   <li><strong>MOUSEBUTTONDOWN:</strong> Clicking the mouse button sets <code>iswriting</code> to True, indicating the start of drawing a digit.</li>
//   <li><strong>MOUSEBUTTONUP:</strong> Releasing the mouse button sets <code>iswriting</code> to False, signifying the completion of drawing a digit. The captured coordinates are then processed to predict the digit.</li>
// </ul>
// <p>A flag <code>PREDICT</code> controls whether to predict the digit class. When set to True (default), the following steps occur:</p>
// <ul>
//   <li>The coordinates (<code>number_xcord</code> and <code>number_ycord</code>) are sorted to create a bounding box around the drawn digit.</li>
//   <li>A NumPy array representing the pixel intensities within the bounding box is extracted from the display surface.</li>
//   <li>If <code>IMAGESAVE</code> is True, the extracted image is saved for debugging or visualization purposes.</li>
// </ul>

// <h2>Image Preprocessing:</h2>
// <p>The extracted image is resized to the expected input size of the CNN model (28x28 pixels) using OpenCV's <code>cv2.resize()</code>.</p>
// <p>To compensate for potential inconsistencies in drawing size and position, the image is padded with zeros using <code>cv2.pad()</code>. This ensures the image dimensions perfectly match the model's input requirements.</p>
// <p>The image is then normalized by dividing each pixel intensity by 255, similar to the preprocessing applied to the training data.</p>

// <h2>Model Prediction:</h2>
// <p>The preprocessed image is reshaped into a 1x28x28x1 format suitable for the CNN model's input. The additional dimension (1) represents a single image in the batch.</p>
// <p>The model predicts the probability distribution for each digit class (0-9) using the <code>predict()</code> function.</p>

// <h2>Labeling:</h2>
// <p>The class with the highest predicted probability is identified using <code>np.argmax()</code>. This corresponds to the most likely digit class for the drawn image.</p>
// <p>The predicted digit label is retrieved from the <code>LABELS</code> dictionary using the class index.</p>

// <h2>Visualization:</h2>
// <h3>Text Rendering:</h3>
// <p>The predicted digit label is converted to a string using the <code>LABELS</code> dictionary.</p>
// <p>A text surface object is created using the font object and the label string. The text is rendered in red color with a white background for better visibility.</p>
// <h3>Displaying Results:</h3>
// <p>The bounding rectangle for the text is obtained using <code>textSurface.get_rect()</code>.</p>
// <p>The text surface is blitted onto the display surface using <code>DISPLAYSURF.blit()</code>, positioning it at the bottom left corner of the bounding box around the drawn digit.</p>

// <h3>Screen Update:</h3>
// <p>The entire display surface is updated using <code>pygame.display.update()</code>, reflecting the drawn digit, bounding box, and predicted label on the screen.</p>



// <h2>Key Points and Considerations:</h2>

// <p>The accuracy of digit recognition depends on various factors, including:</p>
// <ul>
// <li>Complexity of the CNN architecture: More complex architectures with deeper layers and more filters can potentially achieve higher accuracy, but also require more training data and computational resources.</li>
// <li>Amount of training data: A larger dataset of handwritten digits allows the model to learn a wider range of variations and improve its generalization capabilities.</li>
// <li>Quality of data preprocessing: Preprocessing steps like normalization and resizing ensure the training data is presented in a consistent format that the model can effectively learn from.</li>
// </ul>

// <p>Here are some additional techniques to consider:</p>
// <ul>
// <li>Data augmentation: Artificially creating variations of existing training data (e.g., adding noise, rotating digits slightly) can help the model generalize better to unseen variations in real-world handwritten digits.</li>
// <li>Hyperparameter tuning: Adjusting hyperparameters within the CNN architecture (e.g., number of convolutional layers, number of filters per layer, kernel size) can significantly impact performance. Finding the optimal hyperparameters often involves experimentation and evaluation using techniques like grid search or random search.</li>
// </ul>

// <p>Real-world handwritten digit recognition scenarios often present additional challenges beyond the MNIST dataset:</p>
// <ul>
// <li>Noise: Images may contain background noise, smudges, or ink variations that can affect the model's ability to recognize digits.</li>
// <li>Skewed digits: Handwritten digits might be slanted or tilted, requiring the model to be robust to such variations.</li>
// <li>Touching digits: In some cases, digits might be written close together or even touching, requiring more sophisticated techniques to separate and recognize them individually.</li>
// </ul>

// <p>To address these real-world complexities, more advanced CNN architectures or specialized preprocessing techniques might be necessary. These techniques can help the model handle the noise, variations, and complexities present in real-world handwritten digits.</p>


//     </div>
//   );
// }

// export default DigitRecognizer