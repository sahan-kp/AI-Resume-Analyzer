async function analyzeResume() {

    const resumeFile =
        document.getElementById("resume").files[0];

    const jobDescription =
        document.getElementById("jobDescription").value;

    const result =
        document.getElementById("result");

    const loading =
        document.getElementById("loading");


    // Validation

    if (!resumeFile) {

        alert("Please upload your resume PDF.");

        return;
    }


    if (!jobDescription.trim()) {

        alert("Please enter the job description.");

        return;
    }


    // Create form data

    const formData = new FormData();

    formData.append(
        "resume",
        resumeFile
    );

    formData.append(
        "job_description",
        jobDescription
    );


    // Loading

    loading.style.display = "block";

    result.innerHTML = "";


    try {

        const response = await fetch(
            "http://127.0.0.1:8001/analyze",
            {
                method: "POST",
                body: formData
            }
        );


        const data = await response.json();


        // Backend error

        if (data.error) {

            result.innerHTML =
                `<p style="color:red;">
                    Error: ${data.error}
                </p>`;

            return;
        }


        // Successful result

        result.innerHTML =
            `<h2>Match Score</h2>
             <p>${data.match_score}%</p>`;


    } catch (error) {

        console.error(error);

        result.innerHTML =
            `<p style="color:red;">
                Cannot connect to backend.
                Make sure the server is running.
            </p>`;

    } finally {

        loading.style.display = "none";
    }
}