const PortfolioBody = () => {

    return (
        <div>
            <section className="main">
                <div className="main-cont">
                    <div className="text">
                        <div>
                            <a href="https://silver-trifle-215547.netlify.app/" target="_blank" className="port-pics ttt">
                            <img src="images/TicTacToe.png" width= "150px" height= "150px"/></a>
                            <p className="text-title">Tic-Tac-Toe</p>
                            A Fullstack Academy Class Project utilizing the basic fundamentals of HTML, CSS, and JavaScript to create a classic game.

                            <br></br>
                            <br></br>

                            <a href="https://silver-axolotl-d9bd10.netlify.app/" target="_blank" className="port-pics pros">
                            <img src="images/WoWmining.jpg" width="150px" height="150px"/></a>
                            <p className="text-title">Gold Prospector</p>
                            A Fullstack Academy Class Project utilizing the basic fundamentals of HTML, CSS, and JavaScript to create clicker / counter activity.

                            <br></br>
                            <br></br>

                            <a href="https://phenomenal-semifreddo-6698b7.netlify.app/" target="_blank" className="port-pics web">
                            <img src="images/web1.jpg" width="150px" height="150px"/></a>
                            <p className="text-title">Personal Website #1</p>
                            A Fullstack Academy Class Project utilizing HTML & CSS. This was my first disign of a website before learning anything about JavaScript.
                        </div>
                    </div>
                    <div className="pic pic-portfolio"></div>
                </div>
            </section>
        </div>
    )
}


export default PortfolioBody;