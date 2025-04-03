

function Intro({name1, name2} : {name1: string, name2: string}){

    return (
        <>
            <p>
                {name1} and {name2}, two close friends studying Robotics Engineering at WPI,
                share a passion for speed, albeit in different ways. {name1} is a motorcycle
                enthusiast, with a particular love for the Kawasaki Ninja H2,
                admiring its sleek design and incredible power. {name2}, on the other hand, is
                obsessed with cars, with the Pagani Huayra standing as his dream machine
                due to its artistry and performance. Despite their differing preferences for
                two wheels versus four, they bond over their shared love for engineering and
                competition. When they’re not buried in coursework, they love to unwind by
                playing Mario Kart Wii, where their rivalry continues—{name1} favoring bikes,
                of course, while {name2} sticks to karts.
            </p>
        </>
    )
}

export default Intro
