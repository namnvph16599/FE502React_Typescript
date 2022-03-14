type propsShow = {
    name : string,
    age : number,
    person : {
        name :string,
        age : number,
    }
}
const ShowInfo = (props :propsShow) => {
    console.log(props);
    return (
        <div>Show info</div>
    )

    
}

export default ShowInfo;