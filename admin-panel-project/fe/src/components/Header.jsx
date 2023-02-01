import ArrowBackIcon from '@mui/icons-material/ArrowBack';
export default function Header (){
    return (
        <div  style={{display:"flex", alignItems:"center", justifyContent:"space-between", backgroundColor:"#746ab0"}}>
            <div style={{display:"flex", alignItems:"center"}}>
                <a href="/" style={{textDecoration:"none", color:"white", display:"flex", alignItems:"center"}}><ArrowBackIcon/></a>
                <h3>React Material Admin Full</h3>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
                <img style={{width:"30px", height:"30px", borderRadius:"50px"}} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="profile" />
                <h3>HI, Admin</h3>
            </div>
        </div>
    )
}