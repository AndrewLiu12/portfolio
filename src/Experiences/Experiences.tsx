import './Experiences.css'

export default function Experiences() {
    return (
        <section id="experiences">
            <div className="experiences">
                <p>
                    <span>
                        <h1>Experiences</h1>
                        <div className="cargurus">
                            <p>Jun 2022 - Present</p>
                            <p>Software Engineer - CarGurus</p>
                            <ul>
                                <li>
                                    Cooperated with multiple teams to produce an data insights tool that uses machine learning to help 100s of dealers know
                                    which car inventory to acquire that will meet or surpass their turn time goals
                                </li>
                                <li>
                                    Created a program that runs at a scheduled time that sends out 100s of emails a week to dealers that want to be emailed
                                    the results of the machine learning model mentioned above
                                </li>
                                <li>
                                    Contributed to release of showing users a local dealer offer when users sell their cars by creating new REST endpoints
                                    that are used to gather thousands of dealer information covering 50% of US population
                                </li>
                                <li>
                                    Advanced the release of having multiple dealer leads show up when users attempt to sell their cars by creating new page
                                    that includes additional dealers shown to users leading to a 10% increase in leads sent to dealers
                                </li>
                                <li>
                                    Created new database schemas and a new microservice that allowed people who had generated offers to have a way to get
                                    back to those offers leading to 1000s of users to go back to that page
                                </li>
                            </ul>
                        </div>
                    </span>
                </p>
            </div>
        </section>
    )
}