

function Post(props){

    const item = props.item;
    const type = props.type;
    return(
        <div className={`entry content-${type}`} key={item.id}>

        <div className="row mb-4 pt-4 pb-4">
            <div className="col-sm-4">
                <img className="smallImg d-block w-100" src={item.jetpack_featured_media_url}  />
            </div>
            <div className="col-sm-8 content-div">
                <div dangerouslySetInnerHTML={{__html: item.content.rendered}}></div>
            </div>
            </div>
        </div>

    )
}

export default Post;