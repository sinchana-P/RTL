import { useState } from "react"
export const Application = () => {

  const [name, setName] = useState('lily')
  const [bio, setBio] = useState('bio')

  const handleSubmit = () => {
      console.log(name, bio)
  }

  return (
    <>
      {/* <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title='close'>X</span>
      <img src="" alt="a person with a laptop" />
      <div data-testid='custom-element'>Custom HTML</div> */}
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Fullname" value='lily' onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id='bio' name='bio'  onChange={e => setBio(e.target.value)}/>
        </div>
        {/* <div>
          <label htmlFor="job-location">Job Location</label>
          <select id="job-location">
              <option value="">Select a country</option>
              <option value='US'>United States</option>
              <option value='UK'>United Kingdom</option>
              <option value='CA'>Canada</option>
              <option value='IN'>India</option>
              <option value='AU'>Australia</option>
          </select>
        </div> */}
        {/* <div>
          <label>
              <input type='checkbox' id='terms' /> I agree to the terms and conditions
          </label>
        </div> */}
        <div>
          Submit
        </div>

        <button>Submit</button>
      </form>
    </>
  )
}


