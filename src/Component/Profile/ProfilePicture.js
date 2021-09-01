import React from 'react';

const ProfilePicture = () => {
    let style = {
        width : 128,
        borderRadius : 128
    }
    return ( 
        <img src="./avatar.jpg" style={style} />
     );
}
 
export default ProfilePicture;