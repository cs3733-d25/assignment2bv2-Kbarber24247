
function Table1(){
    return(
        <>
            <p>
                Common modifications:
            </p>
            <table className="collapse">
                <thead>
                <tr>
                    <th>Modification</th>
                    <th>Time (Hrs)</th>
                    <th>Difficulty</th>
                </tr>
                </thead>
                <tbody>
                <tr className="highlight">
                    <td>Secondary air injection (SAI) pump removal</td>
                    <td>2</td>
                    <td>Easy</td>
                </tr>
                <tr>
                    <td>Vacuum system simplification</td>
                    <td>4</td>
                    <td>Medium</td>
                </tr>
                <tr>
                    <td>Diverter valve replacement</td>
                    <td>0.5</td>
                    <td>Easy</td>
                </tr>
                <tr>
                    <td>Front mount intercooler</td>
                    <td>6</td>
                    <td>Difficult</td>
                </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table1