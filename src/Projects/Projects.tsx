import './Projects.css'

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects">
                <p>
                    <span>
                        <h1>Projects</h1>
                        <div className="django">
                            <p>Summer 2021</p>
                            <p>Calendar Auto Organizer</p>
                            <ul>
                                <li>Create a web app in Django using Python and JavaScript in a group, testing out the scrum technique</li>
                                <li>Allowed user to enter tasks that required completion and web app organized tasks to decrease time loss</li>
                                <li>Designed a user log-in interface, and stored all the user information and tasks in a SQL database</li>
                            </ul>
                        </div>

                        <div className="ma445">
                            <p>Fall 2021</p>
                            <p>Data Analysis of Cyber Attacks</p>
                            <ul>
                                <li>Originated idea of making a project in the unfamiliar language R to explore data about cyber attacks</li>
                                <li>Used many packages in R that include data manipulation, web scrapping, and displaying on website</li>
                                <li>Organized a group that communicated efficiently using Slack and regularly posting code unto Github</li>
                                <li>Used the specific package in R called ”blogdown” to display data on website, and hosted it on Netlify</li>
                                <li>Attached an API called Shiny to add user interactivity and hosted it on a site called shinyapps.io</li>
                            </ul>
                        </div>
                        
                        <div className="boardgames">
                            <p>Spring 2021</p>
                            <p>GUI Board Games</p>
                            <ul>
                                <li>Designed multiple board games using multiple programming languages, including Java and Python</li>
                                <li>Utilized Java's graphical user interface allowing users to interact with the application in an easy fashion</li>
                                <li>Made use of Python's estensive libraries like ”pygame” to develop easily develop games in Pythone</li>
                            </ul>
                        </div>

                        <div className="pomodoro">
                            <p>Spring 2022</p>
                            <p>Custom Pomodoro Timer</p>
                            <ul>
                                <li>Created a timer based off of the pomodoro technique which allows people to focus more on tasks</li>
                                <li>Utilizing Google Cloud the timer allows users to store tasks and check how long it took to finish them</li>
                                <li>Allowed users to change the length of time on certain sections of timer like work and break times</li>
                            </ul>
                        </div>

                        <div className="reminderslist">
                            <p>Fall 2020</p>
                            <p>Reminder List</p>
                            <ul>
                                <li>Constructed a web app using JavaScript, CSS, and HTML completely from scratch to track tasks</li>
                                <li>Allowed users to keep track of tasks they needed to complete and allow placement in different priorities</li>
                                <li>Includes a feature to add a deadline to a task and notifying the user if a task deadline is close</li>
                            </ul>
                        </div>

                        <div className="selfimprovement">
                            <p>Fall 2019</p>
                            <p>Self Improvement App</p>
                            <ul>
                                <li>Developed an app that allows users to track self-set improvement goals and observe other's progress</li>
                                <li>Produced in Android Studio, and used API calls to store all the user data onto a cloud database</li>
                                <li>Designed a feature to allow user to geographically locate other users of the app using Google Maps API</li>
                            </ul>
                        </div>
                    </span>
                </p>
            </div>
        </section>
    )
}