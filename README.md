<h1>DRF Project Setup</h1>

<p>This repository contains a Django Rest Framework (DRF) project setup guide to help you quickly get started with developing RESTful APIs using Django.</p>

<h2>Prerequisites</h2>

<p>Before you begin, ensure you have the following installed on your system:</p>

<ul>
  <li>Python 3.x</li>
  <li>pip (Python package manager)</li>
</ul>

<h2>Installation and Setup</h2>

<p>Follow these steps to set up the DRF project:</p>

<h3>1. Clone the Repository</h3>

<p>Clone this repository to your local machine using the following command:</p>

<pre><code>git clone &lt;repository_url&gt;
</code></pre>

<h3>2. Create a Virtual Environment</h3>

<p>Navigate to the project directory and create a virtual environment. You can use <code>venv</code> for this purpose.</p>

<p>Create a virtual environment:</p>

<pre><code>python -m venv [env_name]
</code></pre>

<p>Activate the virtual environment:</p>

<ul>
  <li>On Windows:</li>
</ul>

<pre><code>env\Scripts\activate
</code></pre>

<ul>
  <li>On macOS and Linux:</li>
</ul>

<pre><code>source env/bin/activate
</code></pre>

<h3>3. Install Required Packages</h3>

<p>Once the virtual environment is activated, install the required packages using the provided <code>requirements.txt</code> file:</p>

<pre><code>pip install -r requirements.txt
</code></pre>

<p>This will install all the necessary dependencies for the project.</p>

<h3>4. Run Migrations (Optional)</h3>

<p>Run the following commands to apply migrations:</p>

<pre><code>python manage.py makemigrations
python manage.py migrate
</code></pre>

<h3>5. Start the Development Server</h3>

<p>You're now ready to start the Django development server:</p>

<pre><code>python manage.py runserver
</code></pre>

<p>This will start the development server at <code>http://127.0.0.1:8000/</code> by default.</p>

<h2>Testing the Setup</h2>

<p>To test if the setup was successful, open your web browser and navigate to <code>http://127.0.0.1:8000/</code>. You should see the default Django welcome page.</p>
