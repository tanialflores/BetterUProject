import "./PostCardView.scss"

// assets
import couch from "../../../assets/icons/couch.svg"
import avocado from "../../../assets/icons/avocados.png"
import userDefault from "../../../assets/icons/defaultUser.jpg"


export default function ({
    colab=false,
    note=false,
    image=avocado,
}) {
    return(
        <div className="post_view">
            <div className={`user_row ${colab && "colab"}`}>
                <img className="user_pro" src={userDefault} />

                <div className="user_ti">Adeline Burke</div>

                <div className="user_bo">
                    <img src={couch} />
                </div>
            </div>

            <div className={`post_pic ${note && "note"}`}>
                <img src={image} className="post_img" />

                <div className="post_not">Nota</div>
            </div>

            <div className="post_desc">
                <div className="p_it">12/05/2021</div>
                <div className="p_dec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed...</div>
            </div>
        </div>
    )
}