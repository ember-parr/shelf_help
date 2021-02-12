/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardText, CardColumns } from 'reactstrap';



export const MealIdeas = ({mealIdeas}) => {
    const history = useHistory();
    if (mealIdeas.length > 0) {
        return (
        <>
            <p className="lead">We've gathered some recipe ideas for you to try something new! </p>
            <sup><i>click meal card to view full recipe</i></sup>
            <br />

            <CardColumns>
                {mealIdeas.map(meal => {
                    return (<>
                    <Card key={meal.id} onClick={() => history.push(`/recipe/${meal.id}`)}>
                        <CardBody>
                            <CardText>{meal.title}</CardText>
                        </CardBody>
                    </Card>
                    </>)
                })}
            </CardColumns>


        </>
        )} else {
            return (<>
                <i>  </i>
            </>)
        }
}