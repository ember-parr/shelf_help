import {Table} from 'reactstrap'



export const RecipeInstructions = ({instructions}) => {



    if (instructions.isArray) {
        return (
            <>
            <Table dark>
                        <thead>
                            <tr>
                                <th>Steps</th>
                                <th>Instructions</th>
                            </tr>
                        </thead>
                        <tbody>
                        {instructions.map(step => {
                            return <tr key={step.number}> <td>{step.number}</td> <td>{step.name}</td> <td></td></tr>
                        })}
                        </tbody>
                    </Table>



            </>
        )
        } else if (!instructions) {
            return(
                <i>no instructions provided. click source link above to view recipe webpage</i>
            )
        } else {
            return (
                <>
                <br /><br />
                <hr />
                <big>Instructions</big>
                <hr />
                <div className="content" dangerouslySetInnerHTML={{__html: instructions}}></div>
                </>
            )
        }
}