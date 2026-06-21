function ProfileCard(props) {
  return (
    <div>
      <h2>name:{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Role: {props.role}</p>
      <p>Technology: {props.technology}</p>
      <p>Surname: {props.surname}</p>
      <p>Live: {props.live}</p>
    </div>
  );
}

export default ProfileCard;