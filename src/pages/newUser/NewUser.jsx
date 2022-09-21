import './newUser.css';

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="johndoe" />
        </div>
        <div className="newUserItem">
          <label>First Name</label>
          <input type="text" placeholder="John" />
        </div>
        <div className="newUserItem">
          <label>Last Name</label>
          <input type="text" placeholder="Smith" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="johnsmith@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <div className='newUserGenderGroup'>
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
            </div>
            <div className='newUserGenderGroup'>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
            </div>
            <div className='newUserGenderGroup'>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Photo</label>
          <input type="file" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  )
}
