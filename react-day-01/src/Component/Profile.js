
function changebio(bio){
    if(bio=="I love Coding"){
        bio = "I am a coder"
    }

    return bio;
}


function Profile({
  children,
  name = "No Name",
  city = "Unkown",
  job = "No Job",
}) {
  let displaycity;

  if (city == "Galle") {
    displaycity = "galle porak";
  } else {
    displaycity = city;
  }

  return (
    <>
      <ul>
        <li>Name : {name}</li>
        <li>Job : {job == "Software Engineer" ? <>Developer</> : job}</li>
        <li>City : {displaycity}</li>
        <li>Bio : {changebio(children)}</li>
      </ul>
    </>
  );
}

export default Profile;
