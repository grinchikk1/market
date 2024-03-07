# Getting Started with Django REST Framework (DRF) Project

Welcome to our Django REST Framework (DRF) project! This guide will help you set up your environment and start the project quickly.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Python (version 3.6 or higher)
- pip (Python package installer)

## Installation

Follow these steps to set up your environment and start the DRF project:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project_directory>
   ```

3. Create a virtual environment for the project. This step is optional but recommended to keep your project dependencies isolated:

   ```bash
   python -m venv env
   ```

4. Activate the virtual environment:

   - On Windows:

   ```bash
   .\env\Scripts\activate
   ```

   - On macOS and Linux:

   ```bash
   source env/bin/activate
   ```

5. Once the virtual environment is activated, unarchive the `requirements.txt` file to install the necessary dependencies:

   ```bash
   pip install -r requirements.txt
   ```

## Starting the Project

Now that you have set up your environment and installed the dependencies, you can start the DRF project.

1. Start the development server:

   ```bash
   python manage.py runserver
   ```

2. Visit `http://127.0.0.1:8000/` in your web browser to see the Django welcome page.
