import { useAuth } from "../security/AuthContext"

function FooterComponent(){

    const authContext = useAuth()

    console.log(`Footer Component- ${authContext.number}`)
    return(
        <footer>
            <div className="container">
                Footer
            </div>
        </footer>
    )
}

export default FooterComponent