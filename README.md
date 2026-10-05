# 🤖 AI Resume Analyzer

An AI-powered web application that analyzes a candidate's resume against a job description and generates a **semantic match score** using Natural Language Processing (NLP) and Sentence Transformers.

## 📌 Project Overview

The AI Resume Analyzer allows users to upload a resume in PDF format and enter a job description. The system extracts the resume text, generates text embeddings using a Sentence Transformer model, and calculates the semantic similarity between the resume and the job description.

The final result is displayed as a percentage-based **Resume–Job Match Score**.

### 🔄 How It Works

```text
Resume PDF
    ↓
Extract Resume Text
    ↓
Enter Job Description
    ↓
Generate Text Embeddings
    ↓
Calculate Cosine Similarity
    ↓
Generate Match Score
    ↓
Display Result
```

## ✨ Features

* 📄 Upload resume in PDF format
* 📝 Enter a job description
* 📖 Extract text from PDF resumes
* 🤖 Generate semantic text embeddings
* 🔍 Compare resume and job description
* 📊 Calculate cosine similarity
* 📈 Generate a percentage-based match score
* ⚡ FastAPI backend
* 🌐 HTML, CSS and JavaScript frontend
* ⚠️ Basic input and error handling

## 🧠 AI Technology

The project uses the **Sentence Transformers** model:

```text
all-MiniLM-L6-v2
```

The resume and job description are converted into numerical embeddings.

```python
resume_embedding = model.encode([resume_text])
job_embedding = model.encode([job_description])
```

The embeddings are compared using cosine similarity:

```python
similarity = cosine_similarity(
    resume_embedding,
    job_embedding
)[0][0]
```

The similarity value is converted into a percentage:

```python
score = round(float(similarity) * 100, 2)
```

The final result is returned as:

```python
{
    "match_score": score
}
```

> **Note:** The match score represents an indicative semantic similarity between the resume and job description. It is not a complete hiring or candidate-selection decision.

## 🏗️ System Architecture

### Frontend

The frontend provides the interface for:

* Uploading the resume
* Entering the job description
* Starting the analysis
* Displaying the result

**Technologies:**

* HTML
* CSS
* JavaScript

### Backend

The backend receives the resume and job description and processes the analysis request.

**Technologies:**

* Python
* FastAPI
* Uvicorn
* PyPDF

### AI / NLP

The AI component performs semantic similarity analysis.

**Technologies:**

* Sentence Transformers
* `all-MiniLM-L6-v2`
* Scikit-learn
* Cosine Similarity

## 🛠️ Technologies Used

| Technology            | Purpose                      |
| --------------------- | ---------------------------- |
| Python                | Backend and AI processing    |
| FastAPI               | REST API                     |
| Uvicorn               | API server                   |
| PyPDF                 | PDF text extraction          |
| Sentence Transformers | Text embeddings              |
| all-MiniLM-L6-v2      | Semantic text representation |
| Scikit-learn          | Cosine similarity            |
| HTML                  | Frontend structure           |
| CSS                   | Frontend styling             |
| JavaScript            | Frontend interaction         |

## 📁 Project Structure

```text
AI-Resume-Analyzer/
│
├── analyzer.py
├── main.py
├── index.html
├── style.css
├── script.js
├── requirements.txt
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-USERNAME/AI-Resume-Analyzer.git
```

```bash
cd AI-Resume-Analyzer
```

### 2. Create a Virtual Environment

For Windows:

```bash
python -m venv venv
```

Activate the environment:

```bash
venv\Scripts\activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### Required Packages

```text
fastapi
uvicorn
python-multipart
pypdf
sentence-transformers
scikit-learn
```

## ▶️ Run the Backend

Start the FastAPI server:

```bash
uvicorn main:app --host 127.0.0.1 --port 8001 --reload
```

The API will be available at:

```text
http://127.0.0.1:8001
```

FastAPI documentation:

```text
http://127.0.0.1:8001/docs
```

## 🌐 Frontend

Open the frontend in a browser.

The JavaScript frontend sends the resume and job description to:

```text
http://127.0.0.1:8001/analyze
```

The backend processes the request and returns the match score.

## 🔌 API Endpoint

### Analyze Resume

```text
POST /analyze
```

### Input

The endpoint accepts:

* `resume` — PDF resume file
* `job_description` — Job description text

Example:

```python
@app.post("/analyze")
async def analyze_resume_api(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):
```

### Example Response

```json
{
    "match_score": 78.42
}
```

## 📄 PDF Text Extraction

The application uses PyPDF to extract text from uploaded resumes.

```python
reader = PdfReader(pdf_file)

resume_text = ""

for page in reader.pages:
    text = page.extract_text()

    if text:
        resume_text += text + "\n"
```

The extracted text is then passed to the AI analysis function.

## 🤖 Core AI Analysis

The main AI processing is implemented using Sentence Transformers.

```python
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

model = SentenceTransformer("all-MiniLM-L6-v2")

def analyze_resume(resume_text: str, job_description: str):

    resume_embedding = model.encode([resume_text])
    job_embedding = model.encode([job_description])

    similarity = cosine_similarity(
        resume_embedding,
        job_embedding
    )[0][0]

    score = round(float(similarity) * 100, 2)

    return {
        "match_score": score
    }
```
## ⚠️ Current Limitations

The current version mainly focuses on semantic similarity between the resume and job description.

It does not currently perform detailed:

* Skill extraction
* Missing skill detection
* Years-of-experience analysis
* Education matching
* Certification matching
* Keyword analysis
* Candidate ranking

Therefore, the generated score should be considered an **indicative similarity score**.

## 🚀 Future Improvements

* [ ] Skill extraction
* [ ] Missing skill identification
* [ ] Job requirement analysis
* [ ] Experience matching
* [ ] Education matching
* [ ] Keyword comparison
* [ ] Resume improvement suggestions
* [ ] Multiple resume comparison
* [ ] Candidate ranking
* [ ] User authentication
* [ ] Database integration
* [ ] Cloud deployment
* [ ] Improved UI/UX

## 📚 What I Learned

Through this project, I gained practical experience with:

* Natural Language Processing
* Sentence embeddings
* Semantic similarity
* Cosine similarity
* PDF text extraction
* FastAPI development
* REST API integration
* JavaScript and API communication
* Frontend-backend integration
* AI model integration
* Error handling

This project helped me understand how an AI model can be integrated into a complete software application.

## 🎥 Demo

**Demo Video:**
https://lnkd.in/p/gFPA2-pH

## 📝 Medium Article

I documented the development process and technical implementation of this project in a Medium article.

**Read the full article:**
https://medium.com/@kpsahan2/building-an-ai-powered-resume-analyzer-with-python-and-sentence-transformers-d91bccdaf6c8

## 👨‍💻 Author

### Sahan K.P

Software Engineering | AI & Machine Learning | Web Development

GitHub:
sahan-kp

---

⭐ If you find this project interesting, consider giving the repository a star!
