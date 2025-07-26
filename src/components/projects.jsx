export default function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="project-grid">
                <div className="project-card">
                    <h3>Object Detection System</h3>
                    <p>
                        Developed a custom object detection system using YOLO architecture for real-time 
                        object recognition in video streams. Achieved 95% accuracy in detecting multiple 
                        object classes in challenging environments.
                    </p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>TensorFlow</span>
                        <span>YOLO</span>
                        <span>OpenCV</span>
                    </div>
                </div>
                
                <div className="project-card">
                    <h3>Image Classification Model</h3>
                    <p>
                        Built a deep learning model for image classification with transfer learning 
                        techniques. The model can classify images into 1000+ categories with high accuracy.
                    </p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Keras</span>
                        <span>ResNet</span>
                        <span>ImageNet</span>
                    </div>
                </div>
                
                <div className="project-card">
                    <h3>Text-to-Image Generation</h3>
                    <p>
                        Implemented a text-to-image generation system using diffusion models. 
                        The system can generate high-quality images from textual descriptions.
                    </p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>PyTorch</span>
                        <span>Stable Diffusion</span>
                        <span>Hugging Face</span>
                    </div>
                </div>
                
                <div className="project-card">
                    <h3>Custom Language Model</h3>
                    <p>
                        Developed a custom language model for domain-specific text generation 
                        and understanding. The model was fine-tuned for specific industry needs.
                    </p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>Transformers</span>
                        <span>BERT</span>
                        <span>NLP</span>
                    </div>
                </div>
                
                <div className="project-card">
                    <h3>Chatbot Development</h3>
                    <p>
                        Created an intelligent chatbot system using natural language processing 
                        and machine learning techniques for automated customer support.
                    </p>
                    <div className="tech-stack">
                        <span>Python</span>
                        <span>NLTK</span>
                        <span>Dialogflow</span>
                        <span>REST API</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
