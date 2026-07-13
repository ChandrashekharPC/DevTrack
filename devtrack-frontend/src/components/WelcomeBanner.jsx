import "./WelcomeBanner.css";

function WelcomeBanner() {

    const name = "Chandrashekhar";

    return (

        <div className="welcome-banner">

            <div>

                <h2>Welcome Back, {name} 👋</h2>

                <p>
                    Here's your project summary for today.
                </p>

            </div>

        </div>

    );

}

export default WelcomeBanner;