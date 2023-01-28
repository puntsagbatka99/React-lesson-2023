export default function Header(props) {
    console.log(props)
    return (
        <div>
            <div className="ui menu">
                <div className="right menu">
                    <a className="item active">
                        <div className="ui simple dropdown item">
                            <i className="heart icon ">
                                {props.wishlist.length}
                            </i>
                            <i className="dropdown icon"></i>
                            <div className="menu">
                                {
                                    props.wishlist.map((w, index) => {
                                        return (
                                            <div style={{ display: "flex" }}>
                                                <div className="item">{w.name}</div>
                                                <button
                                                onClick={()=>{
                                                    console.log("remove from wishlist")
                                                    props.setWishlist(
                                                        props.wishlist.filter(wish => wish.id !== w.id)
                                                    )
                                                }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </a>
                    <a className="item"><i className="shopping basket icon"></i></a>
                </div>
            </div>
        </div>
    )
}