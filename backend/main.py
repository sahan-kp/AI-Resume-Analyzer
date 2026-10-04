from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pypdf import PdfReader
from analyzer import analyze_resume

app = FastAPI(title="AI Resume Analyzer")


# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "AI Resume Analyzer API is running"
    }


@app.post("/analyze")
async def analyze_resume_api(
    resume: UploadFile = File(...),
    job_description: str = Form(...)
):

    try:

        # Read uploaded PDF
        contents = await resume.read()

        # Extract PDF text directly from memory
        import io

        pdf_file = io.BytesIO(contents)
        reader = PdfReader(pdf_file)

        resume_text = ""

        for page in reader.pages:
            text = page.extract_text()

            if text:
                resume_text += text + "\n"

        # Check PDF text
        if not resume_text.strip():
            return {
                "error": "Could not extract text from the PDF."
            }

        # AI analysis
        result = analyze_resume(
            resume_text,
            job_description
        )

        return result

    except Exception as e:

        return {
            "error": str(e)
        }