import '../styles/global.css'
import '../styles/Profile.css'
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

function Profile() {

    return (
        <div className="profile-body">
            <div className="profile-header">
               <div className="profile-header-background">

               </div>
               <div className="profile-header-info">
                    <div id="prof-pic"></div>
                    <div className="profile-info-box">
                        <h1 className="name">Name</h1>
                        <div id="profile-infos">
                            <div className="profile-info">
                                <EmailIcon id="prof-icon" />
                                <p>Email</p>
                            </div>
                            <div className="profile-info">
                                <PhoneAndroidIcon className='' />
                                <p>Phone Number</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Profile