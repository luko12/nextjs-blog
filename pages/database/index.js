export default function showStuff({ props }) {
    return (
        <>
            <h1>yoyo</h1>
            {
                props.map(props => {
                    return (
                        <div key={props.username}>
                            <h2>
                                {props.username}
                            </h2>
                        </div>
                    )
                })
            };
        </>
    )
}

export async function getServerSideProps() {
    const checkCompletedCourse = async () => {
        var username = process.env.user;
        var returnData = {"username" : username};
        console.log(returnData);
        return returnData;
    }
    const props = await checkCompletedCourse();

    return {
        props: JSON.parse(JSON.stringify(props))
    }
}