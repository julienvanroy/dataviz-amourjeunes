const OnlyDesktop = () => {
    return (
        <div className="only-desktop flex">
            <div>
                <h1>Oups ...</h1>
                <p>Ce site n'est disponible <br/> que sur grand écran.</p>
                <p>Je t'invite à le consulter <br/> sur ton ordinateur.</p>
            </div>
            <img src="/assets/img/stop.svg" alt="Mince"/>
        </div>
    )
}

export default OnlyDesktop;
