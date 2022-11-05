export const Requirements = () => {
  return (
    <main>
      <section className="requirements-catalogue">
        <h1>
          <span>Requirements</span>
        </h1>
        <div className="requirements-list">
          <div className="content">
            <h2>React.js Project Assignment</h2>
            <p>
              Your task is to <span className="bold">design</span> and{" "}
              <span className="bold">implement</span> a web application (Single
              Page Application) using React.js. Use a service like Kinvey or
              Firebase for your <span className="bold">back-end</span> or create
              your own with Node.js and MongoDB or a framework in another
              language (ASP.NET, Spring, Symfony). It can be a{" "}
              <span className="bold">
                discussion forum, blog system, e-commerce site, online gaming
                site, social network
              </span>{" "}
              or any other web application of your choice.
            </p>
            <h2>1. Application Structure</h2>
            <ul>
              The application should have:
              <li>Public Part (Accessible without authentication)</li>
              <li>Private Part (Available for Registered Users)</li>
            </ul>
            <h3>1.1 Public Part</h3>
            <p>
              The public part of your projects should be visible{" "}
              <span className="bold">without authentication</span>. This public
              part could be the application start page, the user login, and user
              registration forms, as well as the public data of the users, e.g.,
              the blog posts in a blog system, the public offers in a bid
              system, the products in an e-commerce system, etc.
            </p>
            <h3>1.2 Private Part (User Area)</h3>
            <p>
              Registered users should have a personal area in the web
              application{" "}
              <span className="bold">accessible after successful login</span>.
              This area could hold for example the user's profiles management
              functionality, the user's offers in a bid system, the user's posts
              in a blog system, the user's photos in a photo-sharing system, the
              user's contacts in a social network, etc.
            </p>
            <h2>2. General Requirements</h2>
            <p>
              Your Web application should use the following technologies,
              frameworks, and development techniques:
            </p>
            <ul>
              <li>
                At least 3 different <span className="bold">dynamic pages</span>{" "}
                (pages like about, contacts, etc. do not count towards that
                figure)
              </li>
              <li>
                Must have specific <span className="bold">views</span>:
                <ul>
                  <li>
                    <span className="bold">Catalog</span> - list of all created
                    records
                  </li>
                  <li>
                    <span className="bold">Details</span> - information about a
                    specific record
                  </li>
                </ul>
              </li>
              <li>
                At least one collection, different from the User collection,
                with all CRUD operations (create, read, update, delete)
                <ul>
                  <li>
                    <span className="bold">Logged in users</span> - create
                    <span className="bold"> records</span> and{" "}
                    <span className="bold">request</span> to the REST API,{" "}
                    <span className="bold">interaction</span> with the records
                    (via Likes, Dislikes, Comments, etc.)
                  </li>
                  <li>
                    <span className="bold">Logged in (author)</span> - to be
                    able to <span className="bold">Edit</span> /{" "}
                    <span className="bold">Delete</span> their records
                  </li>
                  <li>
                    A <span className="bold">Guest</span> should have{" "}
                    <span className="bold">access</span> to basic website{" "}
                    <span className="bold">information</span> (catalog,
                    details), but <span className="bold">not</span> to the{" "}
                    <span className="bold">functional activities</span>
                  </li>
                </ul>
              </li>
              <li>
                Use React.js for the <span className="bold">client-side</span>
              </li>
              <li>
                Communicate to a <span className="bold">remote service</span>
                (via REST, sockets, GraphQL, or a similar client-server
                technique)
              </li>
              <li>
                Implement <span className="bold">authentication</span>
              </li>
              <li>
                Implement <span className="bold">client-side routing</span>
              </li>
              <li>
                Demonstrate use of programming concepts,{" "}
                <span className="bold">specific to the React library</span>:
                stateless and state full components, bound forms, synthetic
                events, Component Styling, etc.
              </li>
              <li>
                Use a <span className="bold">source control system</span>, like
                GitHub
              </li>
              <li>
                <span className="bold">
                  It is required to have committed in GitHub for at least 3 days
                </span>
              </li>
            </ul>
            <h2>3. Other requirements</h2>
            <ul>
              <li>
                Apply <span className="bold">error handling</span> and{" "}
                <span className="bold">data validation</span> to avoid crashes
                when invalid data is entered
              </li>
              <li>
                The application should be divided into{" "}
                <span className="bold">components</span> with{" "}
                <span className="bold">separate CSS files</span>
              </li>
              <li>
                Brief <span className="bold">documentation</span> on the project
                and project architecture (as .md file)
              </li>
              // think whether to make the word "documentation" a link
              <li>
                Demonstrate use of programming concepts - React Hooks, Context
                API
              </li>
            </ul>
            <h2>4. Public Project Defense</h2>
            <p>
              Each student will have to deliver a{" "}
              <span className="bold">public defense</span> of their work in
              front of the other students, trainers, and assistants. Students
              will have <span className="bold">only 20 minutes</span> for the
              following:
            </p>
            <ul>
              <li>
                <span className="bold">Demonstrate</span> how the application
                works (very shortly)
              </li>
              <li>
                Show the <span className="bold">source code</span> and explain
                how it works
              </li>
              <li>
                Answer <span className="bold">questions</span>
              </li>
            </ul>
            <p>
              Please be <span className="bold">strict in the timing</span>! In
              the <span className="bold">20th</span> minute, you{" "}
              <span className="bold">will be interrupted</span>! It is a good
              idea to leave the{" "}
              <span className="bold">last 5 minutes for questions</span>.
            </p>
            <p>
              Be <span className="bold">well prepared</span> to present the
              maximum of your work for the minimum amount of time. Open{" "}
              <span className="bold">the project assets</span> beforehand to
              save time.
            </p>
            <h2>5. Bonuses</h2>
            <ul>
              <li>
                Use a <span className="bold">state management</span> solution
                (React Redux) instead of Context API
              </li>
              <li>
                Write <span className="bold">Unit Tests</span> for your code
              </li>
              <li>Good UI and UX</li>
              <li>
                Use a <span className="bold">file storage cloud API</span>,
                e.g., <span className="bold">Dropbox, Google Drive</span>, or
                other for storing the files
              </li>
              <li>
                Connect to an external API, like Google Maps, AccuWeather, etc.
              </li>
              <li>
                <span className="bold">Deploy the application</span> in a cloud
                (Heroku, Firebase)
              </li>
              <li>
                <span className="bold">
                  Bonuses depend on the complexity of the implementation
                </span>
              </li>
              <li>
                Anything that is not described in the assignment is a bonus if
                it has some practical use
              </li>
            </ul>
            <h2>6. Assessment Criteria</h2>
            <h3>General Requirements - 50 %</h3>
            <p>
              Implementing all the general requirements will grant you a place
              on the defense schedule. All projects that do not have the general
              requirements will not be accepted for defense.
            </p>
            <h3>Other Requirements - 20 %</h3>
            <h3>Functionality Presentation - 10 %</h3>
            <p>
              Adequately demonstrate the requested functionality. Know your way
              around the application and quickly demonstrate the code.
            </p>
            <h3>Answering Questions - 20 %</h3>
            <p>
              Answer questions about potential functionality outside the scope
              of the project.
            </p>
            <h3>Bonuses - up to 10 %</h3>
            <p>
              Additional functionality or libraries outside the general
              requirements, with motivated usage.
            </p>
            <h2>7. Submission Deadline</h2>
            <p>
              You <span className="bold">must</span> submit your project before
              23:59 on <span className="bold">7 Aug 2022</span> using a survey
              that will show up on <span className="bold">1 Aug 2022</span>. A
              presentation schedule will be available on{" "}
              <span className="bold">10 Aug 2022</span> and will include only
              the projects that were{" "}
              <span className="bold">submitted beforehand</span>. Keep in mind
              that after submitting your project you{" "}
              <span className="bold">are allowed</span> to work on it until the
              date of the <span className="bold">project defense</span>.{" "}
              <span className="bold">Non-submitted</span> projects will
              <span className="bold"> NOT</span> be evaluated.
            </p>
            <h2>8. Restrictions</h2>
            <p>
              You can use <span className="bold">parts</span> (some components,
              routing configurations, form validation, etc...) of the{" "}
              <span className="bold">course workshop</span>, but you are{" "}
              <span className="bold">NOT</span> allowed to use the whole
              workshop as your project assignment. You are{" "}
              <span className="bold">NOT</span> allowed to use{" "}
              <span className="bold">HTML & CSS </span>
              structures from <span className="bold">JS Back-End</span> and{" "}
              <span className="bold">JS Applications</span> Courses.
            </p>
            <h2>9. Project Challenge</h2>
            <p>
              The <span className="bold">best three projects</span> will win a
              discount for the next course or module:
            </p>
            <ul>
              <li>First place - 80% discount voucher</li>
              <li>Second place - 50% discount voucher</li>
              <li>Third place - 30% discount voucher</li>
            </ul>
            <p>
              The ranking of the projects is done{" "}
              <span className="bold">based only on the submitted project</span>{" "}
              (it does not include the assessment of the theoretical exam). The
              voucher could be used for one course or{" "}
              <span className="bold">
                one module in the open or the professional program at SoftUni
              </span>
              . It <span className="bold">cannot be divided</span> into parts or{" "}
              <span className="bold">given to another person</span>. The voucher
              is valid for <span className="bold">one year</span> after the
              announcement of the winners.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
