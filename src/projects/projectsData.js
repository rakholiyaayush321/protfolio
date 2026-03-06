export const projects = [
  {
    id: 'neurocry-ai',
    title: 'NeuroCry-AI',
    description: 'Infant cry detection system that classifies cries like hunger, pain, and breathing problems using machine learning and audio processing. Built with deep audio analysis pipeline.',
    image: '/images/neurocry.png',
    tags: ['Machine Learning', 'Audio Classification', 'Python', 'Librosa'],
    github: 'https://github.com/rakholiyaayush321/baby-cry-analysis',
    demo: '#',
    overview: 'NeuroCry-AI is a comprehensive machine learning system designed to analyze and classify infant cries. Infant crying is one of the primary ways babies communicate their needs. By employing advanced audio classification models, this project translates the spectral properties of infant cries into actionable insights for healthcare providers and caregivers. It accurately classifies cries into categories like hunger, pain, and discomfort.',
    keyFeatures: [
      'Accurate cry classification using advanced classification models',
      'End-to-end audio processing pipeline using Librosa',
      'Noise reduction and silence removal algorithm to isolate clean infant cry bounds',
      'Real-time frequency and amplitude tracking mechanism'
    ],
    architecture: 'The system pipeline starts by loading WAV audio files and computing Mel-Frequency Cepstral Coefficients (MFCCs), Chroma stft, Spectral Bandwidth, and Zero Crossing Rate features using Librosa. These robust features are then passed through sequentially structured Deep Neural Networks (DNN) trained with extensive datasets. Performance metrics and loss functions are closely monitored during training to prevent overfitting, resulting in a generalizable, highly accurate AI agent.'
  },
  {
    id: 'ai-game-analyzer',
    title: 'AI Game Analyzer',
    description: 'LLM-powered tool that analyzes game project codebases, detects the engine, and generates architecture insights automatically using AST analysis.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
    tags: ['LLMs', 'LangChain', 'Node.js', 'AST Analysis'],
    github: 'https://github.com/rakholiyaayush321/Game-analysis.git',
    demo: '#',
    overview: 'An AI-powered application built for developers looking to understand, document, and manage large-scale game codebases quickly. Parsing unstructured legacy game code is a notoriously difficult task. This analyzer utilizes Large Language Models connected via LangChain to ingest entire project trees, generate semantic summaries, detect structural dependencies, and trace data flow across massive applications.',
    keyFeatures: [
      'Automated game architecture detection (e.g., Unity, Unreal, Custom)',
      'LLM integration for high-level module summarization',
      'Abstract Syntax Tree (AST) parsing for rigorous static source code analysis',
      'Scalable data ingestion allowing recursive directory exploration'
    ],
    architecture: 'Built with Node.js enabling fast filesystem traversal and AST extraction. It uses LangChain as a translation orchestration layer, batching source files and extracting metadata via OpenAI models. Outputs are formulated into a readable markdown structured document, automatically cataloguing system-wide architectures.'
  },
  {
    id: 'ai-mental-health-chatbot',
    title: 'AI Mental Health Chatbot',
    description: 'An AI chatbot providing context-aware mental health support using Large Language Models with fine-tuned conversational abilities and empathetic responses.',
    image: '/images/chatbot-impact.png',
    tags: ['Generative AI', 'NLP', 'FastAPI', 'React'],
    github: 'https://github.com/rakholiyaayush321/mental-health-chatbot',
    demo: '#',
    overview: 'A conversational AI specializing in mental health and wellbeing support. Through state-of-the-art NLP implementations, this model operates with high empathy and nuanced semantic understanding. It tracks context over lengthy sessions, actively recalling user statements, and adapts its response style appropriately for users experiencing acute emotional distress or anxiety.',
    keyFeatures: [
      'Finely-tuned empathetic conversational logic',
      'Retrieval-Augmented Generation (RAG) to reference therapeutic protocols',
      'Secure, anonymous and highly scalable backend REST interface',
      'Instantaneous low-latency stream generation for natural conversation pacing'
    ],
    architecture: 'The frontend is a lightweight, asynchronous React application executing on dynamic WebSocket and API paths. This connects seamlessly to a FastAPI middleware built to scale efficiently. The FastAPI server manages user state context pooling and interfaces with a custom-prompted LLM backend engineered for rigorous sentiment boundaries.'
  },
  {
    id: 'portfolio-website',
    title: 'Professional Portfolio',
    description: 'A FAANG-level developer portfolio built with React and Tailwind CSS v4, hyper-optimized for speed and minimal design.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Performance Optimization'],
    github: 'https://github.com/rakholiyaayush321',
    demo: 'https://ayushrakholiya.netlify.app',
    overview: 'A lightning-fast, ultra-optimized personal portfolio deployed on Netlify. Developed entirely to manifest a pristine professional aesthetic, demonstrating my exact capabilities in UX engineering, state management, and asset deployment. By eliminating heavy redundant rendering loops and leveraging native DOM mechanisms, it sets a gold-standard for modern web performance parameters.',
    keyFeatures: [
      'Sub-0.5s First Contentful Paint and flawless Lighthouse 95+ score',
      'Sophisticated glassmorphism aesthetic achieved with minimal CSS footprints',
      'Tailwind CSS v4 utilized for rapid, scalable component styling',
      'Responsive React-Router DOM handling robust sub-directory access'
    ],
    architecture: 'Developed on the Vite + React compilation pipeline guaranteeing hot-module reloading and heavily minified production bundles. The application forsakes robust, yet heavy packages (like Framer Motion and ThreeJS) in favor of optimized, custom, and hardware-accelerated CSS keyframe animations.'
  },
  {
    id: 'cv-surveillance',
    title: 'Computer Vision Surveillance',
    description: 'Real-time anomaly detection system for CCTV feeds using YOLOv8 and temporal action localization to identify suspicious behavior.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800',
    tags: ['Computer Vision', 'YOLOv8', 'PyTorch', 'OpenCV'],
    github: 'https://github.com/rakholiyaayush321',
    demo: '#',
    overview: 'An intelligent surveillance pipeline processing multi-stream video feeds in real-time. By leveraging the latest YOLOv8 architectures optimized with TensorRT, the system tracks entity movements, analyzes spatial relationships, and flags anomalous activities (like unattended bags or aggressive behavior) without human intervention.',
    keyFeatures: [
      'Multi-camera concurrent stream processing (RTSP)',
      'Custom-trained YOLOv8 models for anomaly detection',
      'High-throughput inference optimization via TensorRT',
      'Automated alert generation and frame capture'
    ],
    architecture: 'Frames are extracted using OpenCV and passed directly into GPU memory buffers. A PyTorch-based inference engine executes the object detection and action recognition passes. The results are aggregated and served via a lightweight Flask API to a monitoring dashboard.'
  }
];
