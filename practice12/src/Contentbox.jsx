function Contentbox(props){
    return(
       <div style={{border :`5px solid  ${props.color}`, textAlign:`center`, color:`${props.color}`}}>
        {props.children}
        </div>
      )

}
export default Contentbox;